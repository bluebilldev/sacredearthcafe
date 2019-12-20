import React from "react"
import SEO from "../components/seo"
import { Flex, Box, Centered } from '../components/primitives';
import { Heading1, TextLead } from '../components/variants';

const NotFoundPage = () => (
    <Box>
      <SEO title="404: Not found" />
      <Heading1>NOT FOUND</Heading1>
      <TextLead as="p">Oops. Just Go Back</TextLead>
    </Box>
    
)

export default NotFoundPage
