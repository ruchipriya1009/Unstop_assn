import React from 'react'
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
import Accord from "./Accordmobile";

import {  Box, Center, Flex, Text } from "@chakra-ui/react";

const Accordmobile = () => {
  return (
    
    <div  className="mobile">
                  
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
<div className="frame_sec4 sec5_rem">
<Text color={"#1C4980"}>Candidates</Text>

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
Total Candidate
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
  )
}

export default Accordmobile