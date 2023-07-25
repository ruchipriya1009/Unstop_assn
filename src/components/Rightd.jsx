import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Text,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import bar from "./assest/bar.png";
import admin from "./assest/admin.png";
import admin_meds from "./assest/admin_meds.png";
import Dashboard from "./assest/dashboard.png";
import note_alt from "./assest/note_alt.png";
import quiz from "./assest/quiz.png";

function DrawerRight() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Image src={bar} ref={btnRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#F2F8FE"}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box>
              <Flex flexDirection={"column"} rowGap={"10px"}>
                <Flex gap={"10px"} padding="10px">
                  <Image src={Dashboard} />
                  <Text>Dashboard</Text>
                </Flex>
                <Flex
                  border="1px solid #0073E6"
                  bg={"#E5F1FC"}
                  color="#0073E6"
                  padding="10px"
                  borderRadius={"8px"}
                  gap="10px"
                >
                  <Image src={note_alt} />
                  <Text>Assessment</Text>
                </Flex>{" "}
                <Flex gap="10px" padding="10px">
                  <Image src={quiz} />
                  <Text>My Library</Text>
                </Flex>{" "}
                <Flex
                  justifyContent={"space-between"}
                  padding="10px"
                  alignItems={"center"}
                >
                  <Flex gap="10px">
                    <Image src={admin_meds} />
                    <Text>Round Status</Text>
                  </Flex>
                  <Flex>
                    <Image src={admin} />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerRight;
