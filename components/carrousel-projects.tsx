import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "./ui/aspect-ratio"

interface CarouselProps {
    images: string[]
}

export function CarouselProject({ images }: CarouselProps) {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {images.map((img, index) => (
                    <CarouselItem key={index}>
                        <AspectRatio ratio={16 / 9}>
                            {/* <Image src={img} height={0} width={0} className="w-full h-full max-lg:h-auto object-fill" sizes="100vw" alt="" /> */}
                        </AspectRatio>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent hover:bg-transparent text-white/80 hover:text-white border-none -left-8" />
            <CarouselNext className="bg-transparent hover:bg-transparent text-white/80 hover:text-white border-none -right-8" />
        </Carousel>
    )
}
