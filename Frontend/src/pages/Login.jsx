import { Box, Button, Checkbox, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../config/config';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  async function handleLogin() {
    
    const url = `${backendUrl}/auth/login`
    try {
      let res = await axios.post(`${backendUrl}/auth/login`, data, {withCredentials:true});
      let result = await res.data;
      // const res = await axios.post(`${backendUrl}/auth/login`, data, { withCredentials: true });
      window.alert(result.message)
      navigate("/")
    } catch (err) {
      window.alert(err.response.data.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <Flex width={"100%"} justifyContent={"center"} margin={"20px 0px"}>
      <Flex width={"35%"} flexDirection={"column"}  gap={"15px"} padding={"40px"} boxShadow= {"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Heading fontSize={"24px"}>Sign in</Heading>
        <Text>New here? <Link to={"/signup"} style={{ color: '#3A80E1' }}>Create an account.</Link></Text>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"}>Email</Heading>
          <Input type='email' placeholder='Enter your email' name='email' onChange={handleChange} />
        </Box>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"}>Password</Heading>
          <Input type='password' placeholder='Enter your password' name='password' onChange={handleChange} />
        </Box>
        <Text><Link to={"#"}>Forgot Password?</Link></Text>
        <Checkbox.Root>
          <Checkbox.Control/>
          <Checkbox.Label> Keep me signed in.</Checkbox.Label>
        </Checkbox.Root>
        <Text>By signing in, you agree to our Privacy Policy and Terms & Conditions.</Text>
        <Button onClick={handleLogin} width={"100%"} colorScheme='twitter'>Sign In</Button>
      </Flex>
    </Flex>
  );
}
