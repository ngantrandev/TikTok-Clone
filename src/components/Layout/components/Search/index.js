import React, { useState, useEffect, useRef } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as WrapperPopper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (searchInputValue.trim().length === 0) {
      setSearchResult([]);
      return;
    }

    setIsSearching(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchInputValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setIsSearching(false);

        setSearchResult(res.data);
      });
  }, [searchInputValue]);

  const handleClickOutside = () => {
    console.log('click outside');
    setIsFocusInput(false);
  };

  const handleClearSearch = () => {
    setSearchInputValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <TippyHeadless
      interactive
      offset={[0, 0]}
      visible={searchResult.length > 0 && isFocusInput}
      onClickOutside={handleClickOutside}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <h4 className={cx('search-title')}>Tài khoản</h4>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </WrapperPopper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchInputValue}
          type="text"
          placeholder="Tìm kiếm tài khoản"
          onChange={(e) => setSearchInputValue(e.target.value)}
          onFocus={() => setIsFocusInput(true)}
        />
        {searchInputValue && !isSearching && (
          <button className={cx('clear-search')} onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {isSearching && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
