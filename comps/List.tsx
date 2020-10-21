import Card from './Card';
import styles from '../styles/main.module.scss';

const List = ({ filteredItems }) => {
  const items = filteredItems.map((item, i) => {
    return (
      <Card
        key={i}
        price={item.price}
        title={item.title}
        link={item.get_full_url}
        imglink={item.get_img_permalink_large}
      />
    );
  });

  return <div className={styles.container}>{items}</div>;
};

export default List;
