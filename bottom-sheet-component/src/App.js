import { Box, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { BottomSheetComponent } from "./components/BottomSheetComponent";

function App() {
  const [show, setShow] = useState(false);
  function close() {
    setShow(false);
  }
  return (
    <div className="App">
      <Box position={"relative"}>
        <div>
          <Button mt="1em" onClick={() => setShow(!show)} colorScheme="teal">
            Open Bottom Sheet
          </Button>
        </div>
        <div>
          {show ? (
            <BottomSheetComponent show={show} close={close}>
              <Box>
                <Heading>Hello</Heading>
                <Heading>hi</Heading>
              </Box>
            </BottomSheetComponent>
          ) : null}
        </div>
      </Box>
    </div>
  );
}

export default App;
