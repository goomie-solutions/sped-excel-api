export class RegistroE001Dto {
    idRegistro: string = "E001";
    indMov: string;
}

export class RegistroE010Dto {
    idRegistro: string = "E010";
    natureza: string;
    codCtaReferencial: string;
    nmCtaReferencial: string;
    vlCtaReferencial: string;
    indVlCtaReferencial: string;
}

export class RegistroE015Dto {
    idRegistro: string = "E015";
    codCta: string;
    codCentroCustos?: string | null;
    nmCta: string;
    vlConta: string;
    indSaldoFinal: string;
}

export class RegistroE020Dto {
    idRegistro: string = "E020";
    codCtaParteB: string;
    descricaoCta?: string | null;
    dtCriacao?: string | null;
    dtLimiteExclusaoAdicaoCompensacao?: string | null;
    indTributoAdicaoExclusao?: string | null;
    saldoFinal?: string | null;
    indVlSaldoFinal?: string | null;
    codTabelaPadraoParteB: string;
}

export class RegistroE030Dto {
    idRegistro: string = "E030";
    dtInicial: string;
    dtFinal: string;
    periodoApuracao: string;
}

export class RegistroE155Dto {
    idRegistro: string = "E155";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoInicial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
}

export class RegistroE355Dto {
    idRegistro: string = "E355";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
}

export class RegistroE990Dto {
    idRegistro: string = "E990";
    qtdRegistros: string;
}