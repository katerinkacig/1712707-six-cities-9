import styles from './styles.module.css';
import React from 'react';

function ServerError():JSX.Element{
  return (
    <div className="page__main">
      <div className={styles.content}>
        <div className={styles.text}>Server is not available. Try later</div>
      </div>
    </div>
  );
}

export default ServerError;
