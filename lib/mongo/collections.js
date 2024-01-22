import clientPromise from ".";

let client
let db
let connect

async function init() {
    if (db) return;

    try {
        client = await clientPromise;
        db = await client.db();
        connect = await db.collection('collection');
    } catch (error) {
        throw new Error(`Failed to connect to collection`)
    }
}

;(async() => {
    await init();
})()

export async function getCollections() {
    try {
        if(!connect) await init();
        const result = await connect
            .find({})
            .limit(20)
            .map(item => ({ ...item, _id: item._id.toString() }))
            .toArray();

        return { collection: result };
    } catch (error) {
        return { error: `Failed to fetch collection` };
    }
}
