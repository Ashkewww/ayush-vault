'use server'

import { supabase } from '@/lib/supabaseClient'
import { SignedImage } from '@/lib/types'

export const getSignedImages = async (): Promise<SignedImage[]> => {
    const { data: files, error } = await supabase.storage.from('photos').list('', {
        limit: 10,
        offset: 0,
    })

    if (error || !files) {
        console.error("Error listing files:", error)
        return []
    }

    const signedUrls = await Promise.all(
        files.map(async (file) => {
            const { data, error } = await supabase.storage.from('photos').createSignedUrl(file.name, 60 * 60)
            return data?.signedUrl ? { name: file.name, signedUrl: data.signedUrl } : null
        })
    )

    return signedUrls.filter(Boolean) as SignedImage[]
}
