import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export const Timer = ({ status, timeLimit }) => {
  const [time, setTime] = useState(timeLimit);
  let id;

  useEffect(() => {
    setTime(timeLimit);
  }, [timeLimit]);
  useEffect(() => {
    if (status == "PLAY") {
      id = setInterval(() => {
        setTime((pre) => {
          if (pre <= 0) {
            clearInterval(id);
            return 0;
          } else {
            return pre - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [status]);

  return (
    <Center>
      <Flex textAlign={"center"}>
        <Heading>{time}</Heading>
        <Heading fontSize={"1em"} pt="1em" pl=".2em">
          S
        </Heading>
      </Flex>
    </Center>
  );
};
