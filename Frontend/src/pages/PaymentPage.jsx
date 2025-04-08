import React, { useState, useContext } from "react";
import { Box, Button, Heading, RadioGroup, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    alert(`Payment Successful!\nPayment method: ${paymentMethod.toUpperCase()}`);
    clearCart();
    navigate('/order-confirmation');
  };

  const items = [
    { label: "UPI (Google Pay, PhonePe, Paytm)", value: "upi" },
    { label: "Credit/Debit Card", value: "card" },
    { label: "Bank Transfer", value: "bank" },
  ];

  return (
    <Box p={6} maxW="400px" mx="auto" boxShadow="md" borderRadius="md" bg="white">
      <Heading size="md" mb={4} textAlign="center">
        Select Payment Method
      </Heading>

      {/* Radio Button Group */}
      <RadioGroup.Root defaultValue="1" onValueChange={(e)=>setPaymentMethod(e.value)} value={paymentMethod}>
        <Stack gap="6">
          {items.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value}>
              <RadioGroup.ItemHiddenInput/>
              <RadioGroup.ItemIndicator/>
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </Stack>
      </RadioGroup.Root>
      
      <Button
        mt={5}
        w="full"
        colorScheme="purple"
        onClick={handlePayment}
        isDisabled={!paymentMethod}
      >
        Pay Now
      </Button>
    </Box>
  );
};

export default PaymentPage;





