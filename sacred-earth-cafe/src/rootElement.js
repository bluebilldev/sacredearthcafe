import React from 'react';
import GlobalStyle from './styles/global';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
    <>
      <GlobalStyle />
      {element}
    </>
);