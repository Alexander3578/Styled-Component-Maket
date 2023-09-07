import styled from "styled-components";
import {Thema} from "../Style/Theme/Thema";

export const Paragraph = styled.p`
  width: 260px;
  height: 40px;
  margin-top: 20px;
  vertical-align: center;
  line-height: 20px;
  font-family: ${Thema.text.fontName};
  font-size: ${Thema.text.fontSP}px;
  font-weight: 500;
  color: ${Thema.colors.paragraph}
;
`
