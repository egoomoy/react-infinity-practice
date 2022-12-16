import React, { useState, useCallback } from 'react';
import Light from './Ligth';
import useToggle from '../utils/useToggle';

function SmartHome() {
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);
  const [masters, toggleMaster] = useToggle();

  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <>
      <Light room="침실" on={masters} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}

export default SmartHome;
