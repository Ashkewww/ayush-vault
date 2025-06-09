'use client'
import Image from "next/image";
import { SignedImage } from "@/lib/types";
import { Suspense, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { storeImageBlob, deleteImageBlob, getImageDB } from "@/lib/cacheHelper";
import './listing.css'


const ImagePreview = (props: SignedImage) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [imgUrl, setImgUrl] = useState<string>(props.signedUrl);
    const router = useRouter();

    useEffect(() => {
        const asyncFuntion = async () => {
            const cacheKey = `cached-${props.name}`;
            const db = await getImageDB();
            const cacheBlob = await db.get('images', cacheKey)
            if (!cacheBlob) {
                console.warn("Cache Miss!")
                setImgUrl(props.signedUrl)
                setLoading(false)
                const response = await fetch(props.signedUrl)
                const imageBlob = await response.blob()
                await storeImageBlob(cacheKey, imageBlob);
            } else {
                console.log("Cache Hit!")
                const tempURL = URL.createObjectURL(cacheBlob)
                setImgUrl(tempURL)
                setLoading(false)
            }
        }
        asyncFuntion();
    }, [])



    const onHoverHandler = async () => {
        //console.log(`The page for ${props.name} has been prefetched`)
        router.prefetch(`/image/${props.name}`);
    }
    const onClickHandler = () => {
        router.push(`/image/${props.name}`)
    }

    return (<>
        {!loading ? <div className="flex border transition-all hover:scale-105 hover:shadow w-full align-middle justify-center max-h-full">
            <img
                src={imgUrl}
                alt={props.name}
                className="cursor-pointer w-full"
                onClick={onClickHandler}
                onMouseEnter={onHoverHandler}
                height={512}
                width={512}
            />
        </div> :
            <div className="flex justify-center align-middle w-full h-50 items-center">
                <div className="loader" />
            </div>

        }
    </>

    );
}

export default ImagePreview;