import { Button, VStack } from "@chakra-ui/react";
import { FiChevronUp, FiMessageSquare } from "react-icons/fi";

export default function FloatingButtons() {
  return (
    <VStack spacing={4} position="fixed" bottom="20px" right="20px">
      <Button
        border="2px solid purple"
        borderRadius="90%"
        size="lg"
        color="purple.500"
        bg="white"
        boxShadow="md"
        _hover={{ bg: "purple.100" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FiChevronUp size={20} /> 
      </Button>
      <Button
        border="2px solid purple"
        borderRadius="90%"
        size="lg"
        color="purple.500"
        bg="white"
        boxShadow="md"
        _hover={{ bg: "purple.100" }}
        onClick={() => alert("Chat clicked!")}
      >
        <FiMessageSquare size={20} /> {/* Message Icon */}
      </Button>
    </VStack>
  );
}



