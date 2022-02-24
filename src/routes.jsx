import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, useParams, Switch} from 'react-router-dom'

import Listagem from './pages/Listagem';

export default function Newroutes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Listagem} />
            </Switch>
        </BrowserRouter>
    )
}
