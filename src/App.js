import React, { Component, useState } from "react";
import {
  Grommet,
  Heading,
  Box,
  Paragraph,
  Anchor,
  Text,
  Button as BasicButton,
  DropButton,
  TextInput
} from "grommet";
import * as Icons from "grommet-icons";
import styled from "styled-components";

const Button = styled(BasicButton)`
  width: ${props => props.width};
`;
const Input = styled.input`
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

const Grid = styled(Box)`
  display: inline-grid;
  grid-template-columns: 2fr 1fr;
  background-color: #7d4cdb;
  color: white;
  padding: 1vw 1vh;
  width: 100%;
`;

function App() {
  const [value, setValue] = useState();
  return (
    <Grommet>
      <Grid>
        <Box>
          <Heading margin="none">
            <Input placeholder="URL.DEV" />
          </Heading>
        </Box>
        <Box justify="end" alignContent="space-between" direction="row">
          <Button
            icon={<Icons.Help color="white" />}
            label=""
            href=""
            plain
            style={{
              margin: "0 10px"
            }}
          />
          <DropButton
            icon={<Icons.User color="white" />}
            label=""
            onClick={() => {}}
            plain
            style={{
              margin: "0 10px"
            }}
            dropAlign={{ top: "bottom", right: "right" }}
            dropContent={
              <Box pad="small" background="light-2" direction="column">
                <Anchor>Sign In</Anchor>
                <hr width="100%" color="#47525E" />
                <Anchor>Sign Up</Anchor>
              </Box>
            }
          />
        </Box>
      </Grid>

      <Box
        pad="medium"
        background="light-2"
        width="unset"
        margin={{
          vertical: "large",
          horizontal: "20%"
        }}
        justify="center"
        alignSelf="center"
      >
        <Paragraph size="large">
          With URL.DEV, you'll get the most bang-for-your-bargain with our
          intense link-management pattern. Enter a URL below to get started:
        </Paragraph>
        <Box
          margin={{
            bottom: "small"
          }}
          direction="row"
        >
          <TextInput placeholder="https://github.com/kari-labs" />
          <Button
            icon={<Icons.Contract />}
            label="Shorten"
            onClick={() => {}}
            width="max-content"
            primary
            color="accent-1"
            reverse
            margin={{
              left: "small"
            }}
            style={{
              borderRadius: "5px"
            }}
          />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
