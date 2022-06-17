const datos = [
  {
    id: 1,
    nombre: "Juan",
    poder: "Agua"
  },
  {
    nombre: "Eliseo",
    poder: "Fuego",
    id: 2
  },
  {
    id: 3,
    nombre: "Santiago",
    poder: "Aire"
  }
]

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
      return datos;
    }, 1500);
  });
}


async function asincrono() {
  const datos_asincrono = await getDatos();
  console.log(datos_asincrono)
}
asincrono();
