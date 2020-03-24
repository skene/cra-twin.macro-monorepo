import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";

const StyledButton = styled.button(
  ({ isPrimary, isSecondary, isSmall }: any) => [
    tw`text-lg px-8 py-2 rounded
    transform hocus:scale-105 transition-transform duration-75
    hocus:text-yellow-400 focus:outline-none`,

    isPrimary && tw`bg-black text-white border-black`,

    isSecondary &&
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
        ${tw`border-2 border-yellow-600`}
      `,

    isSmall ? tw`text-sm` : tw`text-lg`
  ]
);

export const Button = (props: any) => <StyledButton {...props} />;
