export class RegistroU001Dto {
    idRegistro: string = "U001";
    indMov: string;
}
export class RegistroU030Dto {
    idRegistro: string = "U030";
    dtInicial: string;
    dtFinal: string;
    perApuracao: string;
}
export class RegistroU100Dto {
    idRegistro: string = "U100";
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
export class RegistroU150Dto {
    idRegistro: string = "U150";
    codCtaReferencial: string;
    nmContaReferencial?: string | null;
    tipo: string;
    nivel?: string | null;
    natureza?: string | null;
    codCtaSintNivelImeSup?: string | null;
    saldoFinal: string;
    indSitSaldoFinal: string;
}
export class RegistroU180Dto {
    idRegistro: string = "U180";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroU182Dto {
    idRegistro: string = "U182";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroU990Dto {
    idRegistro: string = "U990";
    qtdRegistros: string;
}