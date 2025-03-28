import { useState } from "react";
import { Flex, Input,Button } from '@chakra-ui/react'
import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  // const handleSearch = () => {
  //   if (onSearch) {
  //     onSearch(query);
  //   }
  // };
  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("Searching for:", query);
      if (onSearch) onSearch(query);
    }
  };
  return (
    <Flex width={"100%"} borderRadius={"5px"} p={1} _hover={{border:"1px solid black"}}>
        <Input type='text' _hover={{border:"none"}} placeholder='Find anything...'  value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
        <Button bg={"#7c189f"} border={"5px solid #7c189f"}  onClick={handleSearch}><IoIosSearch color='white' /></Button>
    </Flex>
  )
}
