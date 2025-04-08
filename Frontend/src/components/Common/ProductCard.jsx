import React from 'react'
import { Box, Image, Card, Flex, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
export default function ProductCard({ product }) {
    // console.log("Card", product);
    const navigate = useNavigate()
    const { id, image, name, url, tag, price, mrp } = product
    const path = `${url}/${id}`// name.replace(/\s/g, "");
    return (
        <Card.Root w="200px" h={"auto"} overflow="hidden" textWrap={"wrap"} mb={"20px"}>
            <Link to={path}  >  {/* state={product}*/}
                <Box>
                    <Image src={image} alt={name} w={"100%"} />
                    <Box>{tag}</Box>
                </Box>
                <Card.Body p={"15px 15px 20px"} width={"500px"} >
                    <Text fontSize={[12, 12, 14]}>{name}</Text>
                    <Flex gap={"10px"} >
                        <Text fontSize={[12, 12, 14]} letterSpacing={"1px"} >${price}</Text>
                        <Text fontSize={[12, 12, 14]} letterSpacing={"1px"} textDecorationLine={"line-through"} color={"red.400"} >${mrp}</Text>
                    </Flex>
                </Card.Body>
            </Link>
        </Card.Root>
    )
}
