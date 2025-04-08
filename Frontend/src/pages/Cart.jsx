import { Box, Button, Flex, Heading, Image, Span, Text } from '@chakra-ui/react';
import { CartContext } from '../contexts/CartProvider';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import AddressVerification from './AddressVerification';
import backendUrl from '../config/config';
import axios from 'axios';


export default function Cart() { 
    // const userId = "67e2e8a912bd3d5fbaa2d014"
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([])
    const [triggerFetch, setTriggerFetch]= useState(true)

    // const fetchUserData = async() => {
    //     // const url = backendUrl + "/user/67e2e8a912bd3d5fbaa2d014"
    //     const url = "https://wayfair-com.onrender.com/api/user/67e2e8a912bd3d5fbaa2d014"
    //     const response = await axios.get(url)
    //      setUserData(response.data);
    // }
    const fetchUserData = async () => {
        try {
            const url = "https://wayfair-com.onrender.com/api/user/67e2e8a912bd3d5fbaa2d014";
            const response = await axios.get(url);
            setUserData(response.data.data);
            console.log("Fetched user data:", response.data.data); 
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setTriggerFetch(false); 
        }
    };

    useEffect(() => {
        if(triggerFetch){
            fetchUserData()     
            console.log(userData) 
            setTriggerFetch(false)
            
        }
        
    }, [triggerFetch])


    const calculateSubtotal = () => {
        return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() + 5; // $5 tax
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            return;
        }
        navigate('/payment');
    };

    return (
        <Flex justify={"space-around"} p={4}>
            <Flex direction={"column"} flex={2} mr={8}>
                {cart.length === 0 ? (
                    <Text fontSize="lg">Your cart is empty</Text>
                ) : (
                    cart.map((product) => (
                        <CartCard key={`${product.id}-${product.quantity}`} product={product} />
                    ))
                )}
            </Flex>
            
            {/* Right Panel */}
            {cart.length > 0 && (
                <Flex direction={"column"} gap={"20px"} flex={1} p={4} bg="gray.50" borderRadius="md">
                    <Heading size="md">Order Summary ({cart.length})</Heading>
                    <Text>This order qualifies for Free Shipping!</Text>

                    <Flex direction={"column"} gap={"20px"}>
                        <Flex justify={"space-between"}>
                            <Text>Item Subtotal ({cart.length})</Text>
                            <Text>${calculateSubtotal().toFixed(2)}</Text>
                        </Flex>

                        <Flex justify={"space-between"}>
                            <Flex gap={"5px"}>Delivery to <Span color={"blue"} textDecoration={"underline"}><Link >{userData?.address}</Link></Span></Flex>
                            <Text>FREE</Text>
                        </Flex>

                        <Flex justify={"space-between"}>
                            <Text>Estimated Tax</Text>
                            <Text>$5.00</Text>
                        </Flex>
                    </Flex>

                    <Box>
                        <Flex justify={"space-between"}>
                            <Heading size="md">Total</Heading>
                            <Text>${calculateTotal().toFixed(2)}</Text>
                        </Flex>

                        <Flex justify={"space-between"}>
                            <Text>You Save</Text>
                            <Text>$25.00</Text>
                        </Flex>
                    </Box>

                    <Button 
                        bg={"pink.500"} 
                        color="white" 
                        _hover={{ bg: "pink.600" }}
                        onClick={handleCheckout}
                    >
                        Proceed to Checkout
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}


const CartCard = ({ product }) => {
    const { removeFromCart, updateQuantity } = useContext(CartContext);
    const quantity = product.quantity || 1;

    return (
        <Flex mb={"20px"} justify={"space-between"} padding={"20px"} borderBottom="1px solid" borderColor="gray.200">
            <Flex w={"15%"}>
                <Image src={product.image} alt={product.name} boxSize="100px" objectFit="contain" />
            </Flex>

            <Flex w={"40%"} direction={"column"} gap={"10px"}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>***** (591)</Text>
                <Text w={"fit-content"} fontWeight={"bolder"} color={"green.900"} bg="green.100" p={1} borderRadius="md">
                    Fast Delivery
                </Text>
                <Text>Get in by Thu. Apr 20</Text>
            </Flex>

            <Flex w={"15%"} direction={"column"} gap={"10px"}>
                <Text fontWeight="bold">${(product.price * quantity).toFixed(2)}</Text>
                <Flex gap="10px" align="center">
                    <Button 
                        size="sm" 
                        onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                    >
                        -
                    </Button>
                    <Text>{quantity}</Text>
                    <Button 
                        size="sm" 
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                        +
                    </Button>
                </Flex>

                <Link to={"#"} color="blue.500" fontSize="sm">Save for Later</Link>
                <Text 
                    cursor={"pointer"} 
                    color="red.500" 
                    fontSize="sm"
                    onClick={() => removeFromCart(product.id)}
                >
                    Remove
                </Text>
            </Flex>
        </Flex>
    )
}


//     return (
//         <Flex justify={"space-around"}>
//             <Flex direction={"column"}>
//                 {
//                     cart.map((product, index) => {
//                         return <CartCard key={product.id} product={product} />
//                     })
//                 }
//             </Flex>
//             {/* Right Panel */}
//             <Flex direction={"column"} gap={"20px"}>
//                 <Heading>Order Summary ({cart.length})</Heading>
//                 <Text>This order is qualifies for Free Shipping!</Text>

//                 <Flex direction={"column"} gap={"20px"}>
//                     <Flex justify={"space-between"}>
//                         <Text>Item Subtotal ({cart.length})</Text>
//                         <Text>${calculateSubtotal().toFixed(2)}</Text>
//                     </Flex>

//                     <Flex justify={"space-between"}>
//                         <Flex>Delivery to <Link color='pink'> Your Address - pincode</Link> </Flex>
//                         <Text>FREE</Text>
//                     </Flex>

//                     <Flex justify={"space-between"}>
//                         <Text>Eastimate Tax</Text>
//                         <Text>$5.00</Text>
//                     </Flex>
//                 </Flex>

//                 <Box>
//                     <Flex justify={"space-between"}>
//                         <Heading>Total</Heading>
//                         <Text>${calculateTotal().toFixed(2)}</Text>
//                     </Flex>

//                     <Flex justify={"space-between"}>
//                         <Text>You Save</Text>
//                         <Text>$25.00</Text>
//                     </Flex>
//                 </Box>

//                 <Button bg={"pink"}>Proceed to Checkout</Button>
//             </Flex>
//         </Flex>
//     )
// }

// const CartCard = ({ product }) => {
//     const { removeFromCart,  updateQuantity } = useContext(CartContext);
//     const quantity = product.quantity || 1;
 
//     return (
//         <Flex mb={"20px"} justify={"space-between"} padding={"20px"} >
//             <Flex w={"15%"}>
//                 <Image src={product.image} alt={product.name} />
//             </Flex>

//             <Flex w={"40%"} direction={"column"} gap={"20px"}>
//                 <Text>{product.name}</Text>
//                 <Text>***** (591)</Text>
//                 <Text w={"fit-content"} fontWeight={"bolder"} color={"green.900"} bg="green.100">Fast Delivery
//                 </Text>
//                 <Text>Get in by Thu. Apr 20</Text>
//             </Flex>

//             <Flex w={"15%"} direction={"column"} gap={"20px"}>
//                 <Text>${product.price.toFixed(2)}</Text>
//                 {/* <ProductQuantity data={[count, setCount]} /> */}
//                 <Flex gap="20px">
//                     <Text cursor="pointer" onClick={() => updateQuantity(product.id, quantity - 1)}>
//                         -
//                     </Text>
//                     <Text>{quantity}</Text>
//                     <Text cursor="pointer" onClick={() => updateQuantity(product.id, quantity + 1)}>
//                         +
//                     </Text>
//                 </Flex>

//                 <Link to={"#"}>Save for Later</Link>
//                 <Text cursor={"pointer"} onClick={() => removeFromCart(product.id)} >  Remove   
//                 </Text>
//             </Flex>
//             <hr />
//         </Flex>
//     )
// }

// export const ProductQuantity = ({ data }) => {
//     const [count, setCount] = data
//     return (
//         <Flex gap={"20px"}>
//             <Text cursor={"pointer"} onClick={() => setCount(count - 1)}>-</Text>
//             <Text>{count}</Text>
//             <Text cursor={"pointer"} onClick={() => setCount(count + 1)}>+</Text>
//         </Flex>
//     )
// }








