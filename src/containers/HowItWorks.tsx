import React, {useRef} from "react";
import styled from "styled-components";
import Section from "components/Section";
import Container from "components/Container";
import Slider from "react-slick";
import {useWindowSize} from "../utils/useWindowSize";

require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");


const HowItWorksSection = styled(Section)`
    background: 
        url("${require('../design/assets/blobs/group1.svg')}"),
        url("${require('../design/assets/blobs/group2.svg')}"),
        url("${require('../design/assets/blobs/group3.svg')}"),
        white;
    background-repeat: no-repeat;
    background-position: -20% center, 40% -20%, 110% 40%;
    color: #3F3D56;
    padding: 5vh 0;
    h2{
        color: ${props=> props.theme.colors.primary};
    }
    p{
        font-size: 1.5em;
        width: 50%;
        @media(max-width: 1000px){
            width: 100%;
        }
    }
    @media(max-width: 1000px){
        background-size: 0;
    }
`;
const StepsGrid = styled.div<any>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5vw;
    grid-row-gap: 2em;
    margin-top: 10vh;
    .step{
        display: flex;
        h3{
            font-size: 3em;
            margin: 0 10px 0 0;
        }
        p{
            margin: 0;
            width: 100%;
        }
        button{
            border: none;
            background: none;
            padding: 0;
            margin: 2em 0 0 0;
            font-size: 1.2em;
            color: ${props => props.theme.colors.primary};
            float: right;
        }
    }
    @media(max-width: 1000px){
        grid-template-columns: 1fr;
    }
`;

const HowItWorks = (): JSX.Element => {
    const { width } = useWindowSize();
    const ref = useRef();
    const showSlider = width <= 1000;
    const handleNextSlide = () => {
        if(showSlider && ref.current)
            (ref.current as any).slickNext()
    }
    return (
        <HowItWorksSection className={"how-it-works-section"}>
            <Container>
                <h2>How it works <br/>application?</h2>
                <p>
                Our application will help you quickly diagnose your symptoms will guide you through all the steps of the disease.
                </p>
                <StepsGrid as={showSlider ? Slider : 'div'} ref={ref} arrows={false}>
                    <div>
                        <div className={"step"}>
                            <h3>1.</h3>
                            <div>
                                <p>Answer six questions. A few words, what are these questions, some description. Some words, what are some questions, some description, Some words, what are some questions, some description.</p>
                                {
                                    showSlider && <button onClick={handleNextSlide}>Next</button>
                                }
                            </div>

                        </div>
                    </div>
                    <div>
                    <div className={"step"}>
                            <h3>2.</h3>
                            <div>
                                <p>Answer six questions. A few words, what are these questions, some description. Some words, what are some questions, some description, Some words, what are some questions, some description.</p>
                                {
                                    showSlider && <button onClick={handleNextSlide}>Next</button>
                                }
                            </div>
                    </div>
                    </div>
                    <div>
                    <div className={"step"}>
                            <h3>3.</h3>
                            <div>
                                <p>Answer six questions. A few words, what are these questions, some description. Some words, what are some questions, some description, Some words, what are some questions, some description.</p>
                                {
                                    showSlider && <button onClick={handleNextSlide}>Next</button>
                                }
                            </div>
                        </div>
                    </div>
                </StepsGrid>
            </Container>
        </HowItWorksSection>
    );
}

export default HowItWorks
