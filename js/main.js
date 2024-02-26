function carritoDeCompras() {
  let totalGastado = 0;
  let opcion;

  alert("Bienvenido a tiendas del pacifico, en que podemos ayudarlo?");

  do {
    opcion = parseInt(prompt("Ingrese el número de la opción que desea comprar: \n1. Remera - $6000 \n2. Buzo - $12000 \n3. Campera - $25000 \n4. Pantalon - $18000 \n5. Zapatillas - $50000 \n0. Salir"));

    switch (opcion) {
      case 1:
        totalGastado += 6000;
        alert("Ha comprado una remera por $6000.");
        break;
      case 2:
        totalGastado += 12000;
        alert("Ha comprado un buzo por $12000.");
        break;
      case 3:
        totalGastado += 25000;
        alert("Ha comprado una campera por $25000.");
        break;
      case 4:
        totalGastado += 18000;
        alert("Ha comprado un pantalon por $18000.");
        break
      case 5:
        totalGastado += 50000;
        alert("Ha comprado unas zapatillas por $50000.");
        break
      case 0:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione nuevamente.");
    }

  } while (opcion !== 0);

  alert("Ha gastado un total de $" + totalGastado + ".");
  alert("Gracias por elegirnos. Vuelva pronto");
}

carritoDeCompras();