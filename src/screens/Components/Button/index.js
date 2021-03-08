import React from 'react';
import { Container, Text } from './styles';

export default function Button({text, handlePress, ...rest}){
    return(

        <Container onPress={handlePress} {...rest}>
            <Text>{text}</Text>
        </Container>

    );
}