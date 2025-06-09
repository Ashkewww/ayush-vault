import { supabase } from "@/lib/supabaseClient"
import BigImage from "@/components/big-picture-mode"
import { Button } from "@/components/ui/button"
import BackButton from "@/components/back-button"
import InteractiveZoomImage from "@/components/interactive-zoom-button"


export default async function ImageView({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const { data, error } = await supabase.storage.from('photos').createSignedUrl(id, 60 * 60)
    const response = await supabase.storage.from('photos').info(id)
    if (!response.error) {
        console.log(response.data)
    } else {
        console.error(response.error)
    }
    if (error) {
        return (
            <div className="w-full p-4 align-middle justify-center text-center">
                <p className="">
                    This image does not exist.
                </p>

                <br />
                <code>
                    {error.message}
                </code>
            </div>
        )
    }
    return (
        <main className="flex-col w-full items-center max-h-screen h-screen">
            <nav id="navigation" className="border flex justify-between align-middle items-center w-full text-center h-1/12 p-4">
                <BackButton />
                <h1 className="text-xl">
                    {id.replaceAll("%20", " ")}
                </h1>
                <div>

                </div>

            </nav>
            <div className="flex justify-center align-middle items-center h-11/12 border ">
                <InteractiveZoomImage >
                    <BigImage url={data.signedUrl} id={id} />
                </InteractiveZoomImage>
            </div>


        </main>
    )
}