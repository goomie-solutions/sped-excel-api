export class RegistroN001Dto {
    idRegistro: string = "N001";
    indMov: string;
}
export class RegistroN030Dto {
    idRegistro: string = "N030";
    dtInicial: string;
    dtFinal: string;
    perApuracao: string;
}
export class RegistroN500Dto {
    idRegistro: string = "N500";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN600Dto {
    idRegistro: string = "N600";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN605Dto {
    idRegistro: string = "N605";
    codCta: string;
    codCentroCustos?: string | null;
    saldoUtilizado: string;
    indsaldoUtilizado: string;
}
export class RegistroN610Dto {
    idRegistro: string = "N610";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN615Dto {
    idRegistro: string = "N615";
    baseCalculo: string;
    percIncentivoFinor: string;
    vlLiquidoFinor: string;
    percIncentivoFinam: string;
    vlLiquidoFinam: string;
    vlTotal: string;
}
export class RegistroN620Dto {
    idRegistro: string = "N620";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN630Dto {
    idRegistro: string = "N630";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN650Dto {
    idRegistro: string = "N650";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN660Dto {
    idRegistro: string = "N660";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN670Dto {
    idRegistro: string = "N670";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroN990Dto {
    idRegistro: string = "N990";
    qtdRegistros: string;
}