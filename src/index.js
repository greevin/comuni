import React from 'react'
import { render } from 'react-dom'
import PersonList from '../components/PersonList'
import data from '../data/people-info.json'

window.React = React

render(
  <PersonList title="Welcome to COMUNI" people={data.results} />,
  document.getElementById('people-list-container')
)
