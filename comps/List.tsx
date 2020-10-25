import Card from './Card';
import styles from '../styles/main.module.scss';
import { motion } from 'framer-motion';

const List = ({ filteredItems, checkCuadro, checkImagen }) => {
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
  const cuadro = checkCuadro.map((item, i) => {
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
  const imagen = checkImagen.map((item, i) => {
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

  return (
    <>
      <div className={styles.container}>{items}</div>
      <div className={styles.container}>{cuadro}</div>
      <div className={styles.container}>{imagen}</div>
    </>
  );
};

export default List;
