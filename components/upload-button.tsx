'use client'
import { ArrowUpToLine } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const UploadButton = (props: any) => {
    const router = useRouter()
    const uploadPage = () => {
        router.push("/upload")
    }
    return (
        <div>
            <Button variant="outline" size="icon" className=" scale-100 md:scale-150 cursor-pointer" onClick={uploadPage}>
                <ArrowUpToLine className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}

export default UploadButton;