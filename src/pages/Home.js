import { Form } from 'components/Form/Form';
import { Modal } from 'components/Modal/Modal';
import { WordList } from 'components/WordList/WordList';
import React from 'react';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Modal>
        <Form />
      </Modal>
      <WordList />
    </>
  );
};
