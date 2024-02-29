function carritoDeCompras() {
  let totalGastado = 0;
  let opcion;
  let cantidad = 0;
  const remera = 6000;
  const buzo = 12000;
  const campera = 25000;
  const pantalon = 18000;
  const zapatillas = 50000;

  
  alert("Bienvenido a Indumentaria del pacifico, en que podemos ayudarlo?");

  do {
    opcion = prompt("Ingrese el número de la opción que desea comprar: \n1. Remera - $6000 \n2. Buzo - $12000 \n3. Campera - $25000 \n4. Pantalon - $18000 \n5. Zapatillas - $50000 \n0. Salir");

    if (isNaN(opcion)) {
      alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 5 para comprar y 0 para salir");
      continue;
    } else {
      opcion = parseInt(opcion);
      if ((opcion < 0) || (opcion > 5)) {
        alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 5 para comprar y 0 para salir");
        continue;
      }
    }

    if (opcion !== 0) {
      do {
        cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar:"));
        if (isNaN(cantidad) || cantidad < 0) {
          alert("Por favor, ingrese un número válido y mayor o igual a cero.");
        }
      } while (isNaN(cantidad) || cantidad < 0)
    }

    switch (opcion) {
      case 1:
        totalGastado += remera * cantidad;
        alert("Ha comprado " + cantidad + " remeras por $" + remera * cantidad);
        break;
      case 2:
        totalGastado += buzo * cantidad;
        alert("Ha comprado " + cantidad + " buzos por $" + buzo * cantidad);
        break;
      case 3:
        totalGastado += campera * cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + campera * cantidad);
        break;
      case 4:
        totalGastado += pantalon * cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + pantalon * cantidad);
        break
      case 5:
        totalGastado += zapatillas * cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + zapatillas * cantidad);
        break
      case 0:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione nuevamente.");
    }
  } while (opcion !== 0);

  alert("El total gastado es de $" + totalGastado + ".");
  alert("Gracias por elegirnos. Vuelva pronto.");
}

carritoDeCompras();