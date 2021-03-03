import React from 'react';
import { View, Text, StatusBar } from "react-native";
import { Container, Toolbar, Image, TextToolbar } from './styles';
import colors from '../../styles/colors';
import QuestionCard from '../Components/QuestionCard';

export default function Home(){

    StatusBar.setBackgroundColor(colors.primary);
    
    return(
        <Container>
            <Toolbar>
               <TextToolbar>Senai Overflow</TextToolbar>
            </Toolbar>

            <QuestionCard/>
        </Container>
    );
}

