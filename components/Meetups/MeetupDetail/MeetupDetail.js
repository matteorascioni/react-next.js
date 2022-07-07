import styles from "./MeetupDetail.module.css";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <address className={styles.address}>{address}</address>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default MeetupDetail;
