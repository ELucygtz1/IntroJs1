const ejercicio1 = [3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24];
  for(let indice = 0; indice < ejercicio1.length; indice++){
      ejercicio1.forEach(indice =>{
          if (indice % 2){
              console.log(indice);
          }
      })
      
  }
  
  
  const persona1 =
      {
        nombre: "Gabriel",
        edad: 22,
        esFamiliar: false,
      };
  const persona2 =
      {
        nombre: "Jaime",
        edad: 15,
        esFamiliar: true,
      };
  const persona3 =
      {
        nombre: "María",
        edad: 18,
        esFamiliar: true,
      };
  
  const persona4 =
      {
        nombre: "Angel",
        edad: 18,
        esFamiliar: true,
      };
  const persona5 =
      {
        nombre: "Fer",
        edad: 18,
        esFamiliar: true,
      };
  const persona6 =
      {
        nombre: "Rachel",
        edad: 30,
        esFamiliar: true,
      };
  
  const arregloEjercicio2 = [persona1, persona2, persona3, persona4, persona5, persona6]
  const admitirPaso = (persona) => {
      if(persona.edad >=18 && persona.esFamiliar) {
          console.log(`Puedes pasar ${persona.nombre} ${persona.edad}`);
      } else {
          console.log(`No puedes pasar ${persona.nombre} ${persona.edad}`);
      }
  
  };
  
  arregloEjercicio2.forEach((persona) => {
      admitirPaso(persona);
  });
  
  
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  console.log(fibonacci);
  
  
  