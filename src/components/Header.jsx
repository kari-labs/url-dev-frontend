import React from "react";
import styled from "styled-components";
import { Box, Heading, Button, DropButton, Anchor } from "grommet";
import * as Icons from "grommet-icons";

const HeaderGrid = styled(Box)`
  display: inline-grid;
  grid-template-columns: 2fr 1fr;
  background-color: #7d4cdb;
  color: white;
  padding: 1vw 1vh;
  width: 100%;
`;

export default () => {
  return (
    <HeaderGrid>
      <Box>
        <Heading margin="none">URL.DEV</Heading>
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
    </HeaderGrid>
  );
};
