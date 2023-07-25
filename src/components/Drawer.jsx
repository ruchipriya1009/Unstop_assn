import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  FormLabel,
  Box,
  Select,
  Stack,
  InputGroup,
  Button,
  Textarea,
  InputLeftAddon,
  InputRightAddon,
  Image,
} from "@chakra-ui/react";
import add from "./assest/add.png";

function Drawerbottom() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Image src={add} cursor={"pointer"} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent maxW={"200px"}>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} borderBottomWidth="1px">
            Create a new Assessment
          </DrawerHeader>

          <DrawerBody maxW={"500px"} m="auto">
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name of assessment</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Purpose of the test is</FormLabel>
                <Input type="text" placeholder="name" />
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Description</FormLabel>
                <Input type="text" placeholder="description" />
              </Box>

              
              <Box>
                <FormLabel htmlFor="desc">Skill</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Drawerbottom;
