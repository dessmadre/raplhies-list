import styles from '../styles/main.module.scss';

const onSubmit = e => {
  e.preventDefault();
};

const SearchBox = props => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        onChange={props.handleInput}
        type='text'
        placeholder='Search Items...'
        autoComplete='off'
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SearchBox;
