import React from 'react'
import { FormattedMessage } from 'react-intl'

import reactLogo from './assets/react.svg'
import './App.css'
import SelectLanguage from './components/SelectLanguage'

function App() {

  return (
    <div className="App">
      <SelectLanguage />
      <header className="App-header">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="app.header"
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.content" defaultMessage="app.content" />
        </a>
        <FormattedMessage
          id="app.channel.plug"
          values={{ students: "Peter" }}
        />
      </header>

    </div>
  )
}

export default App