import { useState } from 'react';
import styles from './CommonSearchBar.module.scss';
import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms/searchState';
import { pageState } from '@/recoil/atoms/pageState';

function CommonSearchBar() {
    const [search, setSearch] = useRecoilState(searchState);
    const [page, setPage] = useRecoilState(pageState);
    const [text, setText] = useState('');
    const onChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value);
        console.log(search);
        console.log(page);
    };
    const onSearch = () => {
        if (text === '') {
            //input 태그 안에 빈 값을 검색할때=> searching default value
            setSearch('Korea');
            setPage(1);
        } else {
            setSearch(text); //작성한 Input Value 값 할당
            setPage(1);
        }
    };
    const hadleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (text === '') {
                //input 태그 안에 빈 값을 검색할때=> searching default value
                setSearch('Korea');
                setPage(1);
            } else {
                setSearch(text);
                setPage(1); //작성한 Input Value 값 할당
            }
        }
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__search}>
                <input
                    type="text"
                    placeholder="찾으실 이미지를 검색하세요."
                    className={styles.searchBar__search__input}
                    value={text}
                    onChange={onChange}
                    onKeyDown={hadleKeyDown}
                />
                <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
            </div>
        </div>
    );
}

export default CommonSearchBar;
