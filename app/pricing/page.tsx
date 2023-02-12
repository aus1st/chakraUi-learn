"use client"
import { Button, Flex, Box, Stack, HStack, Icon, Heading, Text, StackProps } from '@chakra-ui/react'
import CheckIcon from '../icons/page'

export const ListItems = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as="li" spacing="20px" {...rest}>
            <Icon as={CheckIcon} w="22px" h="22px" />
            <Text>{children}</Text>
        </HStack>
    )
}


export default function Pricing() {
    return (
        <>
            <Box maxW="994px" margin="auto" mt="-256px" borderRadius="12px" overflow="hidden"
                boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
            >
                <Flex>
                    <Box bg="#F0EAFB" p="60px" align="center">
                        <Text fontSize="24px" fontWeight="800">Premium PRO</Text>
                        <Heading as="h3" fontSize="60px" mt="16px" >$300</Heading>
                        <Text color="#171923" fontSize="18px" fontWeight='500' mt="8px">Billed just once</Text>
                        <Button colorScheme="purple" size="lg" width='282px' mt="24px">Get Started</Button>
                    </Box>
                    <Box p="60px" fontSize="18px" bg="white" >
                        <Text>Access these features when you get this pricing package for your business</Text>
                        <Stack as="ul" spacing="20px" pt="24px">
                            <ListItems>International calling and messaging API</ListItems>
                            <ListItems>Additional phone numbers</ListItems>
                            <ListItems>Automated messages via Zapier</ListItems>
                            <ListItems>24/7 support and consulting</ListItems>

                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </>
    )

}