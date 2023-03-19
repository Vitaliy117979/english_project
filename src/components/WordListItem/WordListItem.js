import { Checkbox } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord } from 'redux/wordSlise';

export const WordListItem = ({engWord, ukrWord, checked, number, id}) => {
  const dispatch = useDispatch()
 const handleClick = () => {
  dispatch(deleteWord(id))
 }
  return (
    <li>
      <Checkbox checked={checked} color="secondary" />
      <span>{number}</span>
      <span>{ukrWord}</span>
      <span>{engWord}</span>
      <button type="button" >Edit</button>
      <button type="button" onClick={handleClick}>Delete</button>
    </li>
  );
};
