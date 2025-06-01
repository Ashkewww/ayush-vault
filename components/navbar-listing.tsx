import { ModeToggle } from "./ui/mode-toggle";

const NavBar = () => {
    return (
        <nav className="flex align-middle text-center w-full justify-right p-4 gap-4">
            <div className="">
                This is the navbar
            </div>
            <ModeToggle></ModeToggle>
        </nav >
    );
}

export default NavBar;