import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useLazyGetCharacterQuery } from "@/Services/testeApi";
import { getItens } from "@/Features/auth/Thunks/thunks";
import { login } from "@/Features/auth/slice";

import { useAppDispatch } from "@/Hooks/UseAppDispach";
import { UseAppSelector } from "@/Hooks/UseAppSelector";

export default function Login(){
    const dispatch  = useAppDispatch();
    const {isLoading} = UseAppSelector((state) => state.auth)
    const [trigger, result, lastPromiseInfo] = useLazyGetCharacterQuery()


    function handleLogin(){
        dispatch(login())
    }


    function queryStart(){
        trigger(null)
    }


    useEffect(()=>{
        if(result.data){
            console.log()

        }
    },[result])

    return(
        <View>
            <Text>Entrar Conta</Text>
            <TouchableOpacity onPress={()=> dispatch(getItens())}>
                <Text>Sincrono request</Text>
            </TouchableOpacity>
            {isLoading && <Text> Carregando !!</Text>}

            <TouchableOpacity onPress={handleLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>queryStart()}>
                <Text>
                    UserQueryLarz
                </Text>
            </TouchableOpacity>
            {result && result.isLoading &&  <Text> Carregando !!</Text>}
            <Text>{result?.data?.results[0]?.created ??'carregando'}</Text>
        </View>
    )
}