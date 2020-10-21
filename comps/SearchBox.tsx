import styles from '../styles/main.module.scss';

const SearchBox = props => {
  return (
    <nav>
      <input onChange={props.handleInput} type='text' />
    </nav>
  );
};

export default SearchBox;
