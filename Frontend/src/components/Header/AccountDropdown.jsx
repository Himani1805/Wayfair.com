import { Box, Button, Link } from "@chakra-ui/react";
import { useState, useRef } from "react";
import AccountMenu from "./AccountMenu";

const AccountDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);
  
    // Show submenu on hover
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current); // Prevent hiding if user quickly moves back
      setIsOpen(true);
    };
  
    // Hide submenu after a short delay (prevents flickering)
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200);
    };
  
    return (
      <Box position="relative">
        {/* Account Section - Hover to Show Submenu */}
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
          <MdOutlineAccountCircle size={30} />
          <Link href="#" fontWeight="500" _hover={{ textDecoration: "none", color: "#7c189f" }}>
            Account
          </Link>
        </Box>
  
        {/* Submenu - Stays Open While Hovering */}
        {isOpen && (
          <Box
            position="absolute"
            top="40px"
            left="0"
            bg="white"
            boxShadow="md"
            p={4}
            borderRadius="md"
            minW="200px"
            zIndex="10"
            border="1px solid #ddd"
            onMouseEnter={handleMouseEnter} // Prevent closing when inside menu
            onMouseLeave={handleMouseLeave} // Close when user leaves
          >
            <AccountMenu />
          </Box>
        )}
      </Box>
    );
  };
  
 
export default AccountDropdown;

// return (
//     <Box 
//       position="relative" 
//       onMouseEnter={() => setIsHovered(true)} 
//       onMouseLeave={() => setIsHovered(false)}
//     >
      
//       {/* <Button bg="transparent" _hover={{ bg: "gray.100" }}>&#x1F464; Account</Button> */}
//       <Link 
//         href="#" 
//         fontWeight="500" 
//         display="flex" 
//         alignItems="center" 
//         gap="5px"
//         _hover={{ textDecoration: "none", color: "#7c189f" }}
//       >
//         <MdOutlineAccountCircle size={30} />
//         Account
//       </Link>
//       {isHovered && (
//         <Box
//           position="absolute"
//           top="40px"
//           right="0"
//           bg="white"
//           boxShadow="md"
//           p={4}
//           borderRadius="md"
//           zIndex="10"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <AccountMenu />
//         </Box>
//       )}
//     </Box>
//   );
// };
