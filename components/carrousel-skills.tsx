'use client'
import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGraphql, SiPrisma } from "react-icons/si";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const skills = [
    "React.js",
    "ReactNative.js",
    "Next.js",
    "TailwindCss",
    "Node.js",
    "Prisma",
    "TypeScript",
    "Graphql",
    "Firebase",
    "Angular.js",
]

export function CarouselSkills() {
    return (
        <Carousel
            plugins={[
                AutoScroll({
                    speed: 0.5,
                    startDelay: 0,
                    stopOnInteraction: false
                })
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <h2 className="font-semibold z-50 mb-5">Principais habilidades</h2>
            <div className="mask-x-from-90%">
            <CarouselContent className="scroll-smooth">
                {skills.map((item, index) => (
                    <CarouselItem key={index} className="max-w-[200px] w-full  flex">
                        <div className="border border-zinc-400 text-zinc-400 text-[14px] p-2 rounded-md flex items-center justify-center gap-2 w-full">
                            {item === "React.js" && <>
                                <FaReact />
                                ReactJs
                            </>
                            }
                            {item === "ReactNative.js" && <>
                                <FaReact />
                                ReactNativeJs
                            </>}
                            {item === "Next.js" && <>
                                <RiNextjsFill />
                                NextJs
                            </>}
                            {item === "TailwindCss" && <>
                                <RiTailwindCssFill />
                                TailwindCss
                            </>}
                            {item === "Node.js" && <>
                                <FaNodeJs />
                                NodeJs
                            </>}
                            {item === "Prisma" && <>
                                <SiPrisma />
                                Prisma
                            </>}
                            {item === "TypeScript" && <>
                                <BiLogoTypescript />
                                TypeScript
                            </>}
                            {item === "Graphql" && <>
                                <SiGraphql />
                                Graphql
                            </>}
                            {item === "Firebase" && <>
                                <RiFirebaseFill />
                                Firebase
                            </>}
                            {item === "Angular.js" && <>
                                <FaAngular />
                                AngularJs
                            </>}
                        </div>
                        <div className="w-4 max-sm:w-2 h-full" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            </div>
        </Carousel>
    )
}
