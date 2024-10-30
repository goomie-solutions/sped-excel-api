export class RegistroV001Dto {
    idRegistro: string = "V001";
    indMov: string;
}
export class RegistroV010Dto {
    idRegistro: string = "V010";
    nmInstituicao: string;
    pais: string;
    tpMoeda: string;
}
export class RegistroV020Dto {
    idRegistro: string = "V020";
    nmResponsavel: string;
    enderecoResponsavel: string;
    tpDocResponsavel: string;
    numDocResponsavel: string;
    idContas: string;
}
export class RegistroV030Dto {
    idRegistro: string = "V030";
    mes: string;
}
export class RegistroV100Dto {
    idRegistro: string = "V100";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroV990Dto {
    idRegistro: string = "V990";
    qtdRegistros: string;
}