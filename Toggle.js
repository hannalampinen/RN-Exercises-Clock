import React, { useState } from 'react';
import { Button } from 'react-native';

export default function Toggle(props) {

  // Is the timer on? True = yes 
  const [isToggleOn, setIsToggleOn] = useState(true); 

  function handleClick() {
    setIsToggleOn(!isToggleOn);
    if (isToggleOn) {
      props.stop();
    }
    else {
      props.start();
    }
  }

  return (
    <Button onPress={handleClick} title={isToggleOn ? 'Stop' : 'Start'}>
    </Button>
  )
}