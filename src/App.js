import { useEffect, useState } from "react";


function App() {
  const [sayac, sayacGuncelle] = useState(0);

  const [ad, adGuncelle] = useState("Ad tanımsız.")

  useEffect( ()=>{
    document.title = sayac;
  }, [sayac] );

  function adFonksiyonu(){
    let zaman = new Date().getSeconds();
    adGuncelle("Ahmet Yılmaz: " + zaman);
  }

  return (
    <>
      <p>{sayac}</p>
      <button onClick={ ()=> {sayacGuncelle(onceki => onceki + 1)} }>Arttır</button>
      <p>Ad: {ad}</p>
      <button onClick={adFonksiyonu}>Ad Güncelle</button>
    </>
  );
}

export default App;
