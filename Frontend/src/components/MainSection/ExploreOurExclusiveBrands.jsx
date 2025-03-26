import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function ExploreOurExclusiveBrands() {
  return (
    <VStack>
      <Flex flexDirection={"column"}>
        <Box>
          <Heading>explore our exclusive brands</Heading>
          <Text>
            Bring your vision to life with hand-curated collections, priced just
            right.
          </Text>
          <Link href="https://www.wayfair.com/brand/bbb/browse-by-brand">
            Shop all
          </Link>
        </Box>
        <Flex>
          <Box>
            <Image src="https://assets.wfcdn.com/im/54624453/scale-h546-w448%5Ecompr-r85/3021/302161978/default_name.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/59515358/scale-h546-w448%5Ecompr-r85/2902/290205192/default_name.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/17106914/scale-h546-w448%5Ecompr-r85/3026/302643859/default_name.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/92221860/scale-h546-w448%5Ecompr-r85/2858/285848032/default_name.jpg" />
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <Image src="https://assets.wfcdn.com/im/22247260/resize-h454-w2000%5Ecompr-r85/2897/289751200/financing_available._find_the_payment_option_that%27s_right_for_you._learn_more.__289751200.jpg" />
      </Flex>
    </VStack>
  );
}
