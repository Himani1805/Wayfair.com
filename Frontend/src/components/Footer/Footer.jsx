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

export default function Footer() {
  return (
    <VStack width={"100%"}>
      <Box>
        <hr
          style={{
            width: "1510px",
            border: "1px solid #dcdcdc",
            margin: "5px 0",
          }}
        />
      </Box>
      <Flex width={"100%"} flexDirection={"column"}>
        <Box>
          <Image src="src\assets\images\attention,_waybors!_dDon't_miss_exclusive_deals_and_perks_on_the_app._download_the_app.jpg" />
        </Box>
        <Box>
          <Heading>Be the first to know about our best deals!</Heading>
          <Link href="wayfairRewards">Privacy Policy</Link>
        </Box>
        <Box
          as="form"
          action="/action_page.php"
          p={5}
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
        >
          <Heading as="legend" size="md" mb={4}>
            Personalia:
          </Heading>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </Box>
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
      <Flex justifyContent={"spaceEvenly"} gap={"100px"}>
        <Box>
          <Heading>About Us</Heading>
          <List.Root listStyleType={"none"}>
            <List.Item>
              <Link href="aboutWayfair">About Wayfair</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairRewards">Wayfair Rewards</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairProfessional">Wayfair Professional</Link>
            </List.Item>
            <List.Item>
              <Link href="designServices">Design Services</Link>
            </List.Item>
            <List.Item>
              <Link href="giftCards">Gift Cards</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairCreditCard">Wayfair Credit Card</Link>
            </List.Item>
            <List.Item>
              <Link href="wafairFinancing">Wayfair Financing</Link>
            </List.Item>
            <List.Item>
              <Link href="productCollections">Product Collections</Link>
            </List.Item>
            <List.Item>
              <Link href="careers">Careers</Link>
            </List.Item>
            <List.Item>
              <Link href="sellOnWayfair">Sell on Wayfair</Link>
            </List.Item>
            <List.Item>
              <Link href="creators">Creators</Link>
            </List.Item>
            <List.Item>
              <Link href="investorRelations">Investor Relations</Link>
            </List.Item>
            <List.Item>
              <Link href="advertiseWithUs">Advertise With Us</Link>
            </List.Item>
            <List.Item>
              <Link href="locations">Locations</Link>
            </List.Item>
          </List.Root>
        </Box>
        <Box>
          <Heading>Customer Service</Heading>
          <List.Root listStyleType={"none"}>
            <List.Item>
              <Link href="myOrders">My Orders</Link>
            </List.Item>
            <List.Item>
              <Link href="myAccount">My Account</Link>
            </List.Item>
            <List.Item>
              <Link href="trackMyOrder">Track My Order</Link>
            </List.Item>
            <List.Item>
              <Link href="wayfairAccessibilityStatement">
                Wayfair Accessibility Statement
              </Link>
            </List.Item>
            <List.Item>
              <Link href="returnPolicy">Return Policy</Link>
            </List.Item>
            <List.Item>
              <Link href="helpCenter">Help Center</Link>
            </List.Item>
            <List.Item>
              <Link href="ideasAdvice">Ideas & Advice</Link>
            </List.Item>
            <List.Item>
              <Link href="productRecalls">Product Recalls</Link>
            </List.Item>
          </List.Root>
        </Box>
        <Box>
          <Heading>Contact Us</Heading>
          <Button>Quick Help</Button>
          <br />
          <br />
          <Button>Call Us</Button>
          <Heading>Customer Service</Heading>
          <Text>Open. Closes at 11:59 PM ET.</Text>
          <List.Root listStyleType={"none"}>
            <List.Item>
              <Link href="myOrders">Weekly Hours</Link>
            </List.Item>
          </List.Root>
          <Heading>Shopping Assistance</Heading>
          <Text>Open. Closes at 11:59 PM ET.</Text>
          <List.Root listStyleType={"none"}>
            <List.Item>
              <Link href="myOrders">Weekly Hours</Link>
            </List.Item>
          </List.Root>
        </Box>
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

      <Flex flexDirection={"column"}>
        <Flex>
          <Link href="w">JOSS & MAIN</Link>
          <Link href="w">
            ALL <strong>MODERN</strong>
          </Link>
          <Link href="w">BIRCHLN</Link>
        </Flex>
        <br />
        <Flex width={"100%"}>
          <ImFacebook2 width={"60%"} />
          <FaPinterest />
          <FaInstagram />
          <FaTiktok />
          <FaYoutube />
        </Flex>
        <br />
        <Box>
          <Link href="wayfairRewards">Terms of Use</Link>
          <Link href="wayfairRewards">Your Privacy Rights & Choices</Link>
          <Link href="wayfairRewards">Privacy Policy</Link>
        </Box>
        <br />
        <Text>
          © 2025 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116
        </Text>
      </Flex>
    </VStack>
  );
}
