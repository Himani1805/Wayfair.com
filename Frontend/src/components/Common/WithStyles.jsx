import { Box, Button, Card, Flex, Image,Text} from "@chakra-ui/react";

const WithStyles = ({ image, title, price, mrp, tag = "" }) => {
  return (
<Card.Root minH={"200px"}  overflow="hidden" >
        <Image src={image} alt={title} w={"sm"} /> 
        <Card.Body gap="2">
          <Card.Title>{title}</Card.Title>
          {/* <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description> */}
          <Text
            textStyle="sm"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          > 
            ${price}
          </Text>
          <Text
            textStyle="sm"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            $<s>{mrp}</s>
          </Text>
        </Card.Body>
        {/* <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer> */}
      </Card.Root>
  );
};

export default WithStyles;
