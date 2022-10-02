import React, { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Timer } from "./Timer";

export const CountDown = ({ timeLimit }) => {
  const [status, setStatus] = useState("PLAY");
  const handlePause = () => {
    setStatus("PAUSE");
  };
  const handlePlay = () => {
    setStatus("PLAY");
  };
  return (
    <Box mt="2em">
      <Box>
        <Heading color={"teal"}>Count Down Timer</Heading>
      </Box>
      <Box>
        <Timer status={status} timeLimit={timeLimit} />
      </Box>

      <Box>
        <Button colorScheme={"teal"} onClick={handlePause} m="1em">
          PAUSE
        </Button>
        <Button colorScheme={"teal"} onClick={handlePlay}>
          PLAY
        </Button>
      </Box>
    </Box>
  );
};
