import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navigation = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <NavLink to="/" exact className="nav-link" activeClassName="active">Главная</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/quiz" className="nav-link">Викторина</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/about" className="nav-link">Описание</NavLink>
    </li>
  </ul>
)