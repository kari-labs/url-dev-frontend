import React from "react";
import { Box, Form, FormField, Button, Heading } from "grommet";
import { Spacer } from "../components/UtilityComponents";

export default props => {
  // Other code-bits go here
  return (
    <Box
      border={{
        size: "medium",
        color: "light-2"
      }}
      margin={{
        vertical: "large",
        horizontal: "10%"
      }}
      pad={{
        horizontal: "large",
        bottom: "xlarge"
      }}
    >
      <Heading>Sign In</Heading>
      <Form>
        <FormField name="username" label="Username" placeholder="janedoe" />
        <FormField
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••••••••"
        />
        <Spacer width="100%" height="50px" />
        <Button
          primary
          color="accent-1"
          label="Sign In"
          style={{
            borderRadius: "5px",
            paddingTop: "6px",
            paddingBottom: "6px"
          }}
        />
      </Form>
    </Box>
  );
};
