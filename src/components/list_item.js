import React from 'react';
import BoltIcon from '../assets/bolt.svg';

const ListItem = ({ text }) => (
  <div className="my-1" style={{ display: 'flex' }}>
    <BoltIcon className="inline-block h-3 fill-current text-secondary-500" style={{ height: '1rem' }}/>
    <span className="inline-block font-medium ml-2">{text}</span>
  </div>
);

export default ListItem;
