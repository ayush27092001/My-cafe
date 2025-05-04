'use client'

import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// const images = [
//     "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
//     "https://media.istockphoto.com/id/1475880027/photo/young-woman-laughing-while-talking-with-her-friends-sitting-at-a-table.jpg?s=2048x2048&w=is&k=20&c=YMCai75usqcjBpEwym0qhb1lsp9vgp-uEkrQthq6YqA=",
//     "https://media.istockphoto.com/id/1975776233/photo/parisian-morning-delights-street-cafe-breakfast-scene-on-a-sunny-day-in-saint-germain-des.jpg?s=2048x2048&w=is&k=20&c=H4KxBnwDUemDVlqYFeDRsOzaRWZA641T_rZV4xMCwak=",
//     "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
//     "https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];

export default function Gallery() {

    let [images,setImages] = useState([])

    const getData = async () => {
        let response = await fetch('http://localhost:3000/api/gallery')
        let data = await response.json()
        setImages(data)

    }

console.log(images);

    useEffect(() => {

        getData()
    }, [])


    return (
        <Box p={5} maxW="1200px" mx="auto">
            <Heading textAlign="center" mb={10} fontSize="3xl" fontWeight="bold" letterSpacing="wide" color="teal.600">
                Our Signature Creations
            </Heading>
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={8} // Increased gap for better spacing
            >
                {images?.data?.map((image, index) => (
                    <Box
                        key={index}
                        w="100%"
                        h="400px" // Adjust height for fixed image card size
                        position="relative"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="2xl" // More prominent shadow
                        transition="all 0.3s ease-in-out"
                        _hover={{ transform: 'scale(1.05)', boxShadow: 'dark-lg' }} // Hover effect
                    >
                        {/* Image element */}
                        <Image
                            src={image} // Dynamically insert image URL
                            alt={`Signature Creation ${index + 1}`}
                            layout="fill" // Fill the entire box
                            objectFit="cover" // Ensure the image covers the box
                        />
                        <Box
                            position="absolute"
                            bottom="0"
                            w="100%"
                            bgGradient="linear(to-t, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))"
                            color="white"
                            p={4}
                        >
                            {/* <Heading fontSize="xl">
                                Signature Creation {index + 1}
                            </Heading>
                            <Text fontSize="sm" mt={2}>
                                Enjoy the perfect blend of our signature roast topped with velvety foam.
                            </Text> */}
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}
