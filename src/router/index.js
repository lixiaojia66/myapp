import {Switch,Route} from 'react-router-dom';
import {router_list} from './router.config';

function RouterRoutes(props) {  //props从父组件上接过来？？？
    return <Switch>
        {router_list.map((item, index) => {
           return <Route
                key={index}
                path={item.path}
                exact={item.exact}
                render={(routerProps) => {  //routerProps是router.config？？？
                    return item.render({ ...routerProps, ...props });
                }}

            />
        })}
    </Switch>

}

export default RouterRoutes;


/**
 * 
 * 
 * 
 */

