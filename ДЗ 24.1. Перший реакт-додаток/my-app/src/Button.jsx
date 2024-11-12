import React from 'react';
import './Button.scss';

export default function Button({ text, onClick }) {
  return (
    <button type="button" onClick={onClick}>{text}</button>
  )
}
