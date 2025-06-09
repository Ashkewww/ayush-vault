'use client'
import { SignedImage } from "@/lib/types";
import ImagePreview from "./image-preview";
import { getSignedImages } from "@/app/(listing)/actions/getSignedImages";
import { useEffect, useState } from "react";
import './listing.css'

const ImageList = (props: { page: number }) => {
    const [images, setImages] = useState<SignedImage[]>([]);
    async function asyncFunction() {
        setImages(await getSignedImages(props.page));
    }

    useEffect(() => {
        asyncFunction();
    }, [props.page])



    return (<>
        {images.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 w-full xl:w-3/4 border">
                {images?.map((img) => (
                    <div key={img.name} className="">
                        <ImagePreview {...img} />
                    </div>
                ))}
            </div> :
            <div className="">
                <div className="loader"></div>
            </div>
        }
    </>

    );
}

export default ImageList;