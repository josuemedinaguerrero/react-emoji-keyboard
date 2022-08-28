
import React, { useRef } from 'react';
import EmojiPicker from './EmojiPicker';

const EmojiPickerInput = () => {
  const refInput = useRef( null );

  const styleContainer = {
    margin: '2rem'
  }

  return (
    <div style={ styleContainer }>
      <input ref={ refInput } style={{ outline: 'none' }} />
      <EmojiPicker ref={ refInput } />
    </div>
  )
}

export default EmojiPickerInput;

