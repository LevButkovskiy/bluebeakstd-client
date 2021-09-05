import React from 'react';
import styled from "styled-components";

const ButtonComponent = styled.div `
  background: #0d84fb;
  padding: 8px 12px;

  border-radius: 4px;

  margin: 0 6px;
  
  &:hover {
    background: #43a0ff;

    cursor: pointer;
  }
`;

export default function Button(props) {
    return (
        <ButtonComponent className="button" id={props.id}>{props.children}</ButtonComponent>
    )
}