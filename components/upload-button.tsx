import { Moon, Sun, ArrowUpToLine } from "lucide-react";
import { Button } from "./ui/button";

const UploadButton = () => {
    return (
        <div>
            <Button variant="outline" size="icon" className=" scale-100 md:scale-150">
                {/* <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" /> */}
                <ArrowUpToLine className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}

export default UploadButton;