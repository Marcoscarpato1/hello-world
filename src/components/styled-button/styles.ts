// @ts-ignore
import styled from "styled-components/native";
import {StyledButtonProps} from "./StyledButton";

export const Container = styled.View<StyledButtonProps>`
  width: 120px;
  height: 40px;
  background: ${(props: StyledButtonProps) => props.isRed ? "red" : "green"};
  margin: 10px;
  border-radius: 4px;
  align-items: center;

`;
export const ButtonText = styled.Text`
  font-size: 15px;
  color: aliceblue;
  margin: 10px;
  
`;