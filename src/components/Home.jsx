import React, { useState } from "react";
import "./home.css";
import admin from "./assest/admin.png";
import admin_meds from "./assest/admin_meds.png";
import Dashboard from "./assest/dashboard.png";
import note_alt from "./assest/note_alt.png";
import mobile from "./assest/mobile.png";
import quiz from "./assest/quiz.png";
import total from "./assest/total.png";
import portal from "./assest/captive_portal.png";
import condidate from "./assest/condidate.png";
import link from "./assest/link.png";
import add from "./assest/add.png";
import bag from "./assest/bag.png";
import dot from "./assest/dot.png";
import date from "./assest/date.png";
import share from "./assest/share.png";
import filter from "./assest/filter_list_alt.png";
import search from "./assest/search.png";
import barchart from "./assest/barchart.png";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Drawer from "./Drawer";
import Mobile from "./Mobile";
import Shwhide from "./Shwhide";
import DrawerComponent from "./DrawerComponent";
const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const [savedAssessments, setSavedAssessments] = useState(() => {
    const storedData = localStorage.getItem("savedAssessments");
    return storedData ? JSON.parse(storedData) : [];
  });
  console.log(savedAssessments);
  return (
    <div className="container">
      {/* first portion start here  */}
      <div className="frame_1">
        <div className="frame_side_1">
          <div className="frame_side_inner">
            <div>
              <img src={Dashboard} />
              <p>Dashboard</p>
            </div>
            <div>
              <img src={note_alt} />
              <p>Assessment</p>
            </div>{" "}
            <div>
              <img src={quiz} />
              <p>My Library</p>
            </div>{" "}
            <div>
              <div className="hrs_line"></div>
              <img src={admin} />
            </div>{" "}
            <div>
              <img src={admin_meds} />
              <p>Round Status</p>
            </div>
          </div>
        </div>

        {/* fram two started here */}
        <div className="frame_main_1">
          <div className="navbar">
            <div className="navbar_frame">
              <div className="navbar_frame_inner">
                <div>Assessment</div>
                <div className="hrs"></div>
                <div className="text_1">
                  My Assessments
                  <div className="hrs1"></div>
                </div>
              </div>
              <div>
                <img src={mobile} />
              </div>
            </div>
          </div>

          {/* second portion of main container */}
          <div className="frame_sec">
            <div className="frame_sec1">
              <div className="frame_sec2">
                <p className="asse">Assessments Overview</p>
                <div className="frame_sec3">
                  {/* first part  */}
                  <div className="frame_sec4 first ">
                    <Text fontSize={"14px"} color={"#1C4980"}>
                      Total Assessment
                    </Text>
                    <div className="frame_sec5">
                      <img src={total} />
                      <Text
                        fontSize={"20px"}
                        fontWeight={700}
                        fontFamily={"Inter"}
                        color={"#1C4980"}
                      >
                        34
                      </Text>
                    </div>
                  </div>

                  {/* second                  */}
                  <div className="frame_sec4 sec5_rem">
                    <Text color={"#1C4980"}>Condidates</Text>

                    <div className="frame_sec5">
                      <img src={condidate} />
                      <Box>
                        <Flex alignItems={"center"} gap={"5px"}>
                          <Text
                            color={"#1C4980"}
                            fontWeight={"700"}
                            fontSize={"20px"}
                          >
                            11,145
                          </Text>
                          <Text
                            fontSize={"12px"}
                            color={"#05C165"}
                            fontWeight={"600"}
                          >
                            +89
                          </Text>{" "}
                        </Flex>
                        <Text
                          color={"#1C4980"}
                          fontWeight={"600"}
                          fontSize={"12px"}
                        >
                          Total Condidate
                        </Text>
                      </Box>
                      <Box
                        w="1px"
                        height={"40px"}
                        border={"1px solid #DADCE0"}
                      ></Box>
                      <Box>
                        <Flex alignItems={"center"} gap={"5px"}>
                          <Text
                            color={"#1C4980"}
                            fontWeight={"700"}
                            fontSize={"20px"}
                          >
                            1,14
                          </Text>
                          <Text
                            fontSize={"12px"}
                            color={"#05C165"}
                            fontWeight={"600"}
                          >
                            +89
                          </Text>{" "}
                        </Flex>
                        <Text
                          color={"#1C4980"}
                          fontWeight={"600"}
                          fontSize={"12px"}
                        >
                          Who Attemped
                        </Text>
                      </Box>
                    </div>
                  </div>

                  {/* Third part  */}
                  <div className="frame_sec4 sec_rem3">
                    <Text color={"#1C4980"}>Condidates Source</Text>

                    <div className="frame_sec5">
                      <img src={portal} />
                      <Box>
                        <Flex alignItems={"center"} gap={"5px"}>
                          <Text
                            color={"#1C4980"}
                            fontWeight={"700"}
                            fontSize={"20px"}
                          >
                            11,000
                          </Text>
                          <Text
                            fontSize={"12px"}
                            color={"#05C165"}
                            fontWeight={"600"}
                          >
                            +89
                          </Text>{" "}
                        </Flex>
                        <Text
                          color={"#1C4980"}
                          fontWeight={"600"}
                          fontSize={"12px"}
                        >
                          E-mail
                        </Text>
                      </Box>
                      <Box
                        w="1px"
                        height={"40px"}
                        border={"1px solid #DADCE0"}
                      ></Box>
                      <Box>
                        <Flex alignItems={"center"} gap={"5px"}>
                          <Text
                            color={"#1C4980"}
                            fontWeight={"700"}
                            fontSize={"20px"}
                          >
                            145
                          </Text>
                          <Text
                            fontSize={"12px"}
                            color={"#05C165"}
                            fontWeight={"600"}
                          >
                            +89
                          </Text>{" "}
                        </Flex>
                        <Text
                          color={"#1C4980"}
                          fontWeight={"600"}
                          fontSize={"12px"}
                        >
                          Social Share
                        </Text>
                      </Box>
                      <Box
                        w="1px"
                        height={"40px"}
                        border={"1px solid #DADCE0"}
                      ></Box>
                      <Box>
                        <Flex alignItems={"center"} gap={"5px"}>
                          <Text
                            color={"#1C4980"}
                            fontWeight={"700"}
                            fontSize={"20px"}
                          >
                            145
                          </Text>
                          <Text
                            fontSize={"12px"}
                            color={"#05C165"}
                            fontWeight={"600"}
                          >
                            +89
                          </Text>{" "}
                        </Flex>
                        <Text
                          color={"#1C4980"}
                          fontWeight={"600"}
                          fontSize={"12px"}
                        >
                          Unique Link
                        </Text>
                      </Box>
                    </div>
                  </div>
                  {/* forth part  */}
                  <div className="frame_sec4 sec_rem4">
                    <Text color={"#1C4980"}>Total Purpose</Text>
                    <div className="frame_sec5">
                      <img src={link} />
                      <Text
                        color={"#1C4980"}
                        fontSize={"20px"}
                        fontWeight={700}
                        fontFamily={"Inter"}
                      >
                        11
                      </Text>
                    </div>
                  </div>
                  {/* ending part  */}
                </div>
              </div>

              <Mobile />
              {/* <Shwhide /> */}

              {/* ```````````````````````````````````````` */}
              <div>
                <div></div>
                {showMore && (
                  <div>
                    <div>
                      <p className="asse">Assessments Overview</p>
                      <div className="frame_sec12">
                        {/* first part  */}
                        <div className="frame_sec13">
                          <div className="frame_sec4 first ">
                            <Text fontSize={"14px"} color={"#1C4980"}>
                              Total Assessment
                            </Text>
                            <div className="frame_sec5">
                              <img src={total} />
                              <Text
                                fontSize={"20px"}
                                fontWeight={700}
                                fontFamily={"Inter"}
                                color={"#1C4980"}
                              >
                                34
                              </Text>
                            </div>
                          </div>

                          <div className="frame_sec4 sec_rem4">
                            <Text color={"#1C4980"}>Total Purpose</Text>
                            <div className="frame_sec5">
                              <img src={link} />
                              <Text
                                color={"#1C4980"}
                                fontSize={"20px"}
                                fontWeight={700}
                                fontFamily={"Inter"}
                              >
                                11
                              </Text>
                            </div>
                          </div>
                        </div>
                        {/* second                  */}
                        <div className="frame_sec4 sec5_rem">
                          <Text color={"#1C4980"}>Condidates</Text>

                          <div className="frame_sec5">
                            <img src={condidate} />
                            <Box>
                              <Flex alignItems={"center"} gap={"5px"}>
                                <Text
                                  color={"#1C4980"}
                                  fontWeight={"700"}
                                  fontSize={"20px"}
                                >
                                  11,145
                                </Text>
                                <Text
                                  fontSize={"12px"}
                                  color={"#05C165"}
                                  fontWeight={"600"}
                                >
                                  +89
                                </Text>{" "}
                              </Flex>
                              <Text
                                color={"#1C4980"}
                                fontWeight={"600"}
                                fontSize={"12px"}
                              >
                                Total Condidate
                              </Text>
                            </Box>
                            <Box
                              w="1px"
                              height={"40px"}
                              border={"1px solid #DADCE0"}
                            ></Box>
                            <Box>
                              <Flex alignItems={"center"} gap={"5px"}>
                                <Text
                                  color={"#1C4980"}
                                  fontWeight={"700"}
                                  fontSize={"20px"}
                                >
                                  1,14
                                </Text>
                                <Text
                                  fontSize={"12px"}
                                  color={"#05C165"}
                                  fontWeight={"600"}
                                >
                                  +89
                                </Text>{" "}
                              </Flex>
                              <Text
                                color={"#1C4980"}
                                fontWeight={"600"}
                                fontSize={"12px"}
                              >
                                Who Attemped
                              </Text>
                            </Box>
                          </div>
                        </div>

                        {/* Third part  */}
                        <div className="frame_sec4 sec_rem3">
                          <Text color={"#1C4980"}>Condidates Source</Text>

                          <div className="frame_sec5">
                            <img src={portal} />
                            <Box>
                              <Flex alignItems={"center"} gap={"5px"}>
                                <Text
                                  color={"#1C4980"}
                                  fontWeight={"700"}
                                  fontSize={"20px"}
                                >
                                  11,000
                                </Text>
                                <Text
                                  fontSize={"12px"}
                                  color={"#05C165"}
                                  fontWeight={"600"}
                                >
                                  +89
                                </Text>{" "}
                              </Flex>
                              <Text
                                color={"#1C4980"}
                                fontWeight={"600"}
                                fontSize={"12px"}
                              >
                                E-mail
                              </Text>
                            </Box>
                            <Box
                              w="1px"
                              height={"40px"}
                              border={"1px solid #DADCE0"}
                            ></Box>
                            <Box>
                              <Flex alignItems={"center"} gap={"5px"}>
                                <Text
                                  color={"#1C4980"}
                                  fontWeight={"700"}
                                  fontSize={"20px"}
                                >
                                  145
                                </Text>
                                <Text
                                  fontSize={"12px"}
                                  color={"#05C165"}
                                  fontWeight={"600"}
                                >
                                  +89
                                </Text>{" "}
                              </Flex>
                              <Text
                                color={"#1C4980"}
                                fontWeight={"600"}
                                fontSize={"12px"}
                              >
                                Social Share
                              </Text>
                            </Box>
                            <Box
                              w="1px"
                              height={"40px"}
                              border={"1px solid #DADCE0"}
                            ></Box>
                            <Box>
                              <Flex alignItems={"center"} gap={"5px"}>
                                <Text
                                  color={"#1C4980"}
                                  fontWeight={"700"}
                                  fontSize={"20px"}
                                >
                                  145
                                </Text>
                                <Text
                                  fontSize={"12px"}
                                  color={"#05C165"}
                                  fontWeight={"600"}
                                >
                                  +89
                                </Text>{" "}
                              </Flex>
                              <Text
                                color={"#1C4980"}
                                fontWeight={"600"}
                                fontSize={"12px"}
                              >
                                Unique Link
                              </Text>
                            </Box>
                          </div>
                        </div>
                        {/* forth part  */}

                        {/* ending part  */}
                      </div>
                    </div>
                  </div>
                )}
                {/* <img src={barchart} onClick={toggleShowMore} /> */}
              </div>

              {/* third part here of right side  */}
              <div className="frame_third">
                <div className="frame_assen">
                  <p>My Assessment</p>
                  {/* import icons in this section for responsive */}
                  <div className="frame_asses1">
                    <div className="frame_assn">
                      <img src={search} />
                      <img src={filter} />
                      <img onClick={toggleShowMore} src={barchart} />
                    </div>
                  </div>
                </div>
                {/* ending part Assessment */}

                <div className="frame_part4">
                  <div className="frame_part5">
                    <div className="frame_add boradd">
                      <div className="frame_center">
                        <Center
                          borderRadius={"50%"}
                          bg="white"
                          w="70px"
                          h="70px"
                          m="auto"
                        >
                          {/* <img src={add} /> */}
                          {/* <Drawer /> */}
                          <DrawerComponent />
                        </Center>
                        <Text
                          fontSize={"18px"}
                          fontWeight={"500"}
                          color="#1C4980"
                          lineHeight={"14px"}
                          mt="10px"
                        >
                          New Assessment
                        </Text>
                      </div>
                      <Text
                        fontSize={"12px"}
                        fontWeight={"500"}
                        textAlign={"center"}
                        color={"#1C4980"}
                        w="328px"
                        m="auto"
                        lineHeight={"14.52px"}
                        mt="10px"
                      >
                        From here you can add questions of multiple types like
                        MCQs, subjective (text or paragraph)!
                      </Text>
                    </div>
                    {/* 2 */}
                    <div className="frame_append">
                      <div className="flex_div">
                        <div>
                          <img src={bag} />
                          <Text
                            fontSize={"18px"}
                            fontWeight={"500"}
                            color={"#1C4980"}
                          >
                            Math Assessment
                          </Text>
                          <div className="frame_bottom">
                            <Text
                              fontSize={"14px"}
                              fontWeight={"500"}
                              color={"#1C4980"}
                            >
                              Job
                            </Text>
                            <div className="hrsline"></div>
                            <Flex
                              align={"center"}
                              fontSize={"12px"}
                              gap="5px"
                              color={"#8DA4BF"}
                            >
                              <img src={date} />
                              <Text>23 Jul 2023</Text>
                            </Flex>
                          </div>
                        </div>
                        <div>
                          <img src={dot} />
                        </div>
                      </div>

                      <div className="forhr"></div>
                      <div className="lastdiv">
                        <Flex alignItems={"center"} gap="14px">
                          <div className="last_frame_div">
                            <p>00</p>
                            <p>Duration</p>
                          </div>
                          <div className="last_frame_div">
                            <p>00</p>
                            <p>Questions</p>
                          </div>
                        </Flex>
                        <Flex alignItems={"center"} gap="10px">
                          <Flex
                            alignItems={"center"}
                            borderRadius={"50px"}
                            w="77px"
                            h="30px"
                            color={"#1C4980"}
                            border={"1px solid #1C4980"}
                            padding={"2px 8px 2px 6px"}
                            gap="5px"
                          >
                            <img src={share} />
                            <Text fontSize={"14px"} fontWeight={"500"}>
                              Share
                            </Text>
                          </Flex>
                          <div>
                            <Center
                              w="30px"
                              h="30px"
                              borderRadius={"50%"}
                              bg="#6548EE"
                              color={"white"}
                              fontSize={"14px"}
                              fontWeight={"700"}
                            >
                              LP
                            </Center>
                          </div>
                        </Flex>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="frame_append">
                      <div className="flex_div">
                        <div>
                          <img src={bag} />
                          <Text
                            fontSize={"18px"}
                            fontWeight={"500"}
                            color={"#1C4980"}
                          >
                            Math Assessment
                          </Text>
                          <div className="frame_bottom">
                            <Text
                              fontSize={"14px"}
                              fontWeight={"500"}
                              color={"#1C4980"}
                            >
                              Job
                            </Text>
                            <div className="hrsline"></div>
                            <Flex
                              align={"center"}
                              fontSize={"12px"}
                              gap="5px"
                              color={"#8DA4BF"}
                            >
                              <img src={date} />
                              <Text>23 Jul 2023</Text>
                            </Flex>
                          </div>
                        </div>
                        <div>
                          <img src={dot} />
                        </div>
                      </div>

                      <div className="forhr"></div>
                      <div className="lastdiv">
                        <Flex alignItems={"center"} gap="14px">
                          <div className="last_frame_div">
                            <p>00</p>
                            <p>Duration</p>
                          </div>
                          <div className="last_frame_div">
                            <p>00</p>
                            <p>Questions</p>
                          </div>
                        </Flex>
                        <Flex alignItems={"center"} gap="10px">
                          <Flex
                            alignItems={"center"}
                            borderRadius={"50px"}
                            w="77px"
                            h="30px"
                            color={"#1C4980"}
                            border={"1px solid #1C4980"}
                            padding={"2px 8px 2px 6px"}
                            gap="5px"
                          >
                            <img src={share} />
                            <Text fontSize={"14px"} fontWeight={"500"}>
                              Share
                            </Text>
                          </Flex>
                          <div className="frame_lp">
                            <Center
                              w="30px"
                              h="30px"
                              borderRadius={"50%"}
                              bg="#6548EE"
                              color={"white"}
                              fontSize={"14px"}
                              fontWeight={"700"}
                            >
                              <div>
                                <p>LP</p>
                              </div>
                            </Center>
                            <Center
                              w="30px"
                              h="30px"
                              borderRadius={"50%"}
                              bg="#3079E1"
                              color={"white"}
                              fontSize={"14px"}
                              fontWeight={"700"}
                              className="center_div"
                            >
                              <div>
                                <p>LP</p>
                              </div>
                            </Center>
                            <Center
                              w="30px"
                              h="30px"
                              borderRadius={"50%"}
                              bg="#E9407A"
                              color={"white"}
                              fontSize={"14px"}
                              fontWeight={"700"}
                              className="center_div"
                            >
                              <div>
                                <p>LP</p>
                              </div>
                            </Center>
                          </div>
                        </Flex>
                      </div>
                    </div>
                    {savedAssessments.map((el) => (
                      <div className="frame_append">
                        <div className="flex_div">
                          <div>
                            <img src={bag} />
                            <Text
                              fontSize={"18px"}
                              fontWeight={"500"}
                              color={"#1C4980"}
                            >
                              {el.assessmentName}
                            </Text>
                            <div className="frame_bottom">
                              <Text
                                fontSize={"14px"}
                                fontWeight={"500"}
                                color={"#1C4980"}
                              >
                                {el.purposeOfTest}
                              </Text>
                              <div className="hrsline"></div>
                              <Flex
                                align={"center"}
                                fontSize={"12px"}
                                gap="5px"
                                color={"#8DA4BF"}
                              >
                                <img src={date} />
                                <Text>23 Jul 2023</Text>
                              </Flex>
                            </div>
                          </div>
                          <div>
                            <img src={dot} />
                          </div>
                        </div>

                        <div className="forhr"></div>
                        <div className="lastdiv">
                          <Flex alignItems={"center"} gap="14px">
                            <div className="last_frame_div">
                              <p>00</p>
                              <p>Duration</p>
                            </div>
                            <div className="last_frame_div">
                              <p>00</p>
                              <p>Questions</p>
                            </div>
                          </Flex>
                          <Flex alignItems={"center"} gap="10px">
                            <Flex
                              alignItems={"center"}
                              borderRadius={"50px"}
                              w="77px"
                              h="30px"
                              color={"#1C4980"}
                              border={"1px solid #1C4980"}
                              padding={"2px 8px 2px 6px"}
                              gap="5px"
                            >
                              <img src={share} />
                              <Text fontSize={"14px"} fontWeight={"500"}>
                                Share
                              </Text>
                            </Flex>
                            <div className="frame_lp">
                              <Center
                                w="30px"
                                h="30px"
                                borderRadius={"50%"}
                                bg="#6548EE"
                                color={"white"}
                                fontSize={"14px"}
                                fontWeight={"700"}
                              >
                                <div>
                                  <p>LP</p>
                                </div>
                              </Center>
                              <Center
                                w="30px"
                                h="30px"
                                borderRadius={"50%"}
                                bg="#3079E1"
                                color={"white"}
                                fontSize={"14px"}
                                fontWeight={"700"}
                                className="center_div"
                              >
                                <div>
                                  <p>LP</p>
                                </div>
                              </Center>
                              <Center
                                w="30px"
                                h="30px"
                                borderRadius={"50%"}
                                bg="#E9407A"
                                color={"white"}
                                fontSize={"14px"}
                                fontWeight={"700"}
                                className="center_div"
                              >
                                <div>
                                  <p>LP</p>
                                </div>
                              </Center>
                            </div>
                          </Flex>
                        </div>
                      </div>
                    ))}

                    {/* <div className="sdf"></div> */}
                    {/* append all assessment hre */}
                  </div>
                </div>

                {/* here all ending part  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
