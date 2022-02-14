enum Color {
    blue = 'azul',
    red = 'rojo'
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}


let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.blue
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function () {
    return `Un rectangulo ${this.color ? this.color : ''}`;
}

console.log(rect.toString());