import Pagination from 'react-bootstrap/Pagination';
import styles from '../styles/main.module.scss';

const PaginateItems = ({
  itemsPerPage,
  filteredItems,
  totalItems,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(Math.ceil(Math.ceil(totalItems / filteredItems) / itemsPerPage));

  return (
    <nav className={styles.pagination}>
      <Pagination className={styles.pagination__box} size='lg'>
        {pageNumbers.map(number => (
          <Pagination.Item onClick={() => paginate(number)} key={number}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default PaginateItems;
