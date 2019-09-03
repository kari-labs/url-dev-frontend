import React, { Component, useState } from "react";
import {
  Box,
  Paragraph,
  Button as BasicButton,
  TextInput,
  Grid,
  ThemeContext,
  Layer,
  Heading
} from "grommet";
import * as Icons from "grommet-icons";
import styled from "styled-components";

const ShortenContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled(BasicButton)`
  width: ${props => props.width};
  height: ${props => props.height};
  @media screen and (max-width: 658px) {
    & {
      margin-top: 10px;
      min-width: 275px;
      width: 100%;
    }
  }
`;

const Spacer = styled.div`
  width: ${props => props.width} !important;
  height: ${props => props.height} !important;
  background: ${props => props.background};
`;

const StyledTextInput = styled(TextInput)`
  width: 100%;
`;

const CustomTextInput = () => (
  <ThemeContext.Extend
    value={{
      textInput: {
        container: {
          extend: {
            width: "74%",
            marginRight: "10px",
            maxWidth: "659.6px"
          }
        }
      }
    }}
  >
    <StyledTextInput placeholder="https://github.com/kari-labs" size="medium" />
  </ThemeContext.Extend>
);

export default () => {
  const [show, setShow] = React.useState();
  return (
    <Box
      background="light-2"
      pad="medium"
      margin={{
        vertical: "large",
        horizontal: "medium"
      }}
      justify="center"
      alignSelf="center"
      width="unset"
    >
      <Grid>
        <Paragraph size="large">
          With URL.DEV, you'll get the most bang-for-your-bargain with our
          intense link-management pattern. Enter a URL below to get started:
        </Paragraph>
        <ShortenContainer
          margin={{
            bottom: "small"
          }}
          direction="row"
          width="unset"
        >
          <CustomTextInput />
          <Button
            icon={<Icons.Contract />}
            label="Shorten"
            onClick={() => {
              setShow(true);
            }}
            primary
            color="accent-1"
            reverse
            style={{
              borderRadius: "5px",
              paddingTop: "10px",
              paddingBottom: "10px"
            }}
          />
          {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
            >
              <Box>
                <Heading>Here's your new URL!</Heading>
                // TODO: Put readonly textbox and button to copy here
                <Button label="close" onClick={() => setShow(false)} />
              </Box>
            </Layer>
          )}
        </ShortenContainer>
      </Grid>
    </Box>
  );
};
