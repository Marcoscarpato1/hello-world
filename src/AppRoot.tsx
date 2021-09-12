import React, {useEffect, useState} from 'react'
import {Button, Text, View} from "react-native";
import {StyledButton, StyledText} from "./components";
// @ts-ignore
import styled from "styled-components/native";
import strings from "./strings"

interface AppRoot {
    text: string
}


const AppRoot = ({text}: AppRoot) => {

    const [counter, setCounter] = useState<number>(1)


    const onClick = (text: String) => {
        alert(text)
    };

    const increment = () => {
        setCounter((estadoAtual) => estadoAtual + 1)
    }

    useEffect(() => {
        if (counter === 10)
            alert("Parabéns cuzão")

    }, [counter]);


    return (
        <View>
            <StyledText text={text}/>
            <HorizontalContainer>
                <StyledButton isRed onClick={() => onClick(strings["Red-Button"])}>
                    Clica ae po
                </StyledButton>
                <StyledButton onClick={() => onClick(strings["Green-Button"])}>
                    Clica aqui nao
                </StyledButton>
            </HorizontalContainer>
            <StyledButton onClick={increment}>
                +1
            </StyledButton>
            <StyledText text={counter.toString()}/>
        </View>
    );
}


const HorizontalContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 20px;
  padding: 20px;
`;


export default AppRoot;