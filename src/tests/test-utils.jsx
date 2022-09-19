import React from 'react'
import {render} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import { MemoryRouter } from 'react-router-dom'


const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export default customRender;  