import { useNavigate } from 'react-router-dom';
import styles from './CommonHeader.module.scss';
import logo from '@assets/images/image-logo.png';

function CommonHeader() {
    const navigate = useNavigate();

    //북마크 페이지로 이동
    const moveToPage = (filter: string) => {
        if (filter === 'main') navigate('/React_PhotoSplash/');
        if (filter === 'bookmark') navigate('/React_PhotoSplash/bookmark');
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox} onClick={() => moveToPage('main')}>
                <img src={logo} alt="" className={styles.header__logoBox__logo} />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>victory | victory.com</span>
            </div>
        </header>
    );
}

export default CommonHeader;
