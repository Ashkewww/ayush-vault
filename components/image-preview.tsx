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
        <div className="relative border transition-all hover:scale-105 hover:shadow  w-full h-64">
            <Image
                src={props.signedUrl}
                alt={props.name}
                className="cursor-pointer w-full"
                onClick={onClickHandler}
                onMouseEnter={onHoverHandler}
                fill={true}
                objectFit="contain"
            />
        </div>
    );
}

export default ImagePreview;