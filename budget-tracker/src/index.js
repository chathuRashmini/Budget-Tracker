import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import './index.css'
import App from './App'

ReactDOM.render(
    <SpeechProvider
        appId='8735d6ef-922b-4db4-8cbd-3f08ebb1ae11'
        language='en-US'
    >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)