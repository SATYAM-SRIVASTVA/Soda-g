import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import FruitSalt from "./Components/FruitSalt/FruitSalt";
import EnoBottle from "./Components/EnoBottle/EnoBottle";
import WhatEno from "./Components/WhatEno/WhatEno";
import Footer from "./Components/Footer";
import Ingestion from './Components/About/Type/Ingestion'
import Stomachhurt from './Components/About/Type/Stomachhurt';
import Understand from './Components/About/Acidity/understand';
import Symptoms from './Components/About/Acidity/Symptoms';
import Living from './Components/About/Acidity/Living';
import Remedies from './Components/About/Acidity/Remedies';
import UnderstandHeartburn from './Components/About/Heartburn/UnderstandHeartburn';
import SymptomsHeartburn from './Components/About/Heartburn/SymptomsHeartburn';
import RemediesHeartburn from './Components/About/Heartburn/RemediesHeartburn';
import Gas from './Components/About/GasRelief/Gas';
import Gred from './Components/About/Type/Gred';


function App() {
  return (
    <>
      {" "}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="" element ={<Products />}/>
          <Route path="/sachet" element ={<FruitSalt />}/>
          <Route path="/bottle" element ={<EnoBottle />}/>
          <Route path="/whateno" element ={<WhatEno />}/>
          <Route path='/stomach' element={<Stomachhurt/>} />
      <Route path='/understandheartburn' element={<UnderstandHeartburn/>} />
      <Route path='/symptomsheartburn' element={<SymptomsHeartburn/>} />
      <Route path='/remediesheartburn' element={<RemediesHeartburn/>} />
      <Route path='/gas' element={<Gas/>} />
      <Route path='/understand' element={<Understand/>} />
      <Route path='/living' element={<Living/>} />
      <Route path='/gred' element={<Gred/>} />
      <Route path='/indigestion' element={<Ingestion/>} />
      <Route path='/symptoms' element={<Symptoms/>} />
      <Route path='/remedies' element={<Remedies/>} />

       </Routes>
       <Footer/>
      </Router>
      
    </>
  );
}

export default App;
