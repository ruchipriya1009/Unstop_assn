import React, { useState } from "react";
import "./tss.css";
import {
  Box,
  Select,
  FormControl,
  FormLabel,
  Text,
  Input,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import cut from "./assest/cut.png";
import add from "./assest/add.png";

const DrawerComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    assessmentName: "",
    purposeOfTest: "",
    skill: "",
    duration: "",
  });

  const [savedAssessments, setSavedAssessments] = useState(() => {
    const storedData = localStorage.getItem("savedAssessments");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    setSavedAssessments((preass) => [...preass, formData]);
    localStorage.setItem(
      "savedAssessments",
      JSON.stringify([...savedAssessments, formData])
    );
    window.location.reload();
    handleCloseDrawer();
  };

  return (
    <div>
      <div className="drawer-wrapper">
        <header>
          <img src={add} onClick={handleOpenDrawer} />
        </header>
      </div>
      <div className={`drawer-content ${isDrawerOpen ? "open" : ""}`}>
        <div>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            padding="10px"
          >
            <Text fontSize={"20px"} fontWeight={"600"}>
              Create a new Assessment
            </Text>
            {isDrawerOpen && <Image onClick={handleCloseDrawer} src={cut} />}
          </Flex>
          <Box padding="20px">
            <FormControl isRequired>
              <FormLabel mt="10px">Name of assessment</FormLabel>
              <Select
                placeholder="Select assessment"
                name="assessmentName"
                value={formData.assessmentName}
                onChange={handleChange}
              >
                <option>Math Assessment</option>
                <option>Science Assessement</option>
              </Select>
              <FormLabel mt="20px">Purpose of the test is</FormLabel>
              <Select
                placeholder="Purpose of test"
                name="purposeOfTest"
                value={formData.purposeOfTest}
                onChange={handleChange}
              >
                <option>Job</option>
                <option>Intern</option>
              </Select>
              <FormLabel mt="20px">Skill</FormLabel>
              <Input
                type="text"
                placeholder="skill"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
              />
              <FormLabel mt="20px">Duration of assessment</FormLabel>
              <Input
                type="text"
                placeholder="HH:MM:SS"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </FormControl>
            <Button bg={"#0073e6"} color="white" width={"full"} mt="20px" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
