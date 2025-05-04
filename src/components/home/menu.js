"use client"; // Ensure this is at the top

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Heading,
    Button
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useRouter } from 'next/navigation'; // Ensure this import
import { useEffect } from 'react';

const datas = [
    {
        isNew: true,
        imageURL: "https://images.unsplash.com/photo-1634473115597-756495cc21a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: `Delicious vanilla Pastry`,
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://media.istockphoto.com/id/1127940785/photo/stacked-vegetarian-sandwiches-of-arugula-artichoke-sun-dried-tomato-pesto.jpg?s=2048x2048&w=is&k=20&c=xEvCaSqxLmF4y7c7Y2r3AyqcNVQfB4KZHIyWOBens5c=',
        name: 'White Sauce Pasta',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://media.istockphoto.com/id/1203557629/photo/close-uo-of-fork-with-spaghetti-in-tomato-sauce.jpg?s=2048x2048&w=is&k=20&c=27l42Lri6Etxf4lyxNTeeuDu_emNT1XCS8X0ctMKWgI=',
        name: 'Noodles',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    }
];

function Rating({ rating, numReviews }) {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

function Menu() {
    const router = typeof window !== "undefined" ? useRouter() : null; // Check if in client

    const handleNavigation = () => {
        if (router) {
            router.push("/menu");
        }
    };
   
    return (
        <>
            {/* Heading Section with View All Button */}
            <Flex justify="space-between" align="center" bgColor={'ButtonFace'} p="5px 5px" mx={"170px"}>
                <Heading color={'green.500'}>Menu</Heading>

                {/* View All Button */}
                <Button colorScheme="teal" variant="solid" size="md" onClick={handleNavigation}>
                    View All
                </Button>
            </Flex>

            {/* Menu Items Section */}
            <Flex p={50} w="full" alignItems="center" justifyContent='space-evenly'>
                {
                    datas.length > 0 && datas?.map((data, index) => (
                        <Box
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="400px"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative"
                            overflow="hidden"
                            transition="transform 0.3s ease"
                            _hover={{ transform: 'scale(1.1)' }}
                            key={index}
                        >
                            {data.isNew && (
                                <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                            )}

                            <Image
                                src={data.imageURL}
                                alt={`Picture of ${data.name}`}
                                roundedTop="lg"
                                height="200px"
                                width="100%"
                                objectFit="cover"
                            />

                            <Box p="6">
                                <Box display="flex" alignItems="baseline">
                                    {data.isNew && (
                                        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                            New
                                        </Badge>
                                    )}
                                </Box>
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

                                <Flex justifyContent="space-between" alignContent="center">
                                    <Rating rating={data.rating} numReviews={data.numReviews} />
                                </Flex>
                            </Box>
                        </Box>
                    ))
                }
            </Flex>
        </>
    );
}

export default Menu;
