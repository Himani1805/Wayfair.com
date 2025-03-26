import React from "react";
import {
  Box,
  Image,
  Text,
  Grid,
  Heading,
  Stack,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";

const categories = [
  {
    title: "recently viewed",
    items: [
      { img: "https://picsum.photos/150?random=1", tag: "Sale" },
      { img: "https://picsum.photos/150?random=2", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=3", tag: "Sale" },
      { img: "https://picsum.photos/150?random=4", tag: "Dining Sale" },
    ],
  },
  {
    title: "keep shopping for sheets & pillowcases",
    items: [
      { img: "https://picsum.photos/150?random=5" },
      { img: "https://picsum.photos/150?random=6" },
      { img: "https://picsum.photos/150?random=7" },
      { img: "https://picsum.photos/150?random=8" },
    ],
  },
  {
    title: "easter decor picks for every style",
    items: [
      { img: "https://picsum.photos/150?random=9", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=10", tag: "Sale" },
      { img: "https://picsum.photos/150?random=11" },
      { img: "https://picsum.photos/150?random=12" },
    ],
  },
  {
    title: "buzz on the block: rainbow glassware",
    items: [
      { img: "https://picsum.photos/150?random=13", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=14", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=15", tag: "Dining Sale" },
      { img: "https://picsum.photos/150?random=16", tag: "Dining Sale" },
    ],
  },
];


export default function AllCategories() {
  return (
    <Box p={8}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
        {categories.map((section, idx) => (
          <Box key={idx}>
            <Heading size="md" mb={4}>
              {section.title} →
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
              {section.items.map((item, i) => (
                <Box key={i} position="relative">
                  <Image
                    src={item.img}
                    alt="product"
                    borderRadius="md"
                    objectFit="cover"
                  />
                  {item.tag && (
                    <Badge
                      position="absolute"
                      bottom={2}
                      left={2}
                      colorScheme="red"
                    >
                      {item.tag}
                    </Badge>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

