let Button = document.getElementById('Button1')
console.log(Button)


Button.addEventListener('click',
  function () {


    console.log("Ciao")
    let Chilometri = parseInt(document.getElementById('Chilometri').value)
    console.log(Chilometri)

    let Fasciaetà = parseInt(document.getElementById('Fasciaetà').value)
    console.log(Fasciaetà)


            //  Chilometri costo KM
    let CostoBase = Chilometri * 0.21
    console.log (CostoBase)

    
                //  Fascia età calcolo
    if (Fasciaetà < 18) {
      let ScontoMin = CostoBase * 0.8;
        console.log(ScontoMin)
        document.getElementById("COSTO").innerHTML=ScontoMin;
      }

      if (Fasciaetà > 65) {
        let ScontoMag = CostoBase * 0.6;
          console.log(ScontoMag)
          document.getElementById("COSTO").innerHTML=ScontoMag;
        }
}

); 




