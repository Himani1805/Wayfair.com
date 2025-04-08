// import { Box, Button, Image, Text, VStack, Heading } from "@chakra-ui/react";
// import { useContext } from "react";
// import { CartContext } from "../contexts/CartContextjsx";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <Box maxW="600px" mx="auto" p="4">
//       <Heading textAlign="center">Shopping Cart</Heading>
//       {/* <Heading textAlign="center" fontWeight={"700"}>Oh-no! Looks like your cart is empty.</Heading>
      
//       <Text>Here are some options to get you started:</Text>               
//       <Text>View your saved items in <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >Cart</Link></Text> 
//       <Text>Start saving with <Link href="myOrders" textDecoration={"underline"} color={"#7c189f"} _hover={{ textDecoration: "none", textDecorationColor: "purple.500" }} >Daily Sales</Link></Text>   */}
//       {/* <Divider my="4" /> */}

//       {cart.length === 0 ? (
//         <Text textAlign="center">Your cart is empty</Text>
//       ) : (
//         <>
//           <VStack spacing="4" align="stretch">
//             {cart.map((item) => (
//               <Box key={item._id} p="4" borderWidth="1px" borderRadius="lg">
//                 <Image src={item.image} alt={item.name} borderRadius="md" maxH="100px" />
//                 <Text fontWeight="bold">{item.name}</Text>
//                 <Text>Price: ${item.price}</Text>
//                 <Text>Quantity: {item.quantity}</Text>
//                 <Button colorScheme="red" size="sm" mt="2" onClick={() => removeFromCart(item._id)}>
//                   Remove
//                 </Button>
//               </Box>
//             ))}
//           </VStack>

//           {/* <Divider my="4" /> */}
//           <Text fontSize="xl" fontWeight="bold">Total: ${totalPrice.toFixed(2)}</Text>

//           <Button colorScheme="red" mt="4" width="full" onClick={clearCart}>
//             Clear Cart
//           </Button>
//           <Button colorScheme="blue" mt="2" width="full" onClick={() => navigate("/")}>
//             Continue Shopping
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

export default CartPage;
