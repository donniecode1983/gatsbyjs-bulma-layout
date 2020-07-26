import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

const Bulma = () => {
    return (
        // <Layout>
        //     <SEO title={"Bulma Page"} />
        // <h1>Bulma Button</h1>
        //     <Button color={"primary"}>Hello World</Button>
        // </Layout>

        <div className={"container"}>
            <h1>This is the Bulma Container</h1>
        </div>

    )
}

export default Bulma
