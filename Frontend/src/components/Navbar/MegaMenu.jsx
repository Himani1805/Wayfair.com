import { Box, Flex, Text, Stack, Link } from "@chakra-ui/react";
import React from 'react'

const MegaMenu = ({ subItems }) => (
  <Box p={4} bg="white" shadow="md" borderRadius="md">
    <Flex>
      {subItems.map((column, idx) => (
        <Box key={idx} mr={10} minW="150px">
          <Text fontWeight="bold" mb={2} color="purple.600">{column.title}</Text>
          <Stack spacing={1}>
            {column.items.map((item, index) => (
              <Link key={index} href="#" fontSize="sm">{item}</Link>
            ))}
          </Stack>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default MegaMenu;

// const MegaMenu = ({ subItems }) => (
//   <Box p={4} bg="white" shadow="md" borderRadius="md" minW="700px">
//     <Flex wrap="wrap">
//       {subItems.map((column, idx) => (
//         <Box key={idx} mr={10} mb={4} minW="150px">
//           <Text fontWeight="bold" mb={2} color="purple.600">{column.title}</Text>
//           <Stack spacing={1}>
//             {column.items.map((item, index) => (
//               <Link key={index} href="#" fontSize="sm" color="gray.700">{item}</Link>
//             ))}
//           </Stack>
//         </Box>
//       ))}
//     </Flex>
//   </Box>
// );

