import React, { useEffect } from "react";
import { Box, Container, SlideFade, useDisclosure } from "@chakra-ui/react";

export const BottomSheetComponent = ({ children, show, close }) => {
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    onToggle();
  }, [show]);
  return (
    <>
      <SlideFade offsetY="20px" in={isOpen}>
        <Box>
          {show ? (
            <Box
              w="100%"
              h="100vh"
              position="absolute"
              bg="teal.500"
              rounded="md"
              shadow="md"
              onClick={() => close()}
            >
              <Box mt="2em">
                <Container onClick={(e) => e.stopPropagation()} bg="white">
                  {children}
                </Container>
              </Box>
            </Box>
          ) : null}
        </Box>
      </SlideFade>
    </>
  );
};
