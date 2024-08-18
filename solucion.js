function distributeGifts(weights) {
    let resultados = [];
    for(let i= 0; i < weights.length; i++){
        resultados.push([]);
          const row = weights[i];
          for(let j = 0; j < row.length; j++){

            let dividir = 0;

            let suma = 0;

            const value = weights[i][j];

            // Numero actual
            if (value != null) {
                dividir = 1;
                suma = value;
            }

            // Izquierda
            if (j > 0 
                && ![undefined, null].includes(row[j - 1])
                ) 
            {
                suma += row[j - 1];
                dividir += 1;
            }

            // Derecha
            if (j < row.length - 1 
                && ![undefined, null].includes(row[j + 1])
              ) 
            {
                suma += row[j + 1];
                dividir += 1;
            }

            // Arriba
            if (i > 0 
                && ![undefined, null].includes(weights[i - 1][j])
              ) 
            {
                suma += weights[i - 1][j];
                dividir += 1;
            }

            //Abajo
            if (i < weights.length - 1 
                && j < weights[i + 1].length 
                && ![undefined, null].includes(weights[i + 1][j])
              ) 
            {
                suma += weights[i + 1][j];
                dividir += 1;
            }

            const resultado = Math.round(suma / dividir);

            resultados[i].push(resultado);
          }
    }
        
    return resultados;
}
