import { useState, useEffect } from 'react';
import { offerUp } from '../data/data';
import styles from '../styles/main.module.scss';
import List from '../comps/List';
import SearchBox from '../comps/SearchBox';
import Head from 'next/head';
import Checkbox from '../comps/Checkbox';
import PaginateItems from '../comps/PaginateItems';

// catalog: offerUp[0].data.items,

const Home = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [filters, setFilters] = useState({
    searchInput: '',
  });

  useEffect(() => {
    setItems(offerUp[0].data.items);
  }, []);

  const { searchInput } = filters;

  const handleInput = e => {
    // console.log(e.target.value);

    setFilters({ ...filters, searchInput: e.target.value });
  };

  // Get current Posts
  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;

  // Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Filter Items
  const filterItems = items
    .filter(item => {
      return item.title.toLowerCase().includes(searchInput.toLowerCase());
    })
    .slice(IndexOfFirstItem, IndexOfLastItem);
  console.log(filterItems.length);

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
        <List filteredItems={filterItems} />
        <PaginateItems
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          filteredItems={filterItems.length}
          paginate={paginate}
        />
      </main>
    </>
  );
};

export default Home;
