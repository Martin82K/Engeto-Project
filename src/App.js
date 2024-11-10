import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ApiForm from './pages/ApiForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ApiForm" element={<ApiForm />} />
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
