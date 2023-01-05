import { Route, Redirect } from "react-router-dom";
import { publicRoutes } from "./AllRoutes";

export const PrivateRouteAnonymus = ({auth, role, component: Component, ...rest})=>{
    return (
        <Route 
            {...rest}
            render = {()=>{
                if(auth){
                    if(role === 1){
                        return(<Component />)
                    }
                    else{
                        
                    }
                }
                else{
                    return(<Redirect to={publicRoutes.login}/>)
                }
            }
            }
        />
    )
}