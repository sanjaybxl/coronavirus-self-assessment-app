import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

const SEO = () => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>How you feel?</title>
    </Helmet>
);
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO
