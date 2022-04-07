import styles from './styles.module.css';
import React from 'react';

function ServiceError():JSX.Element{
  return (
    <div className="page__main">
      <div className={styles.content}>
        <div className={styles.text}>Service is unavailable. Try later</div>
      </div>
    </div>
  );
}

export default ServiceError;
