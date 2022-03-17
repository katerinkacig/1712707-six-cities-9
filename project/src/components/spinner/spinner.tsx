import styles from './styles.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={styles.spinner}>
        <img src="img/spinner.gif" alt=""/>
      </div>
    </div>
  );
}

export default Spinner;
