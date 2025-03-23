import { Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <Flex width={"100%"}>
        <Input type='text' placeholder='Find anything...' ></Input>
        <IoIosSearch />
      
    </Flex>
  )
}
