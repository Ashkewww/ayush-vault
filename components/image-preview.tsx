'use client'
import Image from "next/image";
import { SignedImage } from "@/lib/types";
import { Suspense } from "react";
import { redirect, useRouter } from "next/navigation";


const ImagePreview = (props: SignedImage) => {

    const router = useRouter();

    const onHoverHandler = () => {
        router.prefetch(`/${props.name}`)
        //console.log(`The page for ${props.name} has been prefetched`)
    }
    const onClickHandler = () => {
        router.push(`/${props.name}`)
    }

    return (
        <div className="border border-gray-700 hover:scale-110 p-4 w-full h-fit rounded-4xl">
            <Image
                src={props.signedUrl}
                alt={props.name}
                className="cursor-pointer w-full h-auto rounded-3xl "
                width={1080}
                height={1080}
                onClick={onClickHandler}
                onMouseEnter={onHoverHandler}
            />
        </div>
    );
}

export default ImagePreview;