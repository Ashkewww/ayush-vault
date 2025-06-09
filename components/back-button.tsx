'use client'

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowBigLeft } from "lucide-react";

const BackButton = () => {
    const router = useRouter()
    const onClickHandler = () => {
        router.back();
    }

    return (
        <div>
            <Button
                className="cursor-pointer"
                onClick={onClickHandler}
                size={'lg'}
            >
                <ArrowBigLeft />
            </Button>
        </div>
    );
}

export default BackButton;