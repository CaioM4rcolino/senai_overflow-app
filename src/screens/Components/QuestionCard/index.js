import React from 'react';
import { Container, CardHeader, ImageProfile, HeaderContent, TextPostOwner, PostDate, CardBody, QuestionImage, TextDescription, TextTitle, CardFooter, ContainerInputAnswer,
InputAnswer,  
SendIcon,
ContainerAnswer} from './styles';
import Image from "../../../../assets/foto_perfil.png";
import Doubt from "../../../../assets/doubt.png";
import colors from '../../../styles/colors';

export default function QuestionCard(){
    return(
        <Container>
            <CardHeader>
                <ImageProfile source={Image}/>
                <HeaderContent>
                    <TextPostOwner>
                        Por Fulano
                    </TextPostOwner>
                    <PostDate>
                        em 03/03/2021 às 15:02
                    </PostDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextTitle>
                O que é JAVASCRIPT???
                </TextTitle>
                <TextDescription>
                EIS A QUESTÃO
                </TextDescription>
                <QuestionImage source={Doubt}/>
            </CardBody>
            <CardFooter>
                <TextPostOwner>
                    Seja o primeiro a responder
                </TextPostOwner>
                <AnswerCard/>
                <AnswerCard/>
                <ContainerInputAnswer>
                    <InputAnswer placeholder="Responda essa dúvida!" placeholderTextColor={colors.lightTransparent}/>
                    <SendIcon name="paper-plane"/>
                </ContainerInputAnswer>
            </CardFooter>
        </Container>
    );
}


function AnswerCard(){

    return(

        <ContainerAnswer>
            <CardHeader>
            <ImageProfile source={Image}/>
                <HeaderContent>
                    <TextPostOwner>
                        Por Ciclano
                    </TextPostOwner>
                    <PostDate>
                        em 04/03/2021 às 21:12
                    </PostDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextDescription>
                    linguagem
                </TextDescription>
            </CardBody>
        </ContainerAnswer>
    );

}