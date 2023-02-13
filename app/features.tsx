
import {HStack, Text, Icon, StackProps} from '@chakra-ui/react'
import { ElementType } from 'react';

///import { MoneybackGaurantee,HassleFree,MonthlySubscription } from '../iconians/page';

interface FeatureProps extends StackProps {
    icon: ElementType;
}


function Feature(props : FeatureProps) {
  const {icon, children, ...rest} = props;
    return (
        <>
        <HStack {...rest} spacing="24px">
            <Icon as={icon} boxSize="48px"></Icon>
            <Text fontSize="18px" fontWeight="700">
                {children}
                </Text>
        </HStack>
        </>
    )
}

export default function Features() {
    return 
    (
        <>
        <HStack>
            <Feature icon={MoneybackGaurantee}>
                30 Days money back gaurantee 
            </Feature>
        </HStack>
        </>
    )
}