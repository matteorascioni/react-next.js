import { MongoClient } from 'mongodb';

const handler = async (req, res) => { 
    // connect to your database with your own mongodb's string
    const mongoClientConnectionString = '';

    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(mongoClientConnectionString);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log('[API_MEETUP_RESULT]', result);

        client.close();
        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;