import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

function NonFound():JSX.Element{
  return (
    <>
      <Header/>
      <div className="page__main">
        <div className={styles.content}>
          <div className={styles.code}>404</div>
          <div className={styles.text}>К сожалению, запрашиваемая Вами страница не найдена...</div>
          <div className={styles.footer}>
            <Link to='/' className='form__submit button'>На главную</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default NonFound;
