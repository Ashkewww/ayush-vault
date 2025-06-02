type loaderType = {
    src: string,
    width: string,
    quality: string
}

export default function supabaseLoader(loaderType: loaderType) {
  return `${loaderType.src}&width=${loaderType.width}&quality=${loaderType.quality || 20}`
}