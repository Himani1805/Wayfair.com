import { Box, Link } from "@chakra-ui/react";
import { useState, useRef } from "react";
import AccountMenu from "../Header/AccountMenu";
import { MdOutlineAccountCircle } from "react-icons/md";

const AccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);
  
  
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current); 
      setIsOpen(true);
    };
  
    
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200);
    };
  
    return (
      <Box position="relative">
        <Box
          width={"100%"}
          display="flex"
          alignItems="center"
          // gap="5px"
          cursor="pointer"
          // p="8px"
          borderRadius="md"
          // border={"2px solid green"}
          _hover={{ bg: "gray.100" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
           <MdOutlineAccountCircle _hover={{ color: "#7c189f" }} size={30} />
          {/* <Link href="#" fontWeight="500" _hover={{ textDecoration: "none", color: "#7c189f" }}>
           
          </Link> */}
        </Box>
  
        {isOpen && (
          <Box
            position="absolute"
            top="40px"
            left="0"
            marginLeft={"-100px"}
            bg="white"
            // boxShadow="md"
            p={4}
            borderRadius="md"
            minW="200px"
            zIndex="10"
            // border="1px solid red"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          >
            <AccountMenu />
          </Box>
        )}
      </Box>
    );
  };
  
 
export default AccountDropdown;

