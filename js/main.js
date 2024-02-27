function carritoDeCompras() {
  let totalGastado = 0;
  let opcion;
  const remera = 6000;
  const buzo = 12000;
  const campera = 25000;
  const pantalon = 18000;
  const zapatillas = 50000;

  alert("Bienvenido a tiendas del pacifico, en que podemos ayudarlo?");

  do {
    opcion = parseInt(prompt("Ingrese el número de la opción que desea comprar: \n1. Remera - $6000 \n2. Buzo - $12000 \n3. Campera - $25000 \n4. Pantalon - $18000 \n5. Zapatillas - $50000 \n0. Salir"));

    let cantidad = 0;
    if (opcion !== 0) {
      cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar:"));
    }

    switch (opcion) {
      case 1:
        totalGastado += remera*cantidad;
        alert("Ha comprado " + cantidad + " remeras por $" + remera*cantidad);
        break;
      case 2:
        totalGastado += buzo*cantidad;
        alert("Ha comprado " + cantidad + " buzos por $" + buzo*cantidad);
        break;
      case 3:
        totalGastado += campera*cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + campera*cantidad);
        break;
      case 4:
        totalGastado += pantalon*cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + pantalon*cantidad);
        break
      case 5:
        totalGastado += zapatillas*cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + zapatillas*cantidad);
        break
      case 0:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione nuevamente.");
    }

  } while (opcion !== 0);

  alert("El total gastado es de $" + totalGastado + ".");
  alert("Gracias por elegirnos. Vuelva pronto");
}

carritoDeCompras();