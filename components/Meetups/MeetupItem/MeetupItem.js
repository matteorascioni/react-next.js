import {useRouter} from 'next/router';
import Card from "../../Card/Card";
import Button from '../../Button/Button';

import styles from "./MeetupItem.module.css";

const MeetupItem = ({ image, address, title, id }) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/' + id);
  }

  return (
    <li className={styles.container}>
      <Card>
        {/* Image */}
        <div className={styles.imageContainer}>
          {/* Image */}
          <img className={styles.image} src={image} alt={title} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Title */}
          <h3 className={styles.title}>{title}</h3>
          <address>{address}</address>
        </div>

        {/* Button Container */}
        <div className={styles.buttonContainer}>
          {/* Button */}
          <Button onClick={showDetailsHandler} className={styles.button}>Show Details</Button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
