'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageDB, deleteImageBlob, storeImageBlob } from "@/lib/cacheHelper";
import './listing.css'


export default function BigImage(props: any) {
    const [imgURL, setImgUrl] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        async function asyncFunction() {
            const cachedKey = `cached-${props.id}`
            console.log(cachedKey)
            const db = await getImageDB();
            const cacheBlob = await db.get('images', cachedKey)
            if (cacheBlob) {
                console.log("Cache hit!")
                const tempURL = URL.createObjectURL(cacheBlob);
                setImgUrl(tempURL)
                setLoading(false)
            } else {
                console.log("Cache Miss!")
                const response = await fetch(props.url)
                const blob = await response.blob()
                const localUrl = URL.createObjectURL(blob)
                setImgUrl(localUrl)
                await storeImageBlob(cachedKey, blob)
                setLoading(false)
            }
        }
        asyncFunction()
    }, [])
    return (<>
        <div className="flex items-center justify-center w-full">
            {!loading ?
                <Image
                    src={imgURL}
                    alt={"url"}
                    width={2000}
                    height={512}
                    className="object-contain max-w-full max-h-full"
                />
                :
                <div className="flex justify-center items-center align-middle">
                    <div className="loader" />
                </div>
            }
        </div >
    </>

    )
}