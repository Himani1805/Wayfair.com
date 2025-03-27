import { Flex, VStack, Link } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  return (
    <VStack border={"2px solid red"} width={"100%"}>
      <Flex border={"2px solid green"} width={"100%"} justifyContent={"space-between"} px={"60px"}>
        <Link>SPRING CYBER WEEK | UP TO 80% OFF ENDS TOMORROW <FaArrowRight /></Link>
        <Link>Rewards | Financing | Professional | Everything Ships FREE*</Link>
      </Flex>
      <Flex border={"2px solid red"} width={"100%"}>
        <Flex width={"15%"}>
            Wayfair

        </Flex>
        <Flex width={"70%"}>
          <SearchBar />
        </Flex>
        <Flex width={"15%"}>
            <Link href=""><MdOutlineAccountCircle />  Account</Link>
            <Link><AiOutlineShoppingCart />Cart</Link>
        </Flex>

      </Flex>
    </VStack>
  );
}
