import { supabase } from '@/lib/supabaseClient'
import { Upload } from 'tus-js-client'

const projectID = process.env.NEXT_PUBLIC_SUPABASE_URL

async function uploadFile (bucketName: string, fileName: string, file: File) {
    const { data: { session } } = await supabase.auth.getSession()

    return new Promise<void>((resolve, reject) => {
        var upload = new Upload(file, {
            endpoint: `https://${projectID}.supabase.co/storage/v1/upload/resumable`,
            retryDelays: [0, 3000, 5000, 10000, 20000],
            headers: {
                authorization: `Bearer ${session?.access_token}`,
                'x-upsert': 'true',
            },
            uploadDataDuringCreation: true,
            removeFingerprintOnSuccess: true,
            metadata: {
                bucketName: bucketName,
                objectName: fileName,
                contentType: "image/png",
                cacheControl: '3600',
            },
            chunkSize: 6 * 1024 * 1024,
            onError: function (error) {
                console.log('Failed because: ' + error)
                reject(error)
            },
            onProgress: function (bytesUploaded, bytesTotal) {
                var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
                console.log(bytesUploaded, bytesTotal, percentage + '%')
            },
            onSuccess: function () {
                console.log('Download %s from %s', fileName, upload.url)
                resolve()
            },
            
        })

        return upload.findPreviousUploads().then(function (previousUploads) {
            if (previousUploads.length) {
                upload.resumeFromPreviousUpload(previousUploads[0])
            }

            upload.start()
        })
    })
}

export default function UploadPage() {
    
    return (
        <main className="w-full flex justify-center">
            <div>
                This is the upload page
            </div>
        </main>
    )
}