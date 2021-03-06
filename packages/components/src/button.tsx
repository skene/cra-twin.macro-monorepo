import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Works
// const Container = styled.button``;

// Doesn't work
const Container = styled.button`
  ${tw`inline-block`}
`;

export const Button: React.FC<any> = () => {
  return <Container>Button</Container>;
};
