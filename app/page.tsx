"use client";
import { Box,Flex,Stack,VStack,HStack,Text,Heading,Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    
    {/* <Flex justify="space-between" align="center"> */}
    <HStack spacing="24px">
    <Box bg="red" w="180px" h="150px">Item1</Box> 
    <Box bg="yellow" w="180px" h="150px">Item2</Box>
    <Box bg="purple" w="210px" h="180px">Item3</Box>
    <Box bg="orange" w="180px" h="150px">Item4</Box>
    {/* </Flex> */}
    </HStack>

    <Text noOfLines={1}>
    The app directory is where you define routes, create UI and colocate files such as components, tests, or stylesheets.
    In the app directory delete everything except page.tsx and layout.tsx
    </Text>

    <Heading fontSize="54px">
      Create apps using Next.js and Chakra
    </Heading>

    <Box bg="green" w="200px" h="200px" mx="auto">
      <Text color="white" fontSize="26px" align="center">Create apps using Next.js and Chakra</Text>
      <Button mt="10px" mx="58px" colorScheme="red" _hover={{background:'blue'}} _focus={{background:'yellow', color:"black"}}>Click Me</Button>
    </Box>

 


    </>
  )
}
