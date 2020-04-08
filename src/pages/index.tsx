import React from "react";
import Hero from "containers/Hero";
import SEO from "components/SEO";
import About from "containers/About";

const Index = (): JSX.Element => {
    return (
        <>
            <SEO title={"Home"} />
            <Hero />
            <About light={true} />
        </>
    );
};

export default Index;
