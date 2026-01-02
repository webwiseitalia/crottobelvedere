import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Crotto from './pages/Crotto'
import Cucina from './pages/Cucina'
import Cantina from './pages/Cantina'
import Prodotti from './pages/Prodotti'
import Ricette from './pages/Ricette'
import TreSale from './pages/TreSale'
import Terrazzo from './pages/Terrazzo'
import Giardino from './pages/Giardino'
import BedAndCrotto from './pages/BedAndCrotto'
import Contatti from './pages/Contatti'
import DoveSiamo from './pages/DoveSiamo'
import StayPiuro from './pages/StayPiuro'
import Filastrocca from './pages/Filastrocca'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="crotto" element={<Crotto />} />
        <Route path="cucina" element={<Cucina />} />
        <Route path="cantina" element={<Cantina />} />
        <Route path="prodotti" element={<Prodotti />} />
        <Route path="ricette" element={<Ricette />} />
        <Route path="tre-sale" element={<TreSale />} />
        <Route path="terrazzo" element={<Terrazzo />} />
        <Route path="giardino" element={<Giardino />} />
        <Route path="bed-and-crotto" element={<BedAndCrotto />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="dove-siamo" element={<DoveSiamo />} />
        <Route path="staypiuro" element={<StayPiuro />} />
        <Route path="filastrocca" element={<Filastrocca />} />
      </Route>
    </Routes>
  )
}

export default App
