import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SkeletonTheme>
      <App />
    </SkeletonTheme>
  </React.StrictMode>
)
