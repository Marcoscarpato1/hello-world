import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {ButtonText, Container } from "./styles";

export interface StyledButtonProps {
    onClick ?: () => void
    isRed ?: boolean
    children ?: string
}

export const StyledButton = ({isRed, children, onClick} : StyledButtonProps) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Container isRed={isRed}>
                <ButtonText>{children}</ButtonText>
            </Container>
        </TouchableOpacity>
    );


}