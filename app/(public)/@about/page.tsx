import ButtonDownloadResume from "@/components/button-download-resume";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function About() {
    return (
        <section id="about" className="min-h-screen relative flex flex-col w-full max-w-screen-lg  mx-auto max-xl:px-5  max-md:mt-5 overflow-x-hidden">
            <h1 className="font-bold max-md:text-2xl text-3xl uppercase max-sm:mt-20 mt-28 mb-5">Sobre mim</h1>
            <div className="flex gap-8 max-md:flex-col w-full h-full relative">
                <div className="w-full flex flex-col h-full">
                    <h2 className="font-semibold">
                        Olá! Meu nome é Augusto Sousa, sou desenvolvedor Full Stack
                    </h2>

                    <p className="text-muted-foreground text-justify mb-8 max-md:mb-0">
                        Sou facisnado por criar experiências de usuário elegantes e intuitivas, com foco em front-end e mobile. Também domino o back-end, o que me permite entregar soluções completas e integradas. Sempre buscando inovação, estou pronto para novos desafios que unam design e funcionalidade
                    </p>
                    <div className="flex gap-4 items-center max-md:hidden">
                        <ButtonDownloadResume />

                        <Link href="https://www.linkedin.com/in/-augusto-sousaa" target="_blank" className="max-md:hidden">
                            <Button size="icon" variant="ghost">
                                <BsLinkedin />
                            </Button>
                        </Link>

                        <Link href="https://github.com/Augusto9237" target="_blank" className="max-md:hidden">
                            <Button size="icon" variant="ghost">
                                <BsGithub />
                            </Button>
                        </Link>

                        <Button size="icon" variant="ghost" className="max-md:hidden">
                            <BsInstagram />
                        </Button>

                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <h2 className="font-semibold">Formação</h2>
                    <p className="text-muted-foreground text-justify">
                        Graduado em Sistemas de Informação pela Universidade Mauricio de Nassau (UNINASSAU) em 2021.
                    </p>
                    <Separator className="bg-zinc-700 my-4" />
                    <h2 className="font-semibold">Habilidades</h2>
                    <p className="text-muted-foreground text-justify">
                        ReactJs, React Native, NextJs, AngularJs, NodeJs, NestJs, JavaScript, TypeScript, Graphql, PHP, Prisma, Firebase, Docker, SQL, MySQL, MongoDb, SQlite Github, HTML, CSS, TailwindCss, StyledComponents, CSS-in-JS, Figma e Photoshop.
                    </p>
                </div>

                <div className="md:hidden w-full flex flex-col max-md:mb-8">
                    <ButtonDownloadResume />
                </div>
            </div>

        </section>
    )
}