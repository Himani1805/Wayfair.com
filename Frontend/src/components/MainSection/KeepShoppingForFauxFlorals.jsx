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

export default function KeepShoppingForFauxFlorals() {
  return (
    <VStack>
      <Flex flexDirection={"column"}>
        <Box>
          <Heading>keep shopping for faux florals</Heading>
        </Box>
        <Flex>
          <Box>
            <Image src="https://assets.wfcdn.com/im/74544012/resize-h400-w400%5Ecompr-r85/1248/124820897/Peony+Arrangement.jpg" />
            <Link href="wayfairRewards">Peony Arrangements</Link>
            <Heading>$29.99</Heading>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/10554023/resize-h400-w400%5Ecompr-r85/6280/62807922/Artificial+Mixed+Peony+and+Hydrangea+Bush.jpg" />
            <Link href="wayfairRewards">
              Artificial Mixed Peony and Hydrangea Bush
            </Link>
            <Heading>$12.99</Heading>
            <Text>was$40.43</Text>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/97683870/resize-h400-w400%5Ecompr-r85/2805/280507803/Cherry+Blossom+Arrangement.jpg" />
            <Link href="wayfairRewards">Cherry Blossom Arrangement</Link>
            <Heading>$21.99</Heading>
            <Text>$3.14 per item was$23.99</Text>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/80937603/resize-h400-w400%5Ecompr-r85/1209/120977477/Alani+20%22+Artificial+Peony+Bunch.jpg" />
            <Link href="wayfairRewards">Alani 20" Artificial Peony Bunch</Link>
            <Heading>$39.00</Heading>
            <Text>$13.00 per item was$64.92</Text>
          </Box>

          <Box>
            <Image src="https://assets.wfcdn.com/im/36604588/resize-h400-w400%5Ecompr-r85/8423/84230130/Poppy+Arrangement.jpg" />
            <Link href="wayfairRewards">Poppy Arrangements</Link>
            <Heading>$13.99</Heading>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/37194050/resize-h400-w400%5Ecompr-r85/1519/151999881/Cauldwell+26%22+Artificial+Calla+Lily+Stem.jpg" />
            <Link href="wayfairRewards">
              Cauldwell 26" Artificial Calla Lily Stem
            </Link>
            <Heading>$39.98</Heading>
            <Text>$19.99 per item was$62.10</Text>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/22445210/resize-h400-w400%5Ecompr-r85/3624/36241908/Ultra+Realistic+Faux+Silk+Hydrangea+Arrangement+-+for+Home+Decor.jpg" />
            <Link href="wayfairRewards">
              {" "}
              Ultra Realistic Faux Silk Hydrangea Arrangement - for Home Decor
            </Link>
            <Heading>$34.99</Heading>
            <Text>$17.50 per item was$75.99</Text>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/46073987/resize-h400-w400%5Ecompr-r85/3907/39070582/Mixed+Assortment+Arrangement.jpg" />
            <Link href="wayfairRewards">Mixed Assortment Arrangement</Link>
            <Heading>$21.99</Heading>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/93796533/resize-h400-w400%5Ecompr-r85/2452/245256310/40%22+Artificial+Cherry+Blossom+Spray.jpg" />
            <Link href="wayfairRewards">
              40" Artificial Cherry Blossom Spray
            </Link>
            <Heading>$27.99</Heading>
            <Text>$9.33 per item was$45.45</Text>
          </Box>
          <Box>
            <Image src="https://assets.wfcdn.com/im/11861527/resize-h400-w400%5Ecompr-r85/2465/246523167/Silk+Dahlia+Arrangement+in+Vase.jpg" />
            <Link href="wayfairRewards">Silk Dahlia Arrangement in Vase</Link>
            <Heading>$41.99</Heading>
            <Text>was$59.99</Text>
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
}
