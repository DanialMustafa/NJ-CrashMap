import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Atlantic from './pages/Atlantic';
import Bergen from './pages/Bergen';
import Pasiac from './pages/Pasiac';
import Sussex from './pages/Sussex';
import Morris from './pages/Morris';
import Essex from './pages/Essex';
import Hudson from './pages/Hudson';
import Union from './pages/Union';
import Warren from './pages/Warren';
import Hunterdon from './pages/Hunterdon';
import Somerset from './pages/Somerset';
import Middlesex from './pages/Middlesex';
import Mercer from './pages/Mercer';
import Monmouth from './pages/Monmouth';
import Ocean from './pages/Ocean';
import Burlington from './pages/Burlington';
import Camden from './pages/Camden';
import Gloucester from './pages/Gloucester';
import Salem from './pages/Salem';
import Cumberland from './pages/Cumberland';
import CapeMay from './pages/CapeMay';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Main />}/>
          <Route path='/Atlantic' element = {<Atlantic/>} />
          <Route path='/Bergen' element = {<Bergen/>} />
          <Route path='/Pasiac' element = {<Pasiac/>} />
          <Route path='/Sussex' element = {<Sussex/>} />
          <Route path='/Morris' element = {<Morris/>} />
          <Route path='/Essex' element = {<Essex/>} />
          <Route path='/Hudson' element = {<Hudson/>} />
          <Route path='/Union' element = {<Union/>} />
          <Route path='/Warren' element = {<Warren/>} />
          <Route path='/Hunterdon' element = {<Hunterdon/>} />
          <Route path='/Somerset' element = {<Somerset/>} />
          <Route path='/Middlesex' element = {<Middlesex/>} />
          <Route path='/Mercer' element = {<Mercer/>} />
          <Route path='/Monmouth' element = {<Monmouth/>} />
          <Route path='/Ocean' element = {<Ocean/>} />
          <Route path='/Burlington' element = {<Burlington/>} />
          <Route path='/Camden' element = {<Camden/>} />
          <Route path='/Gloucester' element = {<Gloucester/>} />
          <Route path='/Salem' element = {<Salem/>} />
          <Route path='/Cumberland' element = {<Cumberland/>} />
          <Route path='/Cape May' element = {<CapeMay/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;