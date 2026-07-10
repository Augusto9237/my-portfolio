'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import clsx from "clsx";
import RightMenu from "./right-menu";

interface HeaderProps {
    hash: string;
}


export function Header({ hash }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed left-0 right-0 top-0 z-10 flex h-[70px] w-full items-center justify-center px-4 transition-all duration-300 ease-out max-xl:px-5">
            <div className={clsx(
                "mx-auto flex w-full max-w-screen-lg items-center justify-between transition-all duration-300 ease-out",
                isScrolled && "mt-3 rounded-full border  border-border/60 bg-background/50 p-4 max-sm:p-3 shadow-lg backdrop-blur-xl"
            )}>
                <h2 className="flex items-center gap-1 text-lg font-extrabold uppercase">
                    <AiFillCode className="fill-primary" size={20} />
                    <span className="mt-[2px]">
                        Augusto Sousa
                    </span>
                </h2>
                <Link href="#home" className={clsx("max-md:hidden", hash === 'home' ? "text-primary" : "hover:text-foreground")}>
                    Home
                </Link>
                <Link href="#projects" className={clsx("max-md:hidden", hash === 'projects' ? "text-primary" : "hover:text-foreground")}>
                    Projetos
                </Link>
                <Link href="#about" className={clsx("max-md:hidden", hash === 'about' ? "text-primary" : "hover:text-foreground")}>
                    Sobre mim
                </Link>
                <Link href="#contact" className={clsx("max-md:hidden", hash === 'contact' ? "text-primary" : "hover:text-foreground")}>
                    Contato
                </Link>

                <div className="flex gap-4 max-sm:hidden">
                    <Link href="https://www.linkedin.com/in/-augusto-sousaa" target="_blank">
                        <BsLinkedin />
                    </Link>

                    <Link href="https://github.com/Augusto9237" target="_blank">
                        <BsGithub />
                    </Link>
                    <BsInstagram />
                </div>
                <div className="md:hidden">
                    <RightMenu hash={hash} />
                </div>
            </div>
        </header>
    )
}
