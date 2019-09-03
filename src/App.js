import React, { Component, useState } from "react";
import { Box, Paragraph, Button as BasicButton, TextInput } from "grommet";
import * as Icons from "grommet-icons";
import styled from "styled-components";
import Grommet from "./components/Grommet";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [value, setValue] = useState();
  return (
    <Grommet>
      <Header />
      <Body />
    </Grommet>
  );
}

export default App;
