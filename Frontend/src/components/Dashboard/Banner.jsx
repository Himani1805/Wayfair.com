import React, { useState } from "react";
import { VStack, Flex, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MainSection from "../MainSection/MainSection";
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";

export default function Banner(props) {
  const videos = [
    "https://res.cloudinary.com/dgbymqjtk/video/upload/v1744112845/usca_diningsale_desktop_idfu5k.mp4",
    "https://res.cloudinary.com/dgbymqjtk/video/upload/v1744112823/wfus_storage_org_entryway_test_homepage_hero_desktop_sivg9i.mp4",
    "https://res.cloudinary.com/dgbymqjtk/video/upload/v1744112822/usca_72hrclearout_desktop_jeffgd.mp4",
    "https://res.cloudinary.com/dgbymqjtk/video/upload/v1744112822/usca_72hrclearout_desktop_jeffgd.mp4",
    "https://res.cloudinary.com/dgbymqjtk/video/upload/v1744112839/wfus_0317-springcyberweek-launch_hero_desktop_v3_kumnzs.mp4"
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <VStack w="100%" mx="auto" position={"relative"} >
      <Box w="100%">
        <video width="100%" autoPlay muted loop src={videos[currentVideo]} />
        {/* controls autoPlay muted loop */}
      </Box>

      <Flex gap={4} mt={4}>
        <Button borderRadius={"50%"} onClick={prevVideo} background={"white"} border={"2px solid #7c189f"} position={"absolute"} left={"2%"} top={"2%"}><PiLessThanBold color="#9e5ed7"/></Button>
        <Button borderRadius={"50%"} onClick={nextVideo} background={"white"} border={"2px solid #7c189f"} position={"absolute"} right={"2%"} top={"2%"}><PiGreaterThanBold color="#9e5ed7" /></Button>
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
