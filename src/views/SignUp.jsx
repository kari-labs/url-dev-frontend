import React from "react";
import { Box, Form, FormField, TextInput, Button, Heading } from "grommet";
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
      <Heading>Sign Up</Heading>
      <Form>
        <FormField name="first_name" label="First Name" placeholder="Jane" />
        <FormField name="last_name" label="Last Name" placeholder="Doe" />
        <FormField name="username" label="Username" placeholder="janedoe" />
        <FormField
          name="email"
          label="Email"
          placeholder="janedoe@example.com"
        />
        <FormField
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••••••••"
        />
        <FormField
          name="password_confirm"
          label="Confirm Password"
          type="password"
          placeholder="••••••••••••••"
        />
        <Spacer width="100%" height="50px" />
        <Button
          primary
          color="accent-1"
          label="Sign Up"
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
