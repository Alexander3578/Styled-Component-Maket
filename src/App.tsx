import React from 'react';
import './App.css';
import styled from "styled-components";
import {Thema} from "./Style/Theme/Thema";
import {Picture} from "./components/Picture.styled";
import {Headline} from "./components/Headline.styled";
import {Paragraph} from "./components/Paragraph.styled";
import {MyButton, MyNewButton} from "./components/Button.styled";
import {Box, SecondBox} from "./components/Box.styled";

function App() {
    return (
        <MyDiv>
            <Box>
                <Picture
                    imgURL={'https://avatars.mds.yandex.net/i?id=dc8032c9b0cd6e7a89b33efd5898f4f09af25aaa-9843030-images-thumbs&n=13'}></Picture>
                <SecondBox>
                    <Headline>Headline</Headline>
                    <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.
                    </Paragraph>
                    <MyButton color={Thema.colors.primary} backColor={Thema.colors.secondary}>See more</MyButton>
                    <MyNewButton color={Thema.colors.secondary} backColor={'transparent'}>Save</MyNewButton>
                </SecondBox>
            </Box>
        </MyDiv>
    );
}

const MyDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`


export default App;
