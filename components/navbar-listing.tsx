import { ModeToggle } from "./ui/mode-toggle";

const NavBar = () => {
    return (
        <nav className="flex align-middle text-center w-full justify-between p-4 gap-4">
            
            <div className="text-center w-full">
                This is the navbar
            </div>
            <ModeToggle></ModeToggle>
        </nav >
    );
}

export default NavBar;