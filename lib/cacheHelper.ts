import { openDB } from "idb";


export const getImageDB = async () => {
    return openDB('cached-images', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('images')) {
                db.createObjectStore('images');
            }
        }
    });
};


export const storeImageBlob = async (key: string, blob: Blob) => {
    const db = await getImageDB();
    await db.put('images', blob, key);
}

export const deleteImageBlob = async (key: string) => {
    const db = await getImageDB();
    await db.delete('image', key);
}