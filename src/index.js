import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

// Apollo import
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/graphql'
})

client
  .query({
    query: gql`
    {
        pokemon(name: "Pikachu") {
          id
          number
          name
          attacks {
            special {
              name
              type
              damage
            }
          }
          evolutions {
            id
            number
            name
            weight {
              minimum
              maximum
            }
            attacks {
              fast {
                name
                type
                damage
              }
            }
          }
        }
      }      
    `
  })
  .then(result => console.log(result))


ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root')
    )
registerServiceWorker()