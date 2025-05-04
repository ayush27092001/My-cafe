'use client'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Heading,
    Button
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

const datas = [{

    imageURL:
        'https://media.istockphoto.com/id/1370336123/photo/couple-in-cafe-takes-selfie-by-mobile-phone.jpg?s=612x612&w=0&k=20&c=nPOltF2R4-eZyd5EQSQ5VvdICGI-6D1ynoUMOR6TnJU='
}, {
    imageURL:
        'https://media.istockphoto.com/id/912220024/photo/two-young-women-at-a-lunch-in-a-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=a5JmrK3DdUuodbarcg3a5i5c11TNkis4z5CocX1dWY0='

}, {
    imageURL:
        'https://media.istockphoto.com/id/1494248769/photo/happy-couple-enjoying-breakfast-drinking-coffee-at-bar-cafeteria-life-style-concept-with-guy.jpg?s=2048x2048&w=is&k=20&c=nNLJj0njfEGnnNXNNv1zrxk8PmYicTNkAqtJkUCeqaQ='
}]



function Gallery() {
    const router = typeof window !== "undefined" ? useRouter() : null; // Check if in client

    const handleNavigation = () => {
        if (router) {
            router.push("/gallery");
        }
    };
    return (
        <>
            {/* Heading Section with View All Button */}
            <Flex justify="space-between" align="center" bgColor={'ButtonFace'} p="5px 5px" mx={"100px"}>
                <Heading color={'green.500'}>Gallery</Heading>

                {/* View All Button */}

                <Button as="a" colorScheme="teal" variant="solid" size="md" onClick={handleNavigation}>
                    View All
                </Button>

            </Flex>

            {/* Gallery Items Section */}
            <Flex p={50} w="full" alignItems="center" justifyContent='space-evenly' >
                {
                    datas.length > 0 && datas?.map((data, index) => (
                        <Box
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="400px"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative"
                            overflow="hidden" // overflow hidden to make sure zoom doesn't overflow the box
                            transition="transform 0.3s ease" // Smooth transition on hover
                            _hover={{ transform: 'scale(1.1)' }} // Box and image zoom together
                            key={index} // Unique key for each item
                        >
                            {data.isNew && (
                                <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                            )}

                            <Image
                                src={data.imageURL}
                                alt={`Picture of ${data.name}`}
                                roundedTop="lg"
                                height="350px"
                                width="100%"
                                objectFit="cover"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="2xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated>
                                        {data.name}
                                    </Box>
                                </Flex>


                            </Box>
                        </Box>
                    ))
                }
            </Flex>
        </>
    )
}

export default Gallery
