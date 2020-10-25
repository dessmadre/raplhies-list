import { useState } from 'react';
import { offerUp } from '../data/data';
import styles from '../styles/main.module.scss';
import List from '../comps/List';
import SearchBox from '../comps/SearchBox';
import Head from 'next/head';
import Checkbox from '../comps/Checkbox';

const Home = () => {
  const [items, setItems] = useState({
    catalog: offerUp[0].data.items,
  });

  const [filters, setFilters] = useState({
    searchInput: '',
  });

  const { catalog } = items;

  const { searchInput } = filters;

  const handleInput = e => {
    // console.log(e.target.value);

    setFilters({ ...filters, searchInput: e.target.value });
  };

  const checkCuadro = catalog.filter(item => {
    return item.title.toLowerCase().includes('cuadro');
  });

  const checkImagen = catalog.filter(item => {
    return item.title.toLowerCase().includes('cuadro');
  });

  const filteredItems = catalog.filter(item => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Ralphie's List</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={`Ralph's complete OfferUp catalog`} />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.heading__box}>
          <h1 className={styles.heading__1}>Ralphie's List</h1>
        </div>
        <SearchBox handleInput={handleInput} />
        <Checkbox handleInput={handleInput} />
      </nav>

      <main>
        <List
          filteredItems={filteredItems}
          checkImagen={checkImagen}
          checkCuadro={checkCuadro}
        />
      </main>
    </>
  );
};

export default Home;
