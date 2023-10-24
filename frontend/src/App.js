import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InfoPage from './components/InfoPage/index.js';


function App () {
    return (
        < Switch >
            <Route exact path='/'>
                <InfoPage />
            </Route>
        </Switch>
    )
}

export default App