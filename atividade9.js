const prompt = require('prompt-sync')();

    const numeroA = prompt('Digite o valor de A: ');
        const A = Number(numeroA)
    const numeroB = prompt('Digite o valor de B: ');
        const B = Number(numeroB)
    const numeroC = prompt('Digite o valor de C: ');
        const C = Number(numeroC)
    const numeroD = prompt('Digite o valor de D: ');
        const D = Number(numeroD)
    const numeroE = prompt('Digite o valor de E: ');
        const E = Number(numeroE)
    const numeroF = prompt('Digite o valor de F: ');
        const F = Number(numeroF)

        const numeroX = (numeroC*numeroE) - (numeroB*numeroF) / (numeroA*numeroE) - (numeroB*numeroD);
        const numeroY = (numeroA*numeroF) - (numeroC*numeroD) / (numeroA*numeroE) - (numeroB*numeroD);

            console.log(`O valor de X é: ${numeroX} \nO valor de Y é: ${numeroY}`);