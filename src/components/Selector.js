import React, { useState } from "react";

import "../blocks/ls.scss"
import imgLoupe from "../images/loupe.png";
import SelectorItem from "./SelectorItem";

function Selector({cityList, onSelect, onCompare}) {
  console.time('Search');

  const [inputValue, setInputValue] = useState('');

  function handleChange(e){
    setInputValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleSelect(e){
    onSelect(e.target);
    console.log(e.target.textContent);
  }

  const ret = (
    <section className="section">
      <h1 className="section__title">Селектор</h1>

      <section className="ls" aria-label="Выбор с поиском из списка">

        <form noValidate name="ls-form" className="ls__form" onSubmit={handleSubmit}>
          <input type="text" className="ls__input" name="ls-input" placeholder="Название города" value={inputValue} onChange={handleChange} />
            <button className="ls__btn-transparent" type="submit">
              <img src={imgLoupe} alt="Search" className="ls__search-image" />
            </button>
        </form>

        <div className="ls__container">
          <ul className="ls__list" onClick={handleSelect}>
            {cityList.map((item, index) => (<SelectorItem key={index} itemName={item} searchQuery={inputValue} onCompare={onCompare}/>))}
          </ul>
        </div>
      </section>

    </section>
  )
  console.timeEnd('Search');
  return ret;
}

export default Selector;
