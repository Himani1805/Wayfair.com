import { Box, Flex, Link, Menu, useDisclosure } from "@chakra-ui/react";

// import { Collapse } from "@chakra-ui/transition";
import { menuData } from "../../data/menuData";
import MegaMenu from "./MegaMenu";
import { useState } from "react";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <Box bg="white" boxShadow="sm" w="100%">
      <Flex px={4} py={3} align="center" justify="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {menuData.map((menu, idx) => (
            <Box
              key={idx}
              position="relative"
              mx={2}
              onMouseEnter={() => setHoveredMenu(menu.subItems ? idx : null)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link fontWeight="medium" color="gray.700" cursor="pointer">{menu.label}</Link>
              {hoveredMenu === idx && (
                <Box position="absolute" top="100%" left={0} mt={2} zIndex="10">
                  <MegaMenu subItems={menu.subItems} />
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </Flex>

     
    </Box>

  );
};

export default Navbar;



// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [hoveredMenu, setHoveredMenu] = useState(null);

//   return (
//     <Box bg="white" boxShadow="sm" w="100%">
//       <Flex px={4} py={3} align="center" justify="space-between">
//         <Text fontWeight="bold" fontSize="xl" color="purple.500">Wayfair</Text>
        
//         <Flex display={{ base: "none", md: "flex" }}>
//           {menuData.map((menu, idx) => (
//             <Box
//               key={idx}
//               position="relative"
//               mx={4}
//               onMouseEnter={() => setHoveredMenu(menu.subItems ? idx : null)}
//               onMouseLeave={() => setHoveredMenu(null)}
//             >
//               <Link fontWeight="medium" color="gray.700" cursor="pointer">{menu.label}</Link>
//               {hoveredMenu === idx && (
//                 <Box position="absolute" top="100%" left={0} mt={2} zIndex="10">
//                   <MegaMenu subItems={menu.subItems} />
//                 </Box>
//               )}
//             </Box>
//           ))}
//         </Flex>

//         <IconButton
//           aria-label="menu"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           display={{ md: "none" }}
//           onClick={onToggle}
//         />
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <Box pb={4} px={4} display={{ md: "none" }}>
//           <Stack spacing={3}>
//             {menuData.map((menu, idx) => (
//               <Box key={idx}>
//                 <Text fontWeight="bold" color="purple.600">{menu.label}</Text>
//                 {menu.subItems && menu.subItems.map((sub, i) => (
//                   <Box pl={4} key={i}>
//                     <Text fontWeight="semibold">{sub.title}</Text>
//                     <Stack pl={2}>
//                       {sub.items.map((item, j) => (
//                         <Text key={j} color="gray.600" fontSize="sm">{item}</Text>
//                       ))}
//                     </Stack>
//                   </Box>
//                 ))}
//               </Box>
//             ))}
//           </Stack>
//         </Box>
//       </Collapse>
//     </Box>
//   );
// };

