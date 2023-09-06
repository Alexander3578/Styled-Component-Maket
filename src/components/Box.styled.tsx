import styled from "styled-components";
import {Thema} from "../Style/Theme/Thema";

export const Box = styled.div`
  width: 300px;
  height: 350px;
  margin: 0 auto;
  padding-top: 10px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  background-color: ${Thema.colors.primary};
`

export const SecondBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`