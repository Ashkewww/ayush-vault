'use client'
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import ImageList from "@/components/imageList";
import { useParams, useSearchParams } from "next/navigation";


export default function Home() {
  const params = useSearchParams()
  const page = params.get("page")
  console.log("Page No: ", page ? page : 1)
  const nextPageUrl = `/?page=${page ? Number.parseInt(page) + 1 : 2}`
  const prevPageUrl = `/?page=${page ? Number.parseInt(page) > 1 ? Number.parseInt(page) - 1 : 1 : 1}`
  return (<>
    <div className="w-full flex justify-center">
      <ImageList page={page ? Number.parseInt(page) : 1} />
    </div>
    <div className="m-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={prevPageUrl} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{page ? Number.parseInt(page) : 1}</PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext href={nextPageUrl} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  </>

  );
}
