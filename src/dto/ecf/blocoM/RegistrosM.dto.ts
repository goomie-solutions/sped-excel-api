export class RegistroM001Dto {
    idRegistro: string = "M001";
    indMov: string;
}
export class RegistroM010Dto {
    idRegistro: string = "M010";
    codCtaParteB: string;
    nmCta: string;
    dtFinalApuracao: string;
    codTabPadraoParteB: string;
    dtLimite?: string | null;
    codTributo: string;
    vlSaldoInicial: string;
    indSaldoInicial: string;
    cnpj?: string | null;
}
export class RegistroM030Dto {
    idRegistro: string = "M030";
    dtInicial: string;
    dtFinal: string;
    perApuracao: string;
}
export class RegistroM300Dto {
    idRegistro: string = "M300";
    codLanctoLalur: string;
    descricaoTpLancto?: string | null;
    tpLancto?: string | null;
    indRelacionamentoLanctoParteA?: string | null;
    vlLancto?: string | null;
    historicoLancto?: string | null;
}
export class RegistroM305Dto {
    idRegistro: string = "M305";
    codCtaParteB: string;
    vlCta: string;
    indVlTotal: string;
}
export class RegistroM310Dto {
    idRegistro: string = "M310";
    codCta: string;
    codCentroCustos?: string | null;
    vlConta: string;
    indVlConta: string;
}
export class RegistroM312Dto {
    idRegistro: string = "M312";
    numLancto: string;
}
export class RegistroM315Dto {
    idRegistro: string = "M315";
    tpProcesso: string;
    numProcesso: string;
}
export class RegistroM350Dto {
    idRegistro: string = "M350";
    codLanctoLalur: string;
    descricaoTpLancto?: string | null;
    tpLancto?: string | null;
    indRelacionamentoLanctoParteA?: string | null;
    vlLancto?: string | null;
    historicoLancto?: string | null;
}
export class RegistroM355Dto {
    idRegistro: string = "M355";
    codCtaParteB: string;
    vlCta: string;
    indVlTotal: string;
}
export class RegistroM360Dto {
    idRegistro: string = "M360";
    codCta: string;
    codCentroCustos?: string | null;
    vlConta: string;
    indVlConta: string;
}
export class RegistroM362Dto {
    idRegistro: string = "M362";
    numLancto: string;
}
export class RegistroM365Dto {
    idRegistro: string = "M365";
    tpProcesso: string;
    numProcesso: string;
}
export class RegistroM410Dto {
    idRegistro: string = "M410";
    codCtaParteB?: string | null;
    codTributo: string;
    vlLancto: string;
    indLancto: string;
    codCtaCpParteB?: string | null;
    historico: string;
    isLanctoValoresDiferidos: string;
}
export class RegistroM415Dto {
    idRegistro: string = "M415";
    tpProcesso: string;
    numProcesso: string;
}
export class RegistroM500Dto {
    idRegistro: string = "M500";
    codCtaParteB: string;
    codTributo: string;
    saldoInicial: string;
    indSaldoInicial: string;
    vlLanctoParteA: string;
    indVlLanctoParteA: string;
    vlLanctoParteB: string;
    indVlLanctoParteB: string;
    saldoFinal: string;
    indSaldoFinal: string;
}
export class RegistroM510Dto {
    idRegistro: string = "M510";
    codCtaPadraoParteB: string;
    descricaoCtaPadraoParteB: string;
    codTributo: string;
    saldoInicial: string;
    indSaldoInicial: string;
    vlLanctoParteA: string;
    indVlLanctoParteA: string;
    vlLanctoParteB: string;
    indVlLanctoParteB: string;
    saldoFinal: string;
    indSaldoFinal: string;
}
export class RegistroM990Dto {
    idRegistro: string = "M990";
    qtdRegistros: string;
}
