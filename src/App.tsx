import { Route, Routes } from 'react-router-dom'
import './App.css'
import List from './components/List'
import Item from './components/Item'

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />}/>
      <Route path="/:id/details" element={<Item />}/>
    </Routes>
  )
}

export default App
