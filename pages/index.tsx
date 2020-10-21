import { useState } from 'react';
import { offerUp } from '../data/data';
import styles from '../styles/main.module.scss';
import List from '../comps/List';
import SearchBox from '../comps/SearchBox';

const Home = () => {
  const [items, setItems] = useState({
    catalog: offerUp[0].data.items,
    searchInput: '',
  });

  const { catalog, searchInput } = items;

  const handleInput = e => {
    // console.log(e.target.value);

    setItems({ ...items, searchInput: e.target.value });
  };

  const filteredItems = catalog.filter(item => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <nav className={styles.nav}>
        <SearchBox handleInput={handleInput} />
      </nav>
      <main>
        <List filteredItems={filteredItems} />
      </main>
    </>
  );
};

export default Home;
