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
        {!loading ? <div className="flex px-4 align-middle justify-center relative w-5/6 " >
            <Image src={imgURL} alt={"url"} fill={true} objectFit="contain" />
        </div> :
            <div className="flex justify-center items-center align-middle">
                <div className="loader" />
            </div>
        }
    </>

    )
}