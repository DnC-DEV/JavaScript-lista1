const prompt = require('prompt-sync')();

    const custoDeFabrica = prompt('Qual o custo de fabrica? ');
    const imposto = 45;
    const distribuidor = 28;

        const custoConsumidor = (custoDeFabrica*(distribuidor+imposto))/100+custoDeFabrica;

            console.log(`O custo para o consumidor será: ${custoConsumidor}`);