import { WordListItem } from 'components/WordListItem/WordListItem';
import React from 'react';
import { useSelector } from 'react-redux';

export const WordList = () => {
 const words =  useSelector(state => state.words)
  return (
    <div>
      <ul>
        {
          words.map((item, index) =>  <WordListItem {...item} key={item.id} number = {index + 1}/> )
        }
      
      </ul>
    </div>
  );
};
