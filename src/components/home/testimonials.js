'use client'



import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'

// Individual Testimonial Wrapper
const Testimonial = (props) => {
    const { children } = props
    return <Box>{children}</Box>
}

// Testimonial Content Box
const TestimonialContent = (props) => {
    const { children } = props
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

// Testimonial Heading Component
const TestimonialHeading = (props) => {
    const { children } = props
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    )
}

// Testimonial Text Component
const TestimonialText = (props) => {
    const { children } = props
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    )
}

// Testimonial Avatar Component
const TestimonialAvatar = ({ src, name, title }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

// Main Testimonials Component for export
const Testimonials = () => {
    return (
        <Box bg={useColorModeValue('white', 'gray.900')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading color={'orange'}>What Our Visitors Love About Us</Heading>
                    <Text color={"gray.600"}>Creating Experiences, One Cup at a Time"</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>A Hidden Gem!</TestimonialHeading>
                            <TestimonialText>
                                Cozy ambiance, excellent coffee, and friendly staff. This cafe is my go-to spot for relaxation and catching up.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww'
                            }
                            name={'Ayush sharma'}
                            title={'Food Blogger'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading >A Taste of Perfection!</TestimonialHeading>
                            <TestimonialText >
                                Incredible coffee and delicious food! The staff is always welcoming, and the atmosphere is perfect for unwinding.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww'
                            }
                            name={'Rishab Kumar'}
                            title={'Influencer'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                            <TestimonialText >
                                Every visit feels special. The ambiance, service, and coffee are unmatched. Truly the best cafe in town!.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxwZXJzb258ZW58MHx8MHx8fDA%3D'
                            }
                            name={'Rohan vishoriya'}
                            title={'Chef'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}

export default Testimonials
