export class RegistroK001Dto {
    idRegistro: string = "K001";
    indMov: string;
}
export class RegistroK030Dto {
    idRegistro: string = "K030";
    dtInicial: string;
    dtFinal: string
}
export class RegistroK100Dto {
    idRegistro: string = "K100";
    codPais: string;
    codIdentificacaoEmpresaParticipante: string;
    cnpj?: string;
    nomeEmpresarial: string;
    percentualParticipacao: string;
    eventoSocietario: string;
    percentualConsolidacao: string;
    dtInicial: string;
    dtFinal: string;
}
export class RegistroK110Dto {
    idRegistro: string = "K110";
    evento: string;
    dtEvento: string;
}
export class RegistroK115Dto {
    idRegistro: string = "K115";
    codEmpresaEnvolvida: string;
    condicaoEmpresaEnvolvida: string;
    percentualEmpresaEnvolvida: string;
}
export class RegistroK200Dto {
    idRegistro: string = "K200";
    natureza: string;
    tipo: string;
    nivel: string;
    codCta: string;
    codCtaSuperior?: string | null;
    nmCta: string;
}
export class RegistroK210Dto {
    idRegistro: string = "K210";
    codIdentificaoEmpresaParticipante: string;
    codCtaEmpresaParticipante: string;
}
export class RegistroK300Dto {
    idRegistro: string = "K300";
    codCtaConsolidada: string;
    vlAbsolutoAglutinado: string;
    sitValorAglutinado: string;
    vlAbsolutoEliminacoes: string;
    sitValorEliminacoes: string;
    vlAbsolutoConsolidado: string;
    sitValorAbsolutoConsolidado: string;
}
export class RegistroK310Dto {
    idRegistro: string = "K310";
    codEmpresaDetentoraValorAglutinado: string;
    parcelaValorEliminado: string;
    sitValorEliminado: string;
}
export class RegistroK315Dto {
    idRegistro: string = "K315";
    codEmpresaContrapartida: string;
    codCtaConsolidadaContrapartida: string;
    parcelaContrapartidaValorEliminado: string;
    sitValorEliminado: string;
}
export class RegistroK990Dto {
    idRegistro: string = "K990";
    qtdRegistros: string;
}