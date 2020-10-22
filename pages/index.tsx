import { useState } from 'react';
import { offerUp } from '../data/data';
import styles from '../styles/main.module.scss';
import List from '../comps/List';
import SearchBox from '../comps/SearchBox';
import Head from 'next/head';

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
      </nav>

      <main>
        <List filteredItems={filteredItems} />
      </main>
    </>
  );
};

export default Home;
