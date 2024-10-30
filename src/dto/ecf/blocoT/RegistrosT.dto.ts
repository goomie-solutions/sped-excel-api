export class RegistroT001Dto {
    idRegistro: string = "T001";
    indMov: string;
}
export class RegistroT030Dto {
    idRegistro: string = "T030";
    dtInicial: string;
    dtFinal: string;
    perApuracao: string;
}
export class RegistroT120Dto {
    idRegistro: string = "T120";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroT150Dto {
    idRegistro: string = "T150";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroT170Dto {
    idRegistro: string = "T170";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroT181Dto {
    idRegistro: string = "T181";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroT990Dto {
    idRegistro: string = "T990";
    qtdRegistros: string;
}