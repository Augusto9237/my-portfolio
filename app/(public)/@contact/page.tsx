import { FormContactMe } from "@/components/form-contact-me";
import { Mail, MapPinned } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col w-full max-w-screen-lg mx-auto max-xl:px-5  max-md:mt-5 overflow-x-hidden">
            <div className="flex max-md:flex-col w-full max-sm:mt-20 mt-28">
                <div className="w-full h-full flex flex-col max-md:mb-5">
                    <h1 className="font-bold max-md:text-2xl text-3xl uppercase">Entre em contato</h1>

                    <div className="flex flex-col max-md:hidden">
                        <p className="text-muted-foreground text-justify flex gap-2">
                            <Mail size={18} className="mt-1" />
                            augusto.souza8330@gmail.com
                        </p>

                        <p className="text-muted-foreground text-justify flex gap-2">
                            <BsWhatsapp size={18} className="mt-1" />
                            (91) 98330-2732
                        </p>

                        <p className="text-muted-foreground text-justify flex gap-2">
                            <MapPinned size={18} />
                            Belém, Pará, Brasil
                        </p>
                    </div>
                </div>

                <div className="w-full max-md:mb-8">
                    <FormContactMe />
                </div>

                <div className="flex flex-col md:hidden">
                    <p className="text-zinc-400 text-justify flex gap-2">
                        <Mail size={18} className="mt-1" />
                        augusto.souza8330@gmail.com
                    </p>

                    <p className="text-zinc-400 text-justify flex gap-2">
                        <BsWhatsapp size={18} className="mt-1" />
                        (91) 98330-2732
                    </p>

                    <p className="text-zinc-400 text-justify flex gap-2">
                        <MapPinned size={18} />
                        Belém, Pará, Brasil
                    </p>
                </div>
            </div>
        </section>
    )
}