'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react'

const CafeTags = (props) => {
    const { marginTop = 0, tags } = props

    return (
        <HStack spacing={2} marginTop={marginTop}>
            {tags.map((tag) => (
                <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
                    {tag}
                </Tag>
            ))}
        </HStack>
    )
}

const CafeAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    )
}

const About = () => {
    return (
        <Container maxW={'7xl'} p="12">
            <Heading as="h1">Welcome to Our Cafe</Heading>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
                                }
                                alt="Cafe interior"
                                objectFit="contain"
                            />
                        </Box>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)',
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <CafeTags tags={['Coffee', 'Organic', 'Bistro']} />
                    <Heading marginTop="1">
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            A Taste of Passion in Every Cup
                        </Text>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                    >
                        At our cafe, we blend tradition and modernity to bring you the finest coffee
                        experience. From our locally sourced beans to our artisan pastries, each item
                        is crafted with love and passion. Come and enjoy the cozy atmosphere that has
                        made us a community favorite.
                    </Text>
                    {/* <CafeAuthor name="Cafe Founder" date={new Date('2024-01-01T19:01:27Z')} /> */}
                </Box>
            </Box>

            <Heading as="h2" marginTop="5">
                Our Menu Highlights
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    transform="scale(1.0)"
                                    src={
                                        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="Cappuccino"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Box>
                        </Box>
                        <CafeTags tags={['Coffee', 'Beverages']} marginTop={3} />
                        <Heading fontSize="xl" marginTop="2">
                            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Signature Cappuccino
                            </Text>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            Experience the perfect blend of our signature roast, topped with velvety
                            foam and a hint of cocoa for a delightful start to your day.
                        </Text>
                        {/* <CafeAuthor name="Barista Jane" date={new Date('2024-01-05T19:01:27Z')} /> */}
                    </Box>
                </WrapItem>

                <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    transform="scale(1.0)"
                                    src={
                                        'https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D'
                                    }
                                    alt="Artisan Pastry"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Box>
                        </Box>
                        <CafeTags tags={['Pastry', 'Desserts']} marginTop={3} />
                        <Heading fontSize="xl" marginTop="2">
                            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Artisan Pastries
                            </Text>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            Freshly baked every morning, our selection of croissants, muffins, and
                            tarts will leave you craving for more with each bite.
                        </Text>
                        {/* <CafeAuthor name="Chef Alex" date={new Date('2024-01-07T19:01:27Z')} /> */}
                    </Box>
                </WrapItem>
                <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    transform="scale(1.0)"
                                    src={
                                        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D'
                                    }
                                    alt="Artisan Pastry"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Box>
                        </Box>
                        <CafeTags tags={['Pastry', 'Desserts']} marginTop={3} />
                        <Heading fontSize="xl" marginTop="2">
                            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Artisan Pastries
                            </Text>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            Freshly baked every morning, our selection of croissants, muffins, and
                            tarts will leave you craving for more with each bite.
                        </Text>
                        {/* <CafeAuthor name="Chef Alex" date={new Date('2024-01-07T19:01:27Z')} /> */}
                    </Box>
                </WrapItem>
            </Wrap>

            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Heading as="h2">About Our Cafe</Heading>
                <Text as="p" fontSize="lg">
                    Located in the heart of the city, our cafe is not just a place to grab a quick
                    coffee—it's a hub for community gatherings, creative inspiration, and peaceful
                    relaxation. We pride ourselves on using locally sourced ingredients, ensuring
                    every bite and sip is filled with quality and care.
                </Text>
                <Text as="p" fontSize="lg">
                    From coffee enthusiasts to those seeking a cozy nook, we welcome everyone with
                    open arms and a warm smile. Join us to experience a truly unique blend of
                    flavors, ambiance, and hospitality.
                </Text>
            </VStack>
        </Container>
    )
}

export default About
