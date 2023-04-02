import { useEffect, useState } from "react";

function App() {
  const [pencereBoyutu, pencereBoyutuGuncelle] = useState({
    genislik: window.innerWidth,
    yukseklik: window.innerHeight,
  });

  // useEffect( ()=> {
    
  //   function boyutlandirmaKodu() {
  //     pencereBoyutuGuncelle({
  //       genislik: window.innerWidth,
  //       yukseklik: window.innerHeight,
  //     });
  //   }

  //   window.addEventListener("resize", boyutlandirmaKodu);

  //   //cleanup function
  //   return ()=> {
  //     window.removeEventListener("resize", boyutlandirmaKodu)
  //   }

  // } )

  useEffect( ()=>{
    pencereBoyutuGuncelle( {genislik: 100, yukseklik: 200} )
  }, [] )

  return (
    <div>
      <p>Pencere genişliği: {pencereBoyutu.genislik}</p>
      <p>Pencere yüksekliği: {pencereBoyutu.yukseklik}</p>
    </div>
  );
}

export default App;
