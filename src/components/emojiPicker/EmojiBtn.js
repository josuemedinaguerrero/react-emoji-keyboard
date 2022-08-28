
import React from 'react';

import styles from './EmojiPicker.module.scss';

const EmojiBtn = ({ emoji, onClick }) => {

  const handleClick = () => {
    onClick( emoji );
  }

  return (
    <>
      <button className={ styles.emojiButton } onClick={ handleClick }>{ emoji.symbol }</button>
    </>
  )
}

export default EmojiBtn;
