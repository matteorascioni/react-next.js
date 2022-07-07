import { useRef } from "react";
import Card from "../../Card/Card";
import Button from "../../Button/Button";

import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={styles.container} onSubmit={submitHandler}>
        {/* Title */}
        <div className={styles.control}>
          <label className={styles.label} htmlFor="title">
            Meetup Title
          </label>
          <input
            className={styles.input}
            type="text"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>

        {/* Image */}
        <div className={styles.control}>
          <label className={styles.label} htmlFor="image">
            Meetup Image
          </label>
          <input
            className={styles.input}
            type="url"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>

        {/* Address */}
        <div className={styles.control}>
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <input
            className={styles.input}
            type="text"
            required
            id="address"
            ref={addressInputRef}
          />
        </div>

        {/* Textarea */}
        <div className={styles.control}>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.textarea}
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        {/* Button Container */}
        <div className={styles.buttonContainer}>
          {/* Button */}
          <Button className={styles.button}>Add Meetup</Button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
