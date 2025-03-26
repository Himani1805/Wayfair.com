import React from 'react'
import Banner from '../MainSection/Banner'
import Slider from './Slider'
import ProductsSlider from './ProductsSlider'
import { Box, Flex, VStack } from '@chakra-ui/react'


export default function MainDashboard() {
  return (
    <Flex flexDirection={'column'} gap={'60px'} >
      <Banner img='/Static/Images/e61d2a70-f58e-48a5-90f4-f9d7bde16fab.png'/>
      <Slider/>
      <Banner img='/Static/Images/676ce1c2-5c5e-48cc-9d8e-8c8fd2e28ab3.png'/>
      <ProductsSlider/>
    
    </Flex>
  )
}
