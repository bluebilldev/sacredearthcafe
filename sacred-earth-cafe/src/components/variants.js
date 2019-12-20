import React from 'react';

import { Heading, Text, Button } from './Primitives';

// Heading variants
const Heading1 = props => (
  <Heading as="h1" lineHeight="wide" fontFamily="montserrat" fontSize={[6, 8]} fontWeight="bold" {...props} />
);
const Heading2 = props => <Heading as="h2" lineHeight="normal" fontSize={5} {...props} />;
const Heading3 = props => (
  <Heading as="h3" lineHeight="wide" fontSize={3} fontFamily="montserrat" {...props} />
);
// Text variants
const TextNormal = props => <Text lineHeight="wider" {...props} />;
const TextLead = props => <Text lineHeight="wider" fontFamily="montserrat" fontSize={[3, 4]} fontWeight="600" {...props} />;
const TextWide = props => <Text lineHeight="wider" fontSize={4} {...props} />;
// Button Variants
const ButtonBorderLeft = props => (
  <Button
    py={3}
    px={4}
    borderRadius="1px"
    borderLeft="5px solid"
    borderColor="almostBlack"
    fontFamily="opensans"
    color="almostBlack"
    bg="white"
    {...props}
  />
);

export {
  Heading1, Heading2, Heading3, TextNormal, TextLead, TextWide, ButtonBorderLeft,
};
