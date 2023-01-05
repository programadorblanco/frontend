import { Route, Redirect } from "react-router-dom";
import { anonymous } from "./AllRoutes";
import { userExist } from "./AllRoutes";

export const PublicRoute = ({ auth, role, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (!auth) {
                    return (<Component />)
                }
                else {
                    if (role === 1) {
                        return (<Redirect to={anonymous.home} />)
                    }
                    else {
                        return (<Redirect to={userExist.home} />)
                    }
                }
            }
            }
        />
    )
}