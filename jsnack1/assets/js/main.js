console.log('ok');
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach
$(document).ready(function () {
  const bici = [
    {
      nome: 'graziella',
      peso: 15
    },
    {
      nome: 'bianchi',
      peso: 5
    },
    {
      nome: 'carnielli',
      peso: 20
    }
  ];
  let min = bici[0].peso;

  bici.forEach((item, i) => {
    if (item.peso < min) {
      min = item.peso
      console.log(min);
    }
  });
  const filteredBici = bici.filter((item)=> item.peso == min)
  console.log(`la bici più leggera è ${filteredBici[0].nome} e pesa ${filteredBici[0].peso}kg`);

});
