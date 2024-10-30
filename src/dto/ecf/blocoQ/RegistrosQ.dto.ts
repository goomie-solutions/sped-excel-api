export class RegistroQ001Dto {
    idRegistro: string = "Q001";
    indMov: string;
}
export class RegistroQ100Dto {
    idRegistro: string = "Q100";
    dt: string;
    numDoc?: string | null;
    historico: string;
    vlEntradaRecursos?: string | null;
    vlSaidaRecursos?: string | null;
    saldoFinal: string;
}
export class RegistroQ990Dto {
    idRegistro: string = "Q990";
    qtdRegistros: string;
}