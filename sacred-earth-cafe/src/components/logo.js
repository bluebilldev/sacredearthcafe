import React from "react"
import PropTypes from "prop-types";
import Img from "gatsby-image"
import styled from "styled-components";

const LogoStyled = styled(Img)`
  position: absolute;
  bottom: 32%;
  left: 0;
  width: 30%;
  height: ${({ height }) => height};
  z-index: -1;

  & > img {
    object-fit: contain !important;
    object-position: 0% 25% !important;
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
    bottom: ${({ mobileBottom }) => mobileBottom};
    width: ${({ mobileWidth }) => mobileWidth};
  }

  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) {
    bottom: ${({ tabletBottom }) => tabletBottom};
    width: ${({ tabletWidth }) => tabletWidth};
}
`;

const Logo = ({
  fluid,
  height,
  tabletBottom,
  tabletWidth,
  mobileHeight,
  mobileBottom,
  mobileWidth
}) => (
  <LogoStyled 
   fluid={fluid} 
   height={height}
   tabletBottom={tabletBottom}
   tabletWidth={tabletWidth}
   mobileHeight={mobileHeight}
   mobileBottom={mobileBottom}
   mobileWidth={mobileWidth}
   />
)
   
Logo.propTypes = {
  fluid: PropTypes.object.isRequired,
  height: PropTypes.string,
  tabletBottom: PropTypes.string,
  tabletWidth: PropTypes.string,
  mobileHeight: PropTypes.string,
  mobileBottom: PropTypes.string,
  mobileWidth: PropTypes.string
};
Logo.defaultProps = {
  height: null,
  tabletBottom: null,
  tabletWidth: null,
  mobileHeight: null,
  mobileBottom: null,
  mobileWidth: null
};

export default Logo
