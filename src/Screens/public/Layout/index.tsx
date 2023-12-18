import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login";

const Stack = createNativeStackNavigator()

export default function PublicRoutes(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}