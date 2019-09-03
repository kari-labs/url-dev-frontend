import React, {Component} from 'react';
import styled from 'styled-components';

export default styled.input`
border: none;
border-bottom: none;
border-radius: 2px;
box-shadow: none;
background: inherit;
width: unset;
white-space: pre-wrap;
font-family: inherit;
transition: border-bottom 0.2s ease-in-out;
&:focus {
  outline: none;
  border-bottom: 2.5px solid #f8f8f8;
  &::placeholder {
    color: rgba(245, 238, 238, 0.582);
  }
}
font-size: inherit;
font-weight: inherit;
color: ${props => props.color || "inherit"};
line-height: min-content;
&::placeholder {
  transition: color 0.175s ease-in-out;
  color: ${props => props.placeholderColor || "#f8f8f8"};
}
`;