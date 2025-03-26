import { VStack, Flex, Box, Image} from '@chakra-ui/react'
import { AspectRatio } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import React from 'react'

export default function Banner(props) {
  return (
    <VStack>
        <Flex>
        <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title="naruto"
        src="https://secure.img1-fg.wfcdn.com/dm/video/eaf924f3-968f-4e47-810c-da8f97235682/usca_diningsale_desktop.mp4"
        allowFullScreen
      />
    </AspectRatio>

    <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title="naruto"
        src="https://secure.img1-fg.wfcdn.com/dm/video/ce277938-1f00-43c8-80f0-12455bd10d36/wfus_storage&org_entryway_test_homepage_hero_desktop_v3%20(2).mp4"
        allowFullScreen
      />
    </AspectRatio>
    <Box>
      <Link to={"#"}><Image src={props.img}/></Link>
    </Box>
    <Image src="https://assets.wfcdn.com/im/61708351/resize-h566-w2000%5Ecompr-r85/3098/309899371/unlock_your_next_home_gem%3A_earn_rewards_every_time_you_shop.__309899371.jpg" />

        </Flex>
    </VStack>
  )
}
