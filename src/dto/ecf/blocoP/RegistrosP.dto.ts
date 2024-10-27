export class RegistroP001Dto {
    idRegistro: string = "P001";
    indMov: string;
}
export class RegistroP030Dto {
    idRegistro: string = "P030";
    dtInicial: string;
    dtFinal: string;
    perApuracao: string;
}
export class RegistroP100Dto {
    idRegistro: string = "P100";
    codCtaReferencial: string;
    nmCtaReferencial?: string | null;
    tpCtaReferencial: string;
    nivelCtaReferencial?: string | null;
    naturezaCtaReferencial?: string | null;
    codCtaSintImedSup?: string | null;
    saldoInicialCtaReferencial: string;
    indSitSaldoInicial: string;
    vlDebitos: string;
    vlCreditos: string;
    saldoFinalCtaReferencial: string;
    indSitSaldoFinal: string;
}
export class RegistroP130Dto {
    idRegistro: string = "P130";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroP150Dto {
    idRegistro: string = "P150";
    codCtaReferencial: string;
    nmCtaReferencial?: string | null;
    tpCtaReferencial: string;
    nivelCtaReferencial?: string | null;
    naturezaCtaReferencial?: string | null;
    codCtaSintImedSup?: string | null;
    saldoFinalCtaReferencial: string;
    indSitSaldoFinal: string;
}
export class RegistroP200Dto {
    idRegistro: string = "P200";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroP230Dto {
    idRegistro: string = "P230";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroP300Dto {
    idRegistro: string = "P300";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroP400Dto {
    idRegistro: string = "P400";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroP500Dto {
    idRegistro: string = "P500";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroP990Dto {
    idRegistro: string = "P990";
    qtdRegistros: string;
}