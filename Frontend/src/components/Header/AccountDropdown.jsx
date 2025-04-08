import { Box, Link } from "@chakra-ui/react";
import { useState, useRef } from "react";
import AccountMenu from "../Header/AccountMenu";

const AccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(true);
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
          display="flex"
          alignItems="center"
          gap="5px"
          cursor="pointer"
          p="8px"
          borderRadius="md"
          _hover={{ bg: "gray.100" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          <Link href="#" fontWeight="500" _hover={{ textDecoration: "none", color: "#7c189f" }}>
            Account
          </Link>
        </Box>
  
        {isOpen && (
          <Box
            position="absolute"
            top="40px"
            left="0"
            bg="white"
            // boxShadow="md"
            p={4}
            borderRadius="md"
            minW="200px"
            zIndex="10"
            // border="1px solid #ddd"
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

