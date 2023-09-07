import styled from "styled-components";
import {Thema} from "../Style/Theme/Thema";

type MyButtonPropsType = {
    color?: string,
    backColor?: string
}

export const MyButton = styled.button<MyButtonPropsType>`
  width: ${Thema.button.sizeW}px;
  height: ${Thema.button.sizeH}px;
  margin-top: 19px;
  margin-right: 12px;
  border-radius: ${Thema.button.radius}px;
  border: none;
  background-color: ${props => props.backColor};
  font-family: ${Thema.text.fontName};
  font-weight: ${Thema.text.weightName};
  font-size: 10px;
  color: ${props => props.color};
`

export const MyNewButton = styled(MyButton)`
  border: 2px solid #4E71FE;
  margin: 0;
`