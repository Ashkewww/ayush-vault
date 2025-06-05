
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar-listing";
import { createClient } from '@supabase/supabase-js'
import { supabase } from "@/lib/supabaseClient";
import ImagePreview from "@/components/image-preview";
import { SignedImage } from "@/lib/types";
import { getSignedImages } from "./actions/getSignedImages";


export default async function Home() {
  const images = await getSignedImages()

  return (
    <div className="text-white text-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 h-max">
        {images?.map((img) => (
          <div key={img.name} className="">
            <ImagePreview {...img} />
          </div>
        ))}
      </div>
    </div>
  );
}
