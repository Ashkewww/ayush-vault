import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

const NavBar = () => {
    return (
        <section className="w-full flex justify-center">
            <div className="w-full xl:w-3/4 flex items-center justify-between mt-8 md:mt-16 mb-12 p-8">
                <Link href="/">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight hover:text-gray-400 ">
                        Ayush's Archive
                    </h1>
                </Link>
                <nav className="flex align-middle w-max justify-between gap-4 ">
                    <ModeToggle />
                </nav >

            </div>

        </section>

    );
}

export default NavBar;