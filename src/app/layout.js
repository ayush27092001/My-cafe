// app/layout.js
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../chakra-config"; // Theme ko import karo
import Navbar from "@/components/navbar";
import './globals.css'
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ChakraProvider theme={theme}>
          <Navbar/>
          
          {/* Dynamic content will take the remaining space */}
          <main style={{ flex: 1 }}>
            {children}
          </main>
          
          <Footer/> {/* Footer at the bottom */}
        </ChakraProvider>
      </body>
    </html>
  );
}
