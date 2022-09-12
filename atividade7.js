const prompt = require('prompt-sync')();

    const x1 = prompt('Digite o valor de X1: ');
    const x2 = prompt('Digite o valor de X2: ');
    const y1 = prompt('Digite o valor de Y1: ');
    const y2 = prompt('Digite o valor de Y2: ');

        const potenciaDeX = Math.pow((x1-x2),2);
        const potenciaDeY = Math.pow((y1-y2),2);

            const valorD = Math.sqrt(potenciaDeX+potenciaDeY,2);

                console.log(`O resultado de D é: ${valorD}`);