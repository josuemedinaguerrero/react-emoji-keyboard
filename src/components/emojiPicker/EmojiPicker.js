
import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { data } from './data';
import EmojiSearch from './EmojiSearch';
import EmojiBtn from './EmojiBtn';

import styles from './EmojiPicker.module.scss';

const EmojiPicker = ( props, inputRef ) => {
  const [isOpen, setIsOpen] = useState( false );
  const [emojis, setEmojis] = useState( data );

  const containerRef = useRef( null );

  useEffect(() => {
    window.addEventListener('click', e => {
      if ( !containerRef.current.contains(e.target) ) {
        setIsOpen( false );
        setEmojis( data );
      }
    })
  }, []);

  const handleClickOpen = () => {
    setIsOpen( !isOpen );
  }

  const handleSearch = e => {
    const q = e.target.value.toLowerCase();
    console.log( q );
  console.log( inputRef.current );
  if ( q ) {
      console.log('Si hay contenido en el query');
      const search = data.filter( emoji => {
        return emoji.name.toLowerCase().includes(q) || emoji.keywords.toLowerCase().includes(q);
      })
      console.log( search );
      setEmojis( search );
    } else {
      setEmojis( data );
    }
  }

  const handleOnClickEmoji = emoji => {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice( 0, cursorPos );
    const next = text.slice( cursorPos );

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
    inputRef.current.focus();
  }

  return (
    <div  ref={ containerRef } className={ styles.inputContainer }>
      <button onClick={ handleClickOpen } className={ styles.emojiPickerBtn }>😆</button>
      { isOpen ?
          <div className={ styles.emojiPickerContainer }>
            <EmojiSearch onSearch={ handleSearch }/>
            <div className={ styles.emojiList }>
            {
              emojis.map( emoji => (
                <EmojiBtn key={ emoji.symbol } emoji={ emoji } onClick={ handleOnClickEmoji }/>
              ))
            }
            </div>
          </div>
          : ''
      }
    </div>
  )
}

export default forwardRef( EmojiPicker );

