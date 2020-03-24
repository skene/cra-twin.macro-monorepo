import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import { Button } from "./components";
import { Button as ExternalButton } from "@cra-twin-macro/components";
import "tailwindcss/dist/base.css";

const Container = styled.div`
  ${css([tw`h-screen flex flex-col items-center justify-center`])}
`;

const App = () => (
  <Container>
    <Button isPrimary>Submit</Button>
    <ExternalButton>Submit</ExternalButton>
  </Container>
);

export default App;
