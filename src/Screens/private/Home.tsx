import { login } from "@/Features/auth/slice";
import { useAppDispatch } from "@/Hooks/UseAppDispach";
import { UseAppSelector } from "@/Hooks/UseAppSelector";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    /* Criar novo hook para facilitar com type Script*/
    const {isLogin} = UseAppSelector((state) => state.auth)
    const dispatch  = useAppDispatch();


    console.log(isLogin)

    function handleLogin(){
        dispatch(login())
    }
    
    return(
        <View>
            <Text>Aqui Temos a Home Page</Text>
            
        </View>
    )
}