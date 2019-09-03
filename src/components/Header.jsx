import React from "react";
import styled from "styled-components";
import {
  Box,
  Heading,
  Button,
  DropButton,
  RoutedAnchor,
  ThemeContext,
  Stack
} from "grommet";
import * as Icons from "grommet-icons";

const HeaderGrid = styled(Box)`
  display: inline-grid;
  grid-template-columns: 2fr 1fr;
  background-color: #7d4cdb;
  color: white;
  padding: 1vw 1vh;
  width: 100%;
  position: sticky;
`;

export default () => {
  return (
    <HeaderGrid>
      <Box>
        <Heading margin="none">
          <ThemeContext.Extend
            value={{
              anchor: {
                hover: {
                  textDecoration: "none"
                }
              }
            }}
          >
            <RoutedAnchor
              path="/"
              exact
              color="white"
              icon={
                /* <Stack anchor="center">
                  <Icons.Expand color="white" />
                  <Icons.Link
                    color="white"
                    style={{
                      transform: "rotate(-90deg)"
                    }}
                  />
                </Stack> */
                <Icons.Gremlin />
              }
              label="URL.DEV"
            />
          </ThemeContext.Extend>
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
              <RoutedAnchor path="/signin">Sign In</RoutedAnchor>
              <hr width="100%" color="#47525E" />
              <RoutedAnchor path="/signup">Sign Up</RoutedAnchor>
            </Box>
          }
        />
      </Box>
    </HeaderGrid>
  );
};
