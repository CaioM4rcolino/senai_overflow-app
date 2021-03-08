import styled from "styled-components/native";
import colors from "../../styles/colors.js";
import { TextDefault } from "../../styles/stylesGlobal.js";
import {StatusBar} from "react-native";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: ${StatusBar.currentHeight}px;
    background-color: ${colors.dark};

`;

export const Toolbar = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-content: space-between;
    
    border-bottom-width: 1px;
    border-bottom-color: ${colors.light};
    background-color: ${colors.primary};
`; 


export const TextToolbar = styled(TextDefault)`

    font-size: 20px;
    flex: 1;
    color: ${colors.dark};
    font-weight: bold;
    text-align: center;
    margin: 10px;

`;

export const Content = styled.View`

    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;


`;

export const TextInputLogin = styled.TextInput`

    width: 96%;
    color: ${colors.light};
    margin-bottom: 15px;
    padding: 10px;
    font-size: 20px;
    background-color: ${colors.darkGray};

`;

export const Label = styled(TextDefault)`
    font-weight: bold;
    width: 100%;
    text-align: left;
    font-size: 20px;
`;