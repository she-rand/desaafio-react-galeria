import { useState } from 'react'
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card';
import Footer from './components/Footer';
import  '../src/index.css'



const App = ( ) => {

  return(
    <div className='container'>
       <Header titulo={"Galería de Imágenes con React"}/>
       <div className='cards'>
       <Card titulo={"Galanthus"} url={"../public/snowdrops.jpg"} descripcion={"Es una planta herbácea, natural de Europa y Asia occidental."}/>
        <Card titulo={"Azucena"} url={"../public/lillium.jpg"} descripcion={"Posee un tallo subterráneo bulboso y otro aéreo herbáceo, provisto de numerosas hojas."}/>
        <Card titulo={"Tulipán"} url={"../public/tulips.jpg"} descripcion={"La palabra «tulipán» proviene del vocablo turco otomano tülbend que, a su vez, proviene del término persa dulband. "}/>

       </div>
    
    <Footer descripcion={"Sube tus fotos botánicas a la galería"}/>

    </div>
  
     
    
    
    
  );
};
export default App;
