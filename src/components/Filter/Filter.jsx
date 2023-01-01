import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

import css from './styles.module.css';

export const Filter = () => {
  const filterName = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={css.filterContainer}>
      <label htmlFor="find">Find contacts by name</label>
      <input id="find" type="text" value={filterName} onChange={changeFilter} />
    </div>
  );
};
