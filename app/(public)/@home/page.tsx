import ButtonDownloadResume from "@/components/button-download-resume";
import { CarouselSkills } from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import {ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <section id="home" className="min-h-[100dvh] relative max-h-screen overflow-hidden flex flex-col w-full max-w-screen-lg mx-auto max-xl:px-5 max-md:mt-5 bg-radial-[at_50%_75%] from-primary/10 via-background to-transparent to-90%">
            <main className="flex max-md:flex-col max-md:gap-0 md:gap-12 w-full flex-1 items-center justify-center">
                <div className="max-sm:pt-14 max-md:mb-5 w-full flex flex-col">
                    <div className="flex flex-col">
                        <span className="">Olá! Meu nome é <span className="font-bold">Augusto Sousa</span> e eu sou</span>
                        <h1 className="max-md:text-2xl text-3xl font-bold uppercase mb-2">Desenvolverdor Full Stack</h1>
                    </div>
                    <p className="text-muted-foreground mb-5 text-justify">
                        Unindo estética e performance: do front-end ao back-end, desenvolvo soluções integradas que transformam ideias em experiências completas.
                    </p>
                    <div className="flex items-center max-sm:grid max-sm:grid-cols-2 gap-5 mt-5 w-full">
                        <Link href="#projects" className="max-md:w-full">
                            <Button className="w-full gap-1 uppercase">
                                <div className="mt-[2px]">
                                    Projetos
                                </div>
                                <ChevronRight size={18} />
                            </Button>
                        </Link>
                        <ButtonDownloadResume />
                    </div>

                </div>
                <div className="w-full flex justify-center overflow-hidden max-md:max-h-[600px] max-sm:h-auto h-screen sm:pt-20">
                    <Image src="/perfil.png" alt="avatar" width={0} height={0} sizes='100vw' className="rounded-lg w-full object-cover max-sm:object-contain flex-1 mix-blend-lighten rounded-2xl mask-x-from-85% opacity-75" />
                </div>
            </main>

            <footer className="max-w-screen-lg w-full mx-auto space-y-4 flex flex-col justify-end pb-10 h-64 absolute right-0 left-0 bottom-0 bg-gradient-to-t from-background to-trasparent max-sm:px-5">
                <CarouselSkills />
            </footer>
        </section>
    )
}