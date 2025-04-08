import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  ButtonGroup,
  Divider,
  Alert,
  AlertIcon
} from "@chakra-ui/react";

const AddressVerification = () => {
  return (
    <Box maxW="md" mx="auto" p={6} boxShadow="md" borderRadius="md" bg="white">
      <Heading size="lg" mb={4} textAlign="center">
        Review Shipping Address
      </Heading>

      <Alert status="warning" mb={4} borderRadius="md">
        <AlertIcon />
        <Box>
          <Text fontWeight="bold">We could not verify your address.</Text>
          <Text fontSize="sm">
            Please edit or confirm we have your correct address to ensure a successful delivery.
          </Text>
        </Box>
      </Alert>

      <Box mb={6}>
        <Text fontWeight="bold" mb={2}>You Entered</Text>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text>C-134 Sector-37</Text>
          <Text>Greater Noida, IN 201308</Text>
        </Box>
      </Box>

      <Divider mb={4} />

      <ButtonGroup spacing={4} w="full">
        <Button
          colorScheme="blue"
          flex={1}
          onClick={() => console.log("Address confirmed")}
        >
          Confirm Address
        </Button>
        <Button
          variant="outline"
          flex={1}
          onClick={() => console.log("Editing address")}
        >
          Edit Address
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default AddressVerification;