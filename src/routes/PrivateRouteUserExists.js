import { Route, Redirect } from "react-router-dom";
import { publicRoutes } from "./AllRoutes";

export const PrivateRouteUserExists = ({auth, role, component: Component, ...rest})=>{
    return (
        <Route 
            {...rest}
            render = {()=>{
                if(auth){
                    if(role === 2){
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