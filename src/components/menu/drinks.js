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

export default function Drinks() {
  const bg = useColorModeValue('white', 'gray.800');  // Dynamic background for light/dark mode

  return (
    <Container maxW="lg" p={6} bg={bg} borderRadius="lg" boxShadow="lg">
        <Heading mb={4} textAlign="left" fontSize="2xl">Drinks</Heading>
        <Accordion allowMultiple width="100%">
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Lemonade</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A refreshing glass of homemade lemonade, perfect for hot days.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹160</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Iced Coffee</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chilled and creamy iced coffee to kickstart your day.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹140</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Green Tea</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A soothing and healthy cup of green tea for relaxation.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹130</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Smoothie</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A fruity and creamy smoothie, packed with vitamins and nutrients.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹100</Text>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Mocktail</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A refreshing non-alcoholic mocktail to lift your spirits.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹180</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Milkshake</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A creamy and delicious milkshake with your favorite flavors.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹120</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Hot Chocolate</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Warm and comforting hot chocolate, perfect for chilly days.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹150</Text>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
    </Container>
  )
}
