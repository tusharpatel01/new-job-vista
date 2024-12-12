import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const persistor = persistStore(store);
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Auth0Provider
          domain="dev-id8zjondy1kj7tkz.us.auth0.com"
          clientId="KqsdxeE7vZX17a8b1tLGiPsJ3zvJxvmj"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
        <App />
        </Auth0Provider>
      </PersistGate>

    </Provider>
    <Toaster />
  </React.StrictMode>,
)
