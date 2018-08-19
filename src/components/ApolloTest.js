import React, { Component } from 'react'
import { Query } from "react-apollo"
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import gql from "graphql-tag"

class ApolloTest extends Component {

  render() {
    return (
        <Query
        query={gql`
          {
            pokemons(first: 50) {
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
            }
            }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
    
          return data.pokemons.map(({ number, name }) => (
           <Card key={number}>
              <CardBody>{`${number}: ${name}`}</CardBody>
            </Card>
          ));
        }}
      </Query>
    )
  }
}

export default ApolloTest