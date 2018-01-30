import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DeckContainer from './DeckContainer'
import CardContainer from './CardContainer'

const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={DeckContainer} /> } />
      <Route path="/:cardValue" component={CardContainer} />
    </Switch>
  </div>
)

export default App
