import styled from "styled-components/native";
import colors from "../../styles/colors.js";
import {StatusBar} from "react-native";
import { TextDefault } from "../../styles/stylesGlobal.js";

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