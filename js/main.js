function carritoDeCompras() {
    let totalGastado = 0;
    let opcion;
    let remera = 6000;
    let buzo = 12000;
    let campera = 25000;
    let pantalon = 18000;
    let zapatillas = 50000;

    alert("Bienvenido a tiendas del pacifico, en que podemos ayudarlo?");
  
    do {
      opcion = parseInt(prompt("Ingrese el número de la opción que desea comprar: \n1. Remera - $6000 \n2. Buzo - $12000 \n3.Campera - $25000 \n4. Pantalon - $18000 \n5.Zapatillas - $50000 \n0. Salir"));
  
      switch (opcion) {
        case 1:
          totalGastado = totalGastado + remera ;
          alert("Ha comprado una remera por $6000.");
          break;
        case 2:
          totalGastado = totalGastado + buzo;
          alert("Ha comprado un buzo por $12000.");
          break;
        case 3:
          totalGastado = totalGastado + campera;
          alert("Ha comprado una campera por $25000.");
          break;
        case 4:
            totalGastado = totalGastado + pantalon;
            alert("Ha comprado un pantalon por $18000.");
            break
        case 5:
            totalGastado = totalGastado + zapatillas;
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
  }
  
carritoDeCompras();