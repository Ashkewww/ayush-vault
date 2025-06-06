
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar-listing";
import { createClient } from '@supabase/supabase-js'
import { supabase } from "@/lib/supabaseClient";
import ImagePreview from "@/components/image-preview";
import { SignedImage, BlobImage } from "@/lib/types";
import { getSignedImages } from "./actions/getSignedImages";
import BreadCrumbs from "@/components/home-page-breadcrumb";
import BadgesHome from "@/components/badges-home";


export default async function Home() {
  const images: SignedImage[] = await getSignedImages()

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 w-full xl:w-3/4 border">
        {images?.map((img) => (
          <div key={img.name} className="">
            <ImagePreview {...img} />
          </div>
        ))}
      </div>
    </div>
  );
}
