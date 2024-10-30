export class RegistroC001Dto {
    idRegistro: string = "C001";
    indMovimento: string;
}

export class RegistroC040Dto {
    idRegistro: string = "C040";
    hashEcdUtilizada: string;
    dtInicial: string;
    dtFinal: string;
    indSitEsp: string;
    cnpj: string;
    numOrdem: string;
    nire: string;
    naturezaLivro: string;
    codVersaoLayoutContabil: string;
    indFormaEscrituracaoContabil: string;
    isMoedaFuncional: string;
    isEscrituracaoConsolidada: string;
    indModalidadeEscrituracao: string;
    indMudancaPlanoContas: string;
    codPlanoReferencial: string;
}

export class RegistroC050Dto {
    idRegistro: string = "C050";
    dtAlteracao: string;
    natureza: string;
    tipo: string;
    nivel: string;
    codigo: string;
    codContaSinteticaNivelImedSup: string;
    nmConta: string;
}

export class RegistroC051Dto {
    idRegistro: string = "C051";
    codCentroCustos: string;
    codContaReferencial: string;
}

export class RegistroC053Dto {
    idRegistro: string = "C053";
    codIdentificacaoGrupoContaSubconta: string;
    codSubcontaCorrelata: string;
    naturezaSubcontaCorrelata: string;
}

export class RegistroC100Dto {
    idRegistro: string = "C100";
    dtAlteracao: string;
    codCentroCustos: string;
    nmCentroCustos: string;
}

export class RegistroC150Dto {
    idRegistro: string = "C150";
    dtInicial: string;
    dtFinal: string;
}

export class RegistroC155Dto {
    idRegistro: string = "C155";
    codConta: string;
    codCentroCustos: string;
    vlSaldoInicial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
    numLinhaArquivoEcd: string;
}

export class RegistroC157Dto {
    idRegistro: string = "C157";
    codConta: string;
    codCentroCustos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
    numLinhaArquivoEcd: string;
}

export class RegistroC350Dto {
    idRegistro: string = "C350";
    dtApuracaoResultado: string;
}

export class RegistroC355Dto {
    idRegistro: string = "C355";
    codConta: string;
    codCentroCustos: string;
    vlSaldoFinalAntesEncerramento: string;
    indSitSaldoFinal: string;
    numLinhaArquivoEcd: string;
}

export class RegistroC990Dto {
    idRegistro: string = "C990";
    qtdRegistros: string;
}