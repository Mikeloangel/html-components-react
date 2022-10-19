import React from "react";


function SelectorItem({ itemName, searchQuery }) {

  const isHide = !itemName.toLowerCase().includes(searchQuery.toLowerCase());

  return (<li className={`ls__list-item ${isHide && 'ls__hide'}`} title={itemName}>{itemName}</li>)
}

export default SelectorItem;
