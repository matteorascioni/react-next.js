import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/Meetups/MeetupList/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// The getServerSideProps code run in the server not in the client
// The page is really pre-generated for every incoming request so is usefull if the app
// a large quantity of data frequently
// export const getServerSideProps = (context) => {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

// Static site generation throught props
export const getStaticProps = async () => {
  // connect to your database with your own mongodb's string
  const mongoClientConnectionString = "";
  const client = await MongoClient.connect(mongoClientConnectionString);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // Revalidate the page at least every 10 seconds if there are fetch requests coming in for this page
    // This would replace the old pre-generated page with a new one
    // revalidate: 10,
    // 3600 for an hour

    // This page will occasionally pre-generated on the server after deployment
    // reavalidate: 1,
  };
};

export default HomePage;
