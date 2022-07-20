let peca = "Bispo";

    switch (peca.toLowerCase()) {
        case "torre":
            console.log("Movimento vertical e horizontal ilimitado, desde que não seja bloqueado");
            break;
        case "rainha":
            console.log("Movimento da torre e peão combinados");
            break;
        case "rei":
                console.log("Quadrado");
                break;
        case "peão":
            console.log("Forward");
            break;
        case "bispo":
                console.log("Diagonal");
                break;
        case "cavaleiro":
            console.log("Horizontal um movimento e dois para cima ou baixo");
            break;
    }