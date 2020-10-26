import Pagination from 'react-bootstrap/Pagination';
import styles from '../styles/main.module.scss';

const PaginateItems = ({ itemsPerPage, totalItems, paginate, filtered }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(filtered / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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
