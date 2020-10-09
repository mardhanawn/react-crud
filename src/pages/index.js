import React from 'react'
import { BrowserRouter, Route, /* Switch, */ Redirect } from 'react-router-dom'

import WOW from 'wow.js'
import 'animate.css'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import thunk from 'redux-thunk' 

import LandingPage from './LandingPage'
import CreatePage from './CreatePage/createPage'
import UpdatePage from './UpdatePage/editPage'

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

new WOW().init();

function Pages() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    {/* <Switch> */}
                        <Route path="/" exact render={props => <LandingPage {...props} />} />
                        <Route path="/create" render={props => <CreatePage {...props } />} />
                        <Route path="/update" render={props => <UpdatePage {...props } />} />
                        <Redirect to="/" />
                        <Redirect from="/" to="/" />
                    {/* </Switch> */}
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default Pages
