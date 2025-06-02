import Image from "next/image";

export default function BigImage(props: any) {

    console.log(props.url)
    return (
        <div className="flex px-4 align-middle justify-center relative w-5/6 " >
            <Image src={props.url} alt={"url"} fill={true} objectFit="contain" />
        </div>
    )
}