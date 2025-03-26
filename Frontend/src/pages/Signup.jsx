import { Box, Button, Checkbox, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCreditCard2Front, BsTruck } from "react-icons/bs";
import axios from 'axios';
import  backendUrl  from '../config/config';

export default function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  async function handleSignup() {
    try {
      let res = await axios.post(`${backendUrl}/auth/signup`, data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <Flex width={"100%"} justifyContent={"center"} margin={"20px 0px"} >
      <Flex width={"35%"} flexDirection={"column"} gap={"15px"} padding={"40px"} boxShadow= {"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Heading fontSize={"24px"}>Create Account</Heading>
        <Box >
          <Heading fontSize={"14px"}>First Name*</Heading>
          <Input type='text' name='firstName'  onChange={handleChange} />
        </Box>
        <Box>
          <Heading fontSize={"14px"}>Last Name*</Heading>
          <Input type='text' name='lastName' onChange={handleChange} />
        </Box>
        <Box>
          <Heading fontSize={"14px"}>Email*</Heading>
          <Input type='email' name='email' onChange={handleChange} />
        </Box>
        <Box>
          <Heading fontSize={"14px"}>Create Password*</Heading>
          <Input type='password' name='password' onChange={handleChange} />
        </Box>
        <Box >
          <Heading fontSize={"14px"}>Phone*</Heading>
          <Input type='text' name='phone'  onChange={handleChange} />
        </Box>
        <Box >
          <Heading fontSize={"14px"}>Address*</Heading>
          <Input type='text' name='address'  onChange={handleChange} />
        </Box>
        <Checkbox.Root>
          <Checkbox.Control/>
          <Checkbox.Label> Keep me signed in.</Checkbox.Label>
        </Checkbox.Root>
        <Text>By creating an account, you agree to our Privacy Policy and Terms & Conditions.</Text>
        <Button onClick={handleSignup} width={"100%"} colorScheme='twitter'>Create Account</Button>
        <Text>Already have an account? <Link to={"/login"} style={{ color: '#3A80E1' }}>Sign in</Link></Text>
      </Flex>
    </Flex>
  );
}
