import {
  Flex,
  VStack,
  Image,
  Heading,
  Link,
  List,
  Box,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import FloatingButtons from "./FloatingButtons";

export default function Footer() {
  return (
    <VStack width={"100%"}>
      <Box>
        <hr
          style={{
            width: "1510px",
            border: "1px solid #dcdcdc",
            margin: "2px 0",
          }}
        />
      </Box>
      <Flex width={"100%"} flexDirection={"column"}>
        <Box>
          <Image src="src\assets\images\attention,_waybors!_dDon't_miss_exclusive_deals_and_perks_on_the_app._download_the_app.jpg" />
        </Box>
        <Flex justifyContent={"center"} paddingTop={"50px"} gap={"20px"} textAlign={"center"}>
          <Box lineHeight={"60px"}>
            <Heading fontWeight={"700"}>Be the first to know about our best deals!</Heading>
            <List.Root listStyleType={"none"}>
              <List.Item>
                <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >Privacy Policy</Link>
              </List.Item>
            </List.Root>
          </Box>
          <Box
            as="form"
            action="/action_page.php"
            display="flex" 
            paddingTop={"20px"}
          >
            <Input
              placeholder="Email address"
              color="white"
              border="1px solid white"
              bg="transparent"
              width="300px"
            />
            <Button bg="purple" color="white" border="1px solid purple" _hover={{ bg: "darkpurple" }}>
              Submit
            </Button>
          </Box>
        </Flex>

      </Flex>
      <Box>
        <hr
          style={{
            width: "1510px",
            border: "1px solid #dcdcdc",
            margin: "20px 0",
          }}
        />
      </Box>
      <Flex width={"100%"} justifyContent={"space-evenly"} lineHeight={"35px"} padding={"20px 60px"}  >
        <Box width={"33%"}>
          <Heading fontSize={"24px"} fontWeight={"700"}>About Us</Heading>
          <List.Root listStyleType={"none"} >
            <List.Item>
              <Link href="aboutWayfair" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>About Wayfair</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairRewards" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Wayfair Rewards</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairProfessional" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Wayfair Professional</Link>
            </List.Item>
            <List.Item>
              <Link href="designServices" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Design Services</Link>
            </List.Item>
            <List.Item>
              <Link href="giftCards" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Gift Cards</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairCreditCard" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Wayfair Credit Card</Link>
            </List.Item>
            <List.Item>
              <Link href="wafairFinancing" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Wayfair Financing</Link>
            </List.Item>
            <List.Item>
              <Link href="productCollections" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Product Collections</Link>
            </List.Item>
            <List.Item>
              <Link href="careers" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Careers</Link>
            </List.Item>
            <List.Item>
              <Link href="sellOnWayfair" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Sell on Wayfair</Link>
            </List.Item>
            <List.Item>
              <Link href="creators" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Creators</Link>
            </List.Item>
            <List.Item>
              <Link href="investorRelations" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Investor Relations</Link>
            </List.Item>
            <List.Item>
              <Link href="advertiseWithUs" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Advertise With Us</Link>
            </List.Item>
            <List.Item>
              <Link href="locations" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Locations</Link>
            </List.Item>
          </List.Root>
        </Box>
        <Box width={"33%"}>
          <Heading fontSize={"24px"} fontWeight={"700"}>Customer Service</Heading>
          <List.Root listStyleType={"none"} >
            <List.Item>
              <Link href="myOrders" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>My Orders</Link>
            </List.Item>
            <List.Item>
              <Link href="myAccount" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>My Account</Link>
            </List.Item>
            <List.Item>
              <Link href="trackMyOrder" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Track My Order</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairAccessibilityStatement" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>
                Wayfair Accessibility Statement
              </Link>
            </List.Item>
            <List.Item>
              <Link href="returnPolicy" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Return Policy</Link>
            </List.Item>
            <List.Item>
              <Link href="helpCenter" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Help Center</Link>
            </List.Item>
            <List.Item>
              <Link href="ideasAdvice" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Ideas & Advice</Link>
            </List.Item>
            <List.Item>
              <Link href="productRecalls" _hover={{ textDecoration: "underline", textDecorationColor: "purple.500" }}>Product Recalls</Link>
            </List.Item>
          </List.Root>
        </Box>
        <Box width={"33%"}>
          <Heading fontSize={"24px"} fontWeight={"700"} marginBottom={"10px"}>Contact Us</Heading>
          <Box >
            <Button background={"#7c189f"} borderRadius={"40px"} padding={" 22px 28px"} marginBottom={"10px"}><MdOutlineWatchLater />Quick Help</Button>
            <br />
            <Button color={"black"} background={"white"} marginBottom={"10px"} padding={" 22px 40px"} border={"1px solid #7c189f "} borderRadius={"30px"}><IoCallOutline />Call Us</Button>
          </Box>
          <Box>
            <Heading fontWeight={"600"}>Customer Service</Heading>
            <Text>Open. Closes at 11:59 PM ET.</Text>
            <List.Root listStyleType={"none"}>
              <List.Item>
                <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }}>Weekly Hours</Link>
              </List.Item>
            </List.Root>
            <Heading fontWeight={"600"}>Shopping Assistance</Heading>
            <Text>Open. Closes at 11:59 PM ET.</Text>
            <List.Root listStyleType={"none"}>
              <List.Item>
                <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >Weekly Hours</Link>
              </List.Item>
            </List.Root>
          </Box>
        </Box>
      </Flex>
      <Box>
        <hr
          style={{
            width: "1510px",
            border: "1px solid #dcdcdc",
            margin: "5px 0"
          }}
        />
      </Box>
      <Flex flexDirection={"column"} width={"100%"} justifyContent={"space-evenly"} gap={"15px"} padding={"20px 60px"} >
        <Flex fontSize={"30px"} gap={"20px"}>
          <Link href="w">JOSS & MAIN</Link>
          <Link href="w">
            ALL <strong>MODERN</strong>
          </Link>
          <Link href="w">BIRCHLN</Link>
        </Flex>
        <Flex width={"100%"} gap={"20px"}>
          <ImFacebook2 size={20} color="#791999" />
          <FaPinterest size={20} color="#791999" />
          <FaInstagram size={20} color="#791999" />
          <FaTiktok size={20} color="#791999" />
          <FaYoutube size={20} color="#791999" />
        </Flex>
        <Flex gap={"20px"} fontWeight={"500"}>
          <Link href="wayfairRewards">Terms of Use</Link>
          <Link href="wayfairRewards">Your Privacy Rights & Choices</Link>
          <Link href="wayfairRewards">Privacy Policy</Link>
        </Flex>
        <Text fontSize={"13px"}>
          © 2025 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116
        </Text>
      </Flex>
      <Flex>
        <FloatingButtons />
      </Flex>
    </VStack>
  );
}
