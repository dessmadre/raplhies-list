import styles from '../styles/main.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = props => {
  return (
    <motion.div
      className={[styles.card].join(' ')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        className={styles.card__img}
        src={props.imglink}
        alt=''
        width={500}
        height={500}
      />
      <div className={styles.card__details}>
        <h3 className={styles.heading__3}>{props.title}</h3>
        <h2 className={styles.heading__2}>${props.price}</h2>
      </div>
      <a className={styles.card__btn} href={props.link}>
        View
      </a>
    </motion.div>
  );
};

export default Card;
