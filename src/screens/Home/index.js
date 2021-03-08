import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList } from "react-native";
import { Container, Toolbar, Image, TextToolbar, LogoutIcon } from './styles';
import colors from '../../styles/colors';
import QuestionCard from '../Components/QuestionCard';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

  const [isLoadingFeed, setIsLoadingFeed] = useState(false)

  const [questions, setQuestions] = useState([]);

  const [page, setPage] = useState(1);

  const [totalQuestions, setTotalQuestions] = useState(0);

    const loadQuestions = async () => {
        //Se já estiver buscando, não busca de novo
        if (isLoadingFeed) return;
    
        //Se tiver chego no fim, não busca de novo
        if (totalQuestions > 0 && totalQuestions == questions.length) return;
    
        setIsLoadingFeed(true);
        const response = await api.get("/feed", {
          params: { page },
        });
    
        setPage(page + 1);
    
        setQuestions([...questions, ...response.data]);
    
        setTotalQuestions(response.headers["x-total-count"]);
    
        setIsLoadingFeed(false);
     };

     useEffect(() => {
         loadQuestions();
     }, [])


    StatusBar.setBackgroundColor(colors.primary);
    const navigation = useNavigation();

    
    return(
        <Container>
            <Toolbar>
               <TextToolbar>Senai Overflow</TextToolbar>
               <LogoutIcon onPress={() => navigation.navigate("Login")} name="sign-out"/>
            </Toolbar>
            <FlatList
                data={questions}
                keyExtractor={(question) => String(question.id)}
                renderItem={({item: question}) => <QuestionCard question={question}/>}
                onEndReached={() => console.log("CHEGA!!!!!!")}
                onEndReachedThreshold={0.2}
            />
        </Container>
    );
}

