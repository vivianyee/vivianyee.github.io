
import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let guest = await db.collection("guestlist").insertOne(bodyObject);
      res.json(guest);
      break;
    case "GET":
      const allGuests = await db.collection("guestlist").find({}).toArray();
      res.json({ status: 200, data: allGuests });
      break;
  }
}