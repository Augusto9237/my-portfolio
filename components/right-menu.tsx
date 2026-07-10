'use client'

import { Menu } from "lucide-react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { Button } from "./ui/button";
import clsx from "clsx";
import { IoLogoWhatsapp } from "react-icons/io";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface RightMenuProps {
    hash: string;
}


export default function RightMenu({ hash }: RightMenuProps) {
    return (
        <Sheet>
            <SheetTrigger>
                <Button size='icon' variant='ghost'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="py-5">
                <aside className="flex flex-col items-center justify-between h-full w-full">
                    <div className="flex flex-col gap-4">
                        <Link href="#home" className={clsx("md:hidden", hash === 'home' ? "text-primary" : "hover:text-forenground")}>
                            Home
                        </Link>
                        <Link href="#projects" className={clsx("md:hidden", hash === 'projects' ? "text-primary" : "hover:text-forenground")}>
                            Projetos
                        </Link>
                        <Link href="#about" className={clsx("md:hidden", hash === 'about' ? "text-primary" : "hover:text-forenground")}>
                            Sobre mim
                        </Link>
                        <Link href="#contact" className={clsx("md:hidden", hash === 'contact' ? "text-primary" : "hover:text-forenground")}>
                            Contato
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <Link href="https://api.whatsapp.com/message/5GZHRZGRNMOGI1?autoload=1&app_absent=0" target="_blank" className="flex gap-2 items-center text-green-500">
                            <IoLogoWhatsapp size={18} className="fill-green-600 stroke-slate-50" />
                            <span>Falar comigo no WhatsApp</span>
                        </Link>

                        <div className="flex gap-4">
                            <BsLinkedin />
                            <BsGithub />
                            <BsInstagram />
                        </div>
                    </div>
                </aside>
            </SheetContent>
        </Sheet>

    )
}