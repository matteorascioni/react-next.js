import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../components/Meetups/NewMeetupForm/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const path = "/api/new-meetup";

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log('[NEW_MEETUP_PAGE_RESULT]', data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add new meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
