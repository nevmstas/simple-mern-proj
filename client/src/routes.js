import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage, DetailsPage, LinksPage } from './Pages'
export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path ="/links" exact>
                    <LinksPage />
                </Route>
                <Route path ="/create" exact>
                    <LinksPage />
                </Route>
                <Route path ="/detail/:id" exact>
                    <DetailsPage />
                </Route>
                <Redirect to="create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}