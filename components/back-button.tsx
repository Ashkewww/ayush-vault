'use client'

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

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
            >
                {"<"}
            </Button>
        </div>
    );
}

export default BackButton;