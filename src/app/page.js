// app/page.js
"use client";

import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Menu from "@/components/home/menu";
import MiniAbout from "@/components/home/miniAbout";
import Testimonials from "@/components/home/testimonials";
import { Box } from "@chakra-ui/react";



export default function HomePage() {
  
    

    return (
        <Box>
            <Hero />
            <hr />
            <MiniAbout />
            <hr />
            <Menu />
            <hr />
            <Testimonials />
            <hr/>
            <Gallery/>
            <hr/>
            

           
        </Box>
    );
}
