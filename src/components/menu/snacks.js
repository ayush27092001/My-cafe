'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Container,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Snacks() {
  const bg = useColorModeValue('white', 'gray.800');  // Dynamic background for light/dark mode

  return (
    <Container maxW="lg" p={6} bg={bg} borderRadius="lg" boxShadow="lg">
        <Heading mb={4} textAlign="left" fontSize="2xl">Snacks</Heading>
        <Accordion allowMultiple width="100%">
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">White Sauce Pasta</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A creamy and delicious white sauce pasta, perfect for snack lovers.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹150</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Momos</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Delicious steamed momos with a variety of fillings, perfect for evening snacks.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹120</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Paneer/Chaap</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Grilled paneer or chaap, a perfect delight for vegetarians.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹180</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Sandwich</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A healthy and delicious sandwich, perfect for gym lovers.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹100</Text>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Cheesy Fries</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Crispy fries topped with melted cheese, a true comfort snack.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹130</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Noodles</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Spicy and flavorful noodles, a treat for foodies.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹140</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Burger</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A juicy burger packed with flavor, perfect for any snack time.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹160</Text>

            </AccordionPanel>
          </AccordionItem>

        </Accordion>
    </Container>
  )
}
