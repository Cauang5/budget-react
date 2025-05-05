import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Incoming' value='1234.54' color='green' size='tiny' /> 
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title='Expenses' value='623.20' color="red" size='tiny' /> 
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances