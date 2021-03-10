import React, { useState } from 'react';
import { Container, Toolbar, TextToolbar, TextInputLogin, Label, Content } from "./styles";
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { Alert } from 'react-native';
import { signIn } from '../../services/security';


export default function Login(){

    const navigation = useNavigation();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async () => {
    
        try {
    
          const response = await api.post("/sessions", login)

          signIn(response.data)

          navigation.navigate("Home")
          
        } catch (error) {
          console.error(error);    
          if(error.response){
              Alert.alert("Ops", error.response.data.error)
          }
        }
    
      }

    const handleEmail = (e) => {
        setLogin({...login, email: e})
    }

    const handlePassword = (e) => {
        setLogin({...login, password: e})
    }


    return(

        <Container>
            <Toolbar>
                <TextToolbar>
                    Login
                </TextToolbar>
            </Toolbar>

            <Content>
                <Label>E-mail</Label>
                <TextInputLogin 
                autoCompleteType="email" 
                placeholder="Digite seu email"
                onChange={handleEmail}
            
                />

                <Label>Senha</Label>
                <TextInputLogin 
                autoCompleteType="password" 
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChange={handlePassword}/>

            <Button 
            WhandlePress={handleLogin} 
            text="Entrar" 
            style={{width: "96%"}}
            disabled={(login.email === "" || login.password === "")}
            />
        
            
                
            </Content>
           
            
        </Container>
        
       
    );

}

