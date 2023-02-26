import './App.css'
import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Store from './components/Store'
import { StoreProvider } from './components/context/StoreContext'


function App() {

  return (
    <div className='bg-black min-h-screen' data-theme="luxury">

      <StoreProvider>

        <Header />
        <Router>
          <Menu />
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/' element={<Main />} />
            <Route path='/store' element={<Store />} />
          </Routes>
        </Router>

      </StoreProvider>
    </div>
  )
}

export default App
