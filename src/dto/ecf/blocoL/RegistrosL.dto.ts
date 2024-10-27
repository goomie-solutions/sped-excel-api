export class RegistroL001Dto {
    idRegistro: string = "L001";
    indMov: string;
}
export class RegistroL030Dto {
    idRegistro: string = "L030";
    dtInicial: string;
    dtFinal: string;
    periodoApuracao: string;
}
export class RegistroL100Dto {
    idRegistro: string = "L100";
    codCtaReferencial: string;
    nmContaReferencial?: string | null;
    tipo: string;
    nivel?: string | null;
    natureza?: string | null;
    codCtaSintNivelImeSup?: string | null;
    saldoInicial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    saldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroL200Dto {
    idRegistro: string = "L200";
    metodoAvaliacaoEstoque: string;
}
export class RegistroL210Dto {
    idRegistro: string = "L210";
    codCtaCustos: string;
    nmCtaCustos?: string | null;
    saldoFinalCtaCustos?: string | null;
}
export class RegistroL300Dto {
    idRegistro: string = "L300";
    codCtaReferencial: string;
    nmContaReferencial?: string | null;
    tipo: string;
    nivel?: string | null;
    natureza?: string | null;
    codCtaSintNivelImeSup?: string | null;
    saldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroL990Dto {
    idRegistro: string = "L990";
    qtdRegistros: string;
}