export class RegistroK001Dto {
    idRegistro: string = "K001";
    indMov: string;
}
export class RegistroK030Dto {
    idRegistro: string = "K030";
    dtInicial: string;
    dtFinal: string;
    periodoApuracao: string;
}
export class RegistroK155Dto {
    idRegistro: string = "K155";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoInicial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroK156Dto {
    idRegistro: string = "K156";
    codCtaReferencial: string;
    vlSaldoInicial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroK355Dto {
    idRegistro: string = "K355";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoFinal: string;
    indSitSaldoInicial: string;
}
export class RegistroK356Dto {
    idRegistro: string = "K356";
    codCtaReferencial: string;
    vlSaldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroK915Dto {
    idRegistro: string = "K915";
    periodoApuracao: string;
    codCta: string;
    codCentroCustos?: string | null;
    idRegra: string;
    vlSaldoInicialRecuperadoECD?: string | null;
    indSitSaldoInicialEsperado?: string | null;
    vlDebitosRecuperadosECD?: string | null;
    vlCreditosRecuperadosECD?: string | null;
    vlSaldoFinalRecuperadoECD?: string | null;
    indSitSaldoFinalEsperado?: string | null;
    vlSaldoInicialPreenchido?: string | null;
    indSitSaldoInicialPreenchido?: string | null;
    vlDebitosPreenchido?: string | null;
    vlCreditosPreenchido?: string | null;
    vlSaldoFinalPreenchido?: string | null;
    indSitSaldoFinalPreenchido?: string | null;
    justificativa: string;
}
export class RegistroK935Dto {
    idRegistro: string = "K935";
    periodoApuracao: string;
    codCta: string;
    codCentroCustos?: string | null;
    idRegra: string;
    vlSaldoFinalRecuperadoECD?: string | null;
    indSitSaldoFinalEsperado?: string | null;
    vlSaldoFinalPreenchido?: string | null;
    indSitSaldoFinalPreenchido?: string | null;
    justificativa: string;
}
export class RegistroK990Dto {
    idRegistro: string = "K990";
    qtdRegistros: string;
}