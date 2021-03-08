import React from 'react';
import { Container, Toolbar, TextToolbar, TextInputLogin, Label, Content } from "./styles";
import {senaiBg} from "../../../assets/bg.jpg"
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';


export default function Login(){

    const navigation = useNavigation();

    

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
                />
                <Label>Senha</Label>
                <TextInputLogin 
                autoCompleteType="password" 
                placeholder="Digite sua senha"
                secureTextEntry={true}/>

                <Button handlePress={() => navigation.navigate("Home")} text="Entrar" style={{width: "96%"}}/>
            </Content>
           
            
        </Container>
        
       
    );

}

