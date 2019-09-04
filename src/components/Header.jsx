import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Button,
  DropButton,
  Anchor,
  ThemeContext,
  ResponsiveContext,
} from "grommet";
import * as Icons from "grommet-icons";

const HeaderGrid = styled(Box)`
  display: inline-grid;
  grid-template-columns: 2fr 1fr;
  padding: 1vw 1vh;
  width: 100%;
  z-index: 9999;
`;

export default () => {
  return (
    <HeaderGrid background="brand">
      <Box>
        <Heading margin="none">
          <ThemeContext.Extend
            value={{
              anchor: {
                hover: {
                  textDecoration: "none",
                },
              },
            }}
          >
            <ResponsiveContext.Consumer>
              {size => (
                <Anchor
                  as={Link}
                  to="/"
                  exact
                  color="white"
                  icon={
                    <Icons.Gremlin
                      size={
                        size === "small"
                          ? "medium"
                          : size === "medium"
                          ? "large"
                          : size
                      }
                      color="white"
                    />
                  }
                  label="URL.DEV"
                />
              )}
            </ResponsiveContext.Consumer>
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
            margin: "0 10px",
          }}
        />
        <DropButton
          icon={<Icons.User color="white" />}
          label=""
          onClick={() => {}}
          plain
          style={{
            margin: "0 10px",
          }}
          dropAlign={{ top: "bottom", right: "right" }}
          dropContent={
            <Box pad="small" background="light-2" direction="column">
              <Anchor as={Link} to="/signin">
                Sign In
              </Anchor>
              <hr width="100%" color="#47525E" />
              <Anchor as={Link} to="/signup">
                Sign Up
              </Anchor>
            </Box>
          }
        />
      </Box>
    </HeaderGrid>
  );
};
