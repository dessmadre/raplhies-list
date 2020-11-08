import styles from '../styles/main.module.scss';

const Checkbox = props => {
  return (
    <>
      <div className={styles.filter}>
        <button
          name='cuadro'
          className={styles.filter__btn}
          onClick={props.handleInput}
          value='cuadro decorativo'
        >
          {' '}
          Cuadros Decorativos
        </button>
        <button
          name='cuadro'
          className={styles.filter__btn}
          onClick={props.handleInput}
          value='cuadro religioso'
        >
          {' '}
          Cuadros Religiosos
        </button>
      </div>
    </>
  );
};

export default Checkbox;
