import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Button from "components/Button";
import {Link} from "@reach/router";
import {useTranslation} from "react-i18next";

const HeroWrapper = styled.div`
    min-height: calc(100vh - 20vh);
        background: 
        url("${require('../design/assets/blobs/group6.svg')}"),
        url("${require('../design/assets/blobs/group4.svg')}"),
        url("${require('../design/assets/people.svg')}");
    background-position: -60% center, 40% -35vh, 90% center;
    background-repeat: no-repeat;
    background-size: 45%;
    color: white;
    padding-top: 20vh;
    @media(max-width: 1000px){
        width: 100%;
        background-size: 0 0,0 0, 500px 400px;
        background-position: -60% center, 40% -20%, center 10%;
        padding-top: 320px;
        min-height: calc(100vh - 320px);
    }
`;

const HeroContent = styled.div`
    width: 100%;
    h1{
       font-size: 4em;
       @media(max-width: 1000px){
            font-size: 3em;
        }
    }
    p{
       font-size: 1.5em;
       @media(max-width: 1000px){
            font-size: 1.2em;
        }
    }
    a{
        margin-top: 2em;
    }
    @media(max-width: 1000px){
        width: 100%;
    }
`;

const Hero = (): JSX.Element => {
    const {t} = useTranslation()
    return (
    <HeroWrapper>
        <Container>
            <HeroContent>
                <h1>
                    Covid-19 <br />
                    Self-assessment
                </h1>
                <Button as={Link} to={"/app"} light big className={"call-to-action"}>
                    {t("call_to_action")}
                </Button>
                
            </HeroContent>
        </Container>
    </HeroWrapper>
);
}

export default Hero
