'use client'
import Image from "next/image";
import { SignedImage } from "@/lib/types";
import { Suspense } from "react";

const ImagePreview = (props: SignedImage) => {
    return (
        <div className="border border-gray-700 hover:scale-110 p-4 w-full h-fit rounded-4xl">
            <Suspense>
                <Image src={props.signedUrl} alt={props.name} className="cursor-pointer w-full h-auto rounded-3xl " width={1080} height={1080} onClick={() => console.log(props.name, " was clicked")} />
            </Suspense>
        </div>
    );
}

export default ImagePreview;