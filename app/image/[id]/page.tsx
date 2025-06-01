



export default async function ImageView({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <div>
            This is the id {id}
        </div>
    )
}