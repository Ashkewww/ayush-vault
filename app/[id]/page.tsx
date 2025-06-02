import {supabase} from "@/lib/supabaseClient"
import BigImage from "@/components/big-picture-mode"


export default async function ImageView({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const { data, error } = await supabase.storage.from('photos').createSignedUrl( id, 60 * 60 ) 
    if ( error ) {
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
        <div>
            <nav id="navigation" className="absolute w-full text-center p-4">
                {id}
            </nav>
            <div className="w-full h-screen p-16 flex justify-center align-middle">
                <BigImage url={data.signedUrl} />
            </div>


        </div>
    )
}