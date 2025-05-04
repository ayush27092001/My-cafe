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

export default function Desserts() {
  const bg = useColorModeValue('white', 'gray.800');  // Dynamic background for light/dark mode

  return (
    <Container maxW="lg" p={6} bg={bg} borderRadius="lg" boxShadow="lg">
        <Heading mb={4} textAlign="left" fontSize="2xl">Desserts</Heading>
        <Accordion allowMultiple width="100%">
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Chocolate Brownie</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A rich, fudgy chocolate brownie that melts in your mouth.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹90</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Ice Cream Sundae</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A refreshing ice cream sundae topped with nuts and chocolate sauce.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹120</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Gulab Jamun</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Soft and syrupy gulab jamuns, a classic Indian dessert.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹80</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Cheesecake</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Creamy cheesecake with a buttery biscuit base.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹150</Text>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Fruit Salad</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A fresh and healthy fruit salad, topped with honey.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹100</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Tiramisu</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A classic Italian tiramisu, layered with coffee-soaked biscuits and mascarpone.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹180</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Pancakes</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Fluffy pancakes drizzled with maple syrup and butter.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹110</Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Additional Desserts */}
          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Churros</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Crispy churros dusted with cinnamon sugar and served with a chocolate dip.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹130</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Carrot Cake</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A moist and flavorful carrot cake with cream cheese frosting.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹140</Text>
            </AccordionPanel>
          </AccordionItem>

          {/* <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Banoffee Pie</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                A decadent banoffee pie made with fresh bananas and caramel.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹160</Text>
            </AccordionPanel>
          </AccordionItem> */}

          {/* <AccordionItem>
            <AccordionButton p={4} display="flex" justifyContent="space-between">
              <Text fontSize="md">Lava Cake</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Warm chocolate lava cake with a gooey center.
              </Text>
              <Text fontSize="md" fontWeight="bold" color="gray.600">₹170</Text>
            </AccordionPanel>
          </AccordionItem> */}

        </Accordion>
    </Container>
  )
}
