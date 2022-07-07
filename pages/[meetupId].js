import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../components/Meetups/MeetupDetail/MeetupDetail";

const MeetupDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

//  Next.js will statically pre-render all the paths specified by getStaticPaths throught the ids in this case.
export const getStaticPaths = async () => {
  // connect to your database with your own mongodb's string
  const mongoClientConnectionString = "";
  const client = await MongoClient.connect(mongoClientConnectionString);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  // connect to your database with your own mongodb's string
  const mongoClientConnectionString = "";
  const client = await MongoClient.connect(mongoClientConnectionString);

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
      },
    },
  };
};

export default MeetupDetailsPage;
