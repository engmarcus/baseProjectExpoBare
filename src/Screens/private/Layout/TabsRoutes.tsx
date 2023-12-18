import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

/** Pages */
import Home from '@/Screens/private/Home';
import Profile from '@/Screens/private/Profile';

export default function TabsRoutes(){
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen 
                name='home' 
                component={Home}
                options={{
                    tabBarIcon: ({size,color}) => <FontAwesome5 name='home' size={size} color={color}/>,
                    tabBarLabel: 'Inicio'
                }}
                
            />
            <Tab.Screen 
                name='profile' 
                component={Profile}
                options={{
                    tabBarIcon: ({size,color}) => <FontAwesome5 name='user' size={size} color={color}/>,
                    tabBarLabel: 'Perfil'
                }}
            />
        </Tab.Navigator>
    )
}