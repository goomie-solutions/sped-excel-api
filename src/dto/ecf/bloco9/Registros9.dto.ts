export class Registro9001Dto {
    idRegistro: string = "9001";
    indMov: string;
}
export class Registro9100Dto {
    idRegistro: string = "9100";
    nmRegra: string;
    msgRegra?: string | null;
    registro: string;
    campo?: string | null;
    conteudo?: string | null;
    vlEsperado?: string | null;
    periodoApuracaoFiscal?: string | null;
    codCta?: string | null;
    codCentroCustos?: string | null;
    codCtaReferencial?: string | null;
    codLinhaTabDinamica?: string | null;
    numOrdem?: string | null;
    cnpjEstabelecimento?: string | null;
    cnae?: string | null;
    codCtaParteB?: string | null;
    codTributo?: string | null;
}
export class Registro9900Dto {
    idRegistro: string = "9900";
    registro: string;
    totalRegistrosPorTipo: string;
    versao?: string | null;
    idTabDinamica?: string | null;
}
export class Registro9099Dto {
    idRegistro: string = "9099";
    qtdRegistros: string;
}
export class Registro9999Dto {
    idRegistro: string = "9999";
    qtdTotalRegistros: string;
}