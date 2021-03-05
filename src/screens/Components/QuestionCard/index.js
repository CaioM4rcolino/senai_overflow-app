import React, { useState } from 'react';
import { Container, CardHeader, ImageProfile, HeaderContent, TextPostOwner, PostDate, CardBody, QuestionImage, TextDescription, TextTitle, CardFooter, ContainerInputAnswer,
InputAnswer,  
SendIcon,
ContainerAnswer} from './styles';
import Image from "../../../../assets/foto_perfil.png";
import Doubt from "../../../../assets/doubt.png";
import colors from '../../../styles/colors';
import { FlatList, TouchableOpacity } from 'react-native';

export default function QuestionCard({question}){

    const [displayAnswers, setDisplayAnswers] = useState(false)

    return(
        <Container>
            <CardHeader>
                <ImageProfile source={
                    question.Student.photo ? 
                    {uri: question.Student.photo}
                    : Image
                }/>
                <HeaderContent>
                    <TextPostOwner>
                        {question.Student.name}
                    </TextPostOwner>
                    <PostDate>
                        {question.createdAt}
                    </PostDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextTitle>
                {question.title}
                </TextTitle>
                <TextDescription>
                {question.description}
                </TextDescription>
                {question.photo && (
                    <QuestionImage source={{uri: question.photo}}/>
                )} 
               
            </CardBody>
            <CardFooter>

                <TouchableOpacity onPress={() => setDisplayAnswers(!displayAnswers)}>
                    <TextPostOwner>
                    {question.Answers.length === 0 ? "Seja o primeiro a responder" : `${question.Answers.length} respostas`}
                    </TextPostOwner>
                </TouchableOpacity>
                
                {displayAnswers && question.Answers.length > 0 && (
                    <FlatList
                        
                        data={question.Answers}
                        keyExtractor={(answer) => String(answer.id)}
                        renderItem={({item: answer}) => <AnswerCard answer={answer}/>}
                        
                    />
                )}
                <ContainerInputAnswer>
                    <InputAnswer placeholder="Responda essa dúvida!" placeholderTextColor={colors.lightTransparent}/>
                    <SendIcon name="paper-plane"/>
                </ContainerInputAnswer>
            </CardFooter>
        </Container>
    );
}


function AnswerCard({answer}){

    return(

        <ContainerAnswer>
            <CardHeader>
            <ImageProfile source={
                    answer.Student.photo ? 
                    {uri: answer.Student.photo}
                    : Image
                }/>
                <HeaderContent>
                    <TextPostOwner>
                        {answer.Student.name}
                    </TextPostOwner>
                    <PostDate>
                        {answer.created_at}
                    </PostDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextDescription>
                    {answer.description}
                </TextDescription>
            </CardBody>
        </ContainerAnswer>
    );

}