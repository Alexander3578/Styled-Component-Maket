import styled from "styled-components";
import {Thema} from "../Style/Theme/Thema";

export const Picture = styled.img`
  width: ${Thema.img.sizeW}px;
  height: ${Thema.img.sizeH}px;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-image: url("https://w.forfun.com/fetch/4d/4d68a6473991c2e8853ae40ce86e46e4.jpeg");
  background-size: contain;
  border-radius: ${Thema.img.radius}px;
`
