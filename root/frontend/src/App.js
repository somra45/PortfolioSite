import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InfoPage from './components/InfoPage/index.js';
import SplashPage from './components/SplashPage/index.js';


function App () {
    return (
        < Switch >
            <Route exact path='/info'>
                <InfoPage />
            </Route>
            < Route exact path='/'>
                <SplashPage/>
            </Route>
        </Switch>
    )
}

export default App