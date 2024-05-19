import React, { useState, useEffect, useRef } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as WrapperPopper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '../../../hooks';
import * as searchService from '../../../services/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedValue = useDebounce(searchInputValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (debouncedValue.trim().length === 0) {
      setSearchResult([]);
      return;
    }

    setIsSearching(true);

    const fetchApi = async () => {
      const res = await searchService.searchUsers(debouncedValue);
      console.log(res);
      setSearchResult(res);
      setIsSearching(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClickOutside = () => {
    console.log('click outside');
    setIsFocusInput(false);
  };

  const handleClearSearch = () => {
    setSearchInputValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith(' ')) {
      return;
    }
    setSearchInputValue(inputValue);
  };

  // const handleSubmit = (e) => {
  // };

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
          onChange={handleInputChange}
          onFocus={() => setIsFocusInput(true)}
        />
        {searchInputValue && !isSearching && (
          <button className={cx('clear-search')} onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {isSearching && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
