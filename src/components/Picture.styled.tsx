import styled from "styled-components";
import {Thema} from "../Style/Theme/Thema";

type PicturePropsType = {
    imgURL?: string;
}

export const Picture = styled.img<PicturePropsType>`
  width: ${Thema.img.sizeW}px;
  height: ${Thema.img.sizeH}px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-image: url(${props => props.imgURL});
  background-size: contain;
  border-radius: ${Thema.img.radius}px;
`
