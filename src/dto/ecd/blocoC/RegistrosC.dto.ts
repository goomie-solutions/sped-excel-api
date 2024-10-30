export class RegistroC001Dto {
    idRegistro: string = "C001";
    indMov: string;
}
export class RegistroC040Dto {
    idRegistro: string = "C040";
    hashECDRecuperada: string;
    dtInicialECDRecuperada: string;
    dtFinalECDRecuperada: string;
    cnpjECDRecuperada: string;
    indFormaEscrituracao: string;
    codVersaoLayout: string;
    numOrdemEscrituracao: string;
    naturezaLivro: string;
    indSitEspECDRecuperada?: string | null;
    indNireECDRecuperada: string;
    indFinalidadeEscrituracao: string;
    tpECDRecuperada: string;
    cnpjScpECDRecuperada?: string | null;
    idMoedaFuncional: string;
    idEscrituracoesConsolidadas: string;
    idEscrituracaoCentralizada?: string | null;
    indMudacaPlanoContas?: string | null;
    codReferencial?: string;
}
export class RegistroC050Dto {
    idRegistro: string = "C050";
    dtAlteracao: string;
    naturezaCta: string;
    tipoCta: string;
    nivelCta: string;
    codCta: string;
    codCtaSintImedSuperior?: string | null;
    nmCta: string;
}
export class RegistroC051Dto {
    idRegistro: string = "C051";
    codCentroCustos?: string | null;
    codCtaReferencial: string;
}
export class RegistroC052Dto {
    idRegistro: string = "C052";
    codCentroCustos?: string | null;
    codAglutinacaoDFs: string;
}
export class RegistroC150Dto {
    idRegistro: string = "C150";
    dtInicial: string;
    dtFinal: string;
}
export class RegistroC155Dto {
    idRegistro: string = "C155";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoInicial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal?: string | null;
}
export class RegistroC600Dto {
    idRegistro: string = "C600";
    dtInicialDF: string;
    dtFinalDF: string;
    idDF: string;
    cabecalhoDF: string;
}
export class RegistroC650Dto {
    idRegistro: string = "C650";
    codAglutinacao: string;
    nivelAglutinacao: string;
    descricaoCodAglutinacao: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroC990Dto {
    idRegistro: string;
    qtdLinhas: string;
}