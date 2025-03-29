import React, { useState } from "react";
import { VStack, Flex, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import MainSection from "../MainSection/MainSection";

export default function Banner(props) {
  const videos = [
    "https://secure.img1-fg.wfcdn.com/dm/video/eaf924f3-968f-4e47-810c-da8f97235682/usca_diningsale_desktop.mp4",
    "https://secure.img1-fg.wfcdn.com/dm/video/ce277938-1f00-43c8-80f0-12455bd10d36/wfus_storage&org_entryway_test_homepage_hero_desktop_v3%20(2).mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <VStack w="100%" mx="auto" position={"relative"}>
      <Box w="100%">
        <video width="100%" autoPlay muted loop src={videos[currentVideo]} />
        {/* controls autoPlay muted loop */}
      </Box>

      <Flex gap={4} mt={4} >
        <Button borderRadius={"50%"} onClick={prevVideo} background={"white"} border={"2px solid #7c189f"} position={"absolute"} left={"2%"} top={"40%"}><FaLessThan color="#7c189f"/></Button>
        <Button borderRadius={"50%"} onClick={nextVideo} background={"white"} border={"2px solid #7c189f"} position={"absolute"} right={"2%"} top={"40%"}><FaGreaterThan color="#7c189f" /></Button>
      </Flex>
      <Box>
        <Link to={"#"}>
          <Image src={props.img} />
        </Link>
      </Box>
      {/* <Image
        src="https://assets.wfcdn.com/im/61708351/resize-h566-w2000%5Ecompr-r85/3098/309899371/unlock_your_next_home_gem%3A_earn_rewards_every_time_you_shop.__309899371.jpg"
      /> */}
    <MainSection />
    </VStack>
  );
}
