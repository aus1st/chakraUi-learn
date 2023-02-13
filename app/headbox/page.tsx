"use client";
import { Box,Flex,Text,Heading,Button } from '@chakra-ui/react'
import  Features from '@/app/features';
import Pricing from '../pricing/page';
 
export default function Header() {
  return (
    <>

    {/* <Flex justify="space-between" align="center"> */}
    <Box as="section" pb="112px">
    <Box  color="#F7FAFC" bg="#6B46C1" pt="90px" pb="198px" align="center">
        <Heading fontWeight="800" fontSize="48px">
            Simple Pricing for your Business
        </Heading>
        <Text fontWeight="500" fontSize="24px" pt="16px">
            Plans that are crafted to suit your business</Text>
        </Box>
        </Box>
        <Pricing /> 
        {/* <Features /> */}
        </>
  )
}
