
import Desserts from '@/components/menu/desserts'
import Drinks from '@/components/menu/drinks'
import Snacks from '@/components/menu/snacks'
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Page() {

   
    return (
        <Box p={6} >
            <Heading textAlign="center" mb={10} fontSize="3xl" fontWeight="bold" letterSpacing="wide" color="teal.600">
                Menu
            </Heading>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                maxW="1200px"
                mx="auto"
                gap={10}  // Space between the snacks and image
            >
                {/* Snacks Section */}
                <Box w="60%">
                    <Snacks />
                </Box>

                {/* Image Section */}
                <Box
                    w="60%"
                    overflow="hidden"
                    borderRadius="lg"
                    boxShadow="lg"
                    _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
                >
                    <Image
                        src="https://www.shutterstock.com/shutterstock/photos/1562283355/display_1500/stock-photo-full-table-of-food-top-view-flat-lay-pizza-bbq-burger-fries-pasta-1562283355.jpg"
                        width={600}
                        height={400}
                        alt="Friends enjoying snacks"
                        style={{ borderRadius: '10px' }}  // Adding border-radius to make it look better
                    />
                </Box>
            </Flex>



            <Flex
                justifyContent="space-between"
                alignItems="center"
                maxW="1200px"
                mx="auto"
                my={59}
                gap={10}  // Space between the snacks and image
            >
                {/* Image Section */}
                <Box
                    w="60%"
                    overflow="hidden"
                    borderRadius="lg"
                    boxShadow="lg"
                    _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
                >
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOb5X5Z_3sYqlFHI_0k3FlZ0TPnThhx5oYw&s"
                        width={600}
                        height={400}
                        alt="Friends enjoying snacks"
                        style={{ borderRadius: '10px' }}  // Adding border-radius to make it look better
                    />
                </Box>

                {/* Snacks Section */}
                <Box w="60%">
                    <Drinks />
                </Box>


            </Flex>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                maxW="1200px"
                mx="auto"
                gap={10}  // Space between the snacks and image
            >
                {/* Snacks Section */}
                <Box w="60%">
                    <Desserts />
                </Box>

                {/* Image Section */}
                <Box
                    w="60%"
                    overflow="hidden"
                    borderRadius="lg"
                    boxShadow="lg"
                    _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D"
                        width={600}
                        height={400}
                        alt="Friends enjoying snacks"
                        style={{ borderRadius: '10px' }}  // Adding border-radius to make it look better
                    />
                </Box>
            </Flex>

        </Box>
    )
}
