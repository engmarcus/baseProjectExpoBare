import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import TabsRoutes from './TabsRoutes'

const Drawer = createDrawerNavigator()

export default function PrivateRoutes(){
    return(
        <Drawer.Navigator screenOptions={{ }}>
            <Drawer.Screen 
                name='inicial'
                component={TabsRoutes}
                options={{title : 'Home'}}
            />
        </Drawer.Navigator>
    )
}