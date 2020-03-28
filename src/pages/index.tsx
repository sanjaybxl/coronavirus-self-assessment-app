import React from "react";
import Hero from "containers/Hero";
import SEO from "components/SEO";
import About from "containers/About";
import Share from "containers/Share";

const Index = (): JSX.Element => {
    return (
        <>
            <SEO title={"Home"}/>
            <Hero />
            <Share />
            <About light={true}/>
        </>
    );
};

export default Index;
