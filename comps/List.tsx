import Card from './Card';
import styles from '../styles/main.module.scss';
import { motion } from 'framer-motion';

const List = ({ filteredItems, filterItemsByDescription }) => {
  // const filtered = filteredItems.map((item, i) => {
  //   return (
  //     <Card
  //       key={i}
  //       price={item.price}
  //       title={item.title}
  //       link={item.get_full_url}
  //       imglink={item.get_img_permalink_large}
  //     />
  //   );
  // });

  return (
    <>
      {/* <div className={styles.container}>{catalog}</div> */}

      <div className={styles.container}>
        {filterItemsByDescription.map(item => (
          <Card
            key={item.id}
            price={item.price}
            title={item.title}
            link={item.get_full_url}
            imglink={item.get_img_permalink_large}
          />
        ))}
        {filteredItems.map(item => (
          <Card
            key={item.id}
            price={item.price}
            title={item.title}
            link={item.get_full_url}
            imglink={item.get_img_permalink_large}
          />
        ))}
      </div>
    </>
  );
};

export default List;
