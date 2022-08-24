let Button = document.getElementById('Button1')
console.log(Button)


Button.addEventListener('click',
  function () {
    console.log("Ciao")
    let Chilometri = parseInt(document.getElementById('Chilometri').value)
    console.log(Chilometri)

    let Fasciaetà = parseInt(document.getElementById('Fasciaetà').value)
    console.log(Fasciaetà)

}
);