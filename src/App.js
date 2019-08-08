import React, {Component, useState} from 'react';
import { 
  Grommet, 
  Heading, 
  Box, 
  Paragraph, 
  Accordion, 
  AccordionPanel, 
  Text, 
  Button as BasicButton,
  TextInput,
} from 'grommet';
import * as Icons from "grommet-icons";
import styled from "styled-components";

const Button = styled(BasicButton)`
  width: ${props => props.width};
`;
const Input = styled.input`
  border: none;
  border-bottom: none;
  border-radius: 2px;
  box-shadow:none;
  background:inherit;
  width:100%;
  white-space:pre-wrap; 
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
  &::placeholder{
    transition: color 0.175s ease-in-out;
    color: ${props => props.placeholderColor || "#f8f8f8"};
  }
`;

function App() {
  const [value, setValue] = useState();
  return (
    <Grommet>
      <Box background="light-2" pad="medium">
        <Heading>
          Welcome, to&nbsp; 
          <Box 
            background="brand" 
            pad="small" 
            flex="shrink" 
            width="large" 
            style={{display: 'inline-flex'}}
          >
            <Input
              placeholder="URL.DEV"
            />
          </Box>
        </Heading>
        <Box pad="small" border={{color: "light-5", size: "large"}} width="large">
          <Paragraph size="large">
            With URL.DEV, you'll get the most bang-for-your-bargain with our intense link-management pattern. Enter a URL below to get started:
          </Paragraph>
          <Box 
            margin={{
              bottom: "small"
            }}
            direction="row"
          >
            <TextInput 
              placeholder="https://github.com/kari-labs"
            />
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
        <Box background="light-3" width="100%" margin={{vertical: "medium"}} border={{color: "light-5", size: "medium"}}>
          <Accordion>
            <AccordionPanel label="Panel 1">
              <Box pad="medium" background="light-2">
                <Text>One</Text>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Panel 2">
              <Box pad="medium" background="light-2">
                <Text>Two</Text>
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
        
      </Box>
    </Grommet>
  );
}

export default App;
