import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/wordSlise';

export const Form = () => {
    const dispatch = useDispatch()
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const word = {
            id: nanoid(),
            engWord: e.currentTarget.eng.value,
            ukrWord: e.currentTarget.ukr.value,
            checked: false
        }
        dispatch(addWord(word))
        e.currentTarget.reset()
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" name="ukr" placeholder="English" />
      <input type="text" name="eng" placeholder="Ukrainian" />
      <button type='submit'>Add word</button>
    </form>
  );
};
