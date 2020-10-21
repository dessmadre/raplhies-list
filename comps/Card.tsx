import styles from '../styles/main.module.scss';

const Card = props => {
  return (
    <div className={[styles.card].join(' ')}>
      <img className={styles.card__img} src={props.imglink} alt='' />
      <div className={styles.card__details}>
        <h3 className={styles.heading__3}>{props.title}</h3>
        <h2 className={styles.heading__2}>${props.price}</h2>
      </div>
      <a className={styles.card__btn} href={props.link}>
        View
      </a>
    </div>
  );
};

export default Card;
