import React from "react"
import { Link, graphql } from "gatsby";

import { Flex, Box, Centered, Image } from '../components/primitives';
import { Heading1, TextLead } from '../components/variants';
import SEO from "../components/seo"
import BgImage from "../components/bgImage";
import Logo from "../components/logo"

const IndexPage = ({data}) => (
  <Box>
    <SEO title="Stay Tuned" keywords={['sacredearth', 'cafe', 'organic']} />
    <BgImage
      title="university"
      fluid={data.forest.childImageSharp.fluid}
      overlayColor="#0f221e4d"
      height="100vh"
    >
      <Centered color="white" p={3}>
        <Logo
          fluid={data.logo.childImageSharp.fluid}
          mobileBottom="35%"
          mobileWidth="100%"
          tabletWidth="80%"
        />
        <Heading1>Coming Soon</Heading1>
        <TextLead as="p" 
          textAlign="center"
        >We Are Preparing Something Amazing For You</TextLead>
      </Centered>
    </BgImage>
  </Box>
)

export const query = graphql`
  query {
    forest: file(relativePath: { eq: "background1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage
