import React from "react";
import {Text} from "react-native";
import {Container} from "./styles";

interface StyledTextProps {
    text: String
}

const StyledText = (props: StyledTextProps) => {
    return (
        <Container>
            {props.text}
        </Container>
    );
}

export default StyledText;