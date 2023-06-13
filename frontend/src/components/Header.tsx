import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../images/logo.png';
import { ReactComponent as Magnifier }  from '../images/magnifier.svg';

interface HeaderProps {

};

const Header: React.FC<HeaderProps> = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState<string>();
  const navigate = useNavigate();

  const search = (keyword: string) => navigate(`/items?search=${keyword}`);
  const clearInput = () => setInput('');

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement> ) => {
    if(event.key === 'Enter' && input){
      clearInput();
      search(input);
    }
  };

  const onClickHandler = () => {
    if(input){
      clearInput();
      search(input);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-width">
        <img className="navbar-logo" alt="logo" src={logo} onClick={() => navigate(`/`)}/>
        <div className={
          isFocused 
          ? "navbar-input-container-focused"
          : "navbar-input-container-unfocused"
        }
        >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={onKeyDownHandler}
            className="navbar-input"
            placeholder="Buscar productos, marcas y mas..."
            />
          <button className="navbar-button" onClick={onClickHandler}>
            <Magnifier className="navbar-magnifier" />
          </button>
        </div>
      </div>
    </div>);
};

export default Header