const prompt = require('prompt-sync')();

    const tempoDoEvento = Number(prompt('Digite a duração total do evento em segundo: '));

        const horas = Math.floor(tempoDoEvento/3600)
        const minutos = Math.floor((tempoDoEvento % 3600) / 60)
        const segundos = Math.floor((tempoDoEvento % 3600) % 60)

            console.log(`\n\tO tempo de duração do evento foi: ${horas}:${minutos}:${segundos} `);