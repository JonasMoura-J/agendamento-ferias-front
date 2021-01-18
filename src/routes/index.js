import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Registro from '../pages/registros'
import Cadastro from '../pages/cadastro/index'
import NotFound from '../pages/notFound'
import Relatorio from '../pages/relatorio'
import Dashboard from '../pages/dashboard/'


const Routes = () => {

    return(
        <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/cadastro' component={Cadastro} exact/>
            <Route path='/relatorio' component={Relatorio}/>
            <Route path='/registro' component={Registro}/>
            <Route path='*/' component={NotFound}/>
        </Switch>
    )
}

export default Routes;