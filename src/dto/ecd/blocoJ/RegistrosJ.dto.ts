export class RegistroJ001Dto {
    idRegistro: string = "J001";
    indMov: string;
}
export class RegistroJ005Dto {
    idRegistro: string = "J005";
    dtInicial: string;
    dtFinal: string;
    idDemonstracao: string;
    cabecalhoDemonstracao?: string | null;
}
export class RegistroJ100Dto {
    idRegistro: string = "J100";
    codAglutinacao: string;
    indTpCodAglutinacao: string;
    nivelCodAglutinacao: string;
    codAglutinacaoSinteticoNivelSuperior?: string | null;
    indGrupoBalanco: string;
    nmCodAglutinacao: string;
    vlInicial: string;
    indSituacaoInicial: string;
    vlFinal: string;
    indSituacaoFinal: string;
    refNumeracaoNE?: string | null;
}
export class RegistroJ150Dto {
    idRegistro: string = "J150";
    numOrdemVisualicao: string;
    codAglutinacao?: string | null;
    indTpCodAglutinacao: string;
    nivelCodAglutinacao: string;
    codAglutinacaoSinteticoNivelSuperior?: string | null;
    nmCodAglutinacao: string;
    vlSaldoFinalPeriodoImediatamenteAnterior?: string | null;
    indSitSaldoFinalPeriodoImediatamenteAnterior?: string | null;
    vlFinalAntesEncerramento: string;
    indSitSaldoFinalAntesEncerramento: string;
    grupoDre: string;
    refNumeracaoNotaExplicativa?: string | null;
}
export class RegistroJ210Dto {
    idRegistro: string = "J210";
    tpDemonstracao: string;
    codAglutinacao: string;
    nmCodigoAglutinacao: string;
    saldoInicial: string;
    situacaoSaldoInicial: string;
    saldoFinal: string;
    situacaoSaldoFinal: string;
    refNumeracaoNotasExplicativas?: string | null;
}
export class RegistroJ215Dto {
    idRegistro: string = "J215";
    codHistoricoFatoContabil: string;
    descricaoFatoContabil: string;
    vlFatoContabil: string;
    situacaoSaldoFatoContabil: string;
}
export class RegistroJ800Dto {
    idRegistro: string = "J800";
    tpDoc: string;
    descricaoArquivoRTF?: string | null;
    hashArquivoRTF?: string | null;
    arqRTF: string;
    indFimRTF: string;
}
export class RegistroJ801Dto {
    idRegistro: string = "J801";
    tpDoc: string;
    descRTF?: string | null;
    codMotivoSubstituição: string;
    hashRTF?: string | null;
    arqRTF: string;
    fimRTF: string;
}
export class RegistroJ900Dto {
    idRegistro: string = "J900";
    txtFixoEncerramento: string = "TERMO DE ENCERRAMENTO";
    numOrdem: string;
    naturezaLivro: string;
    nomeEmpresarial: string;
    qtdTotalLinhasArquivoDigital: string;
    dtInicial: string;
    dtFinal: string;
}
export class RegistroJ930Dto {
    idRegistro: string = "J930";
    nmSignatario: string;
    cpfCnpj: string;
    qualificacaoAssinante: string;
    codQualificacaoAssinante: string;
    crc?: string | null;
    email?: string | null;
    telefone?: string | null;
    ufCRC?: string | null;
    sequencialCRC?: string | null;
    dtValidadeCRC?: string | null;
    isResponsavelAssinatura: string;
}
export class RegistroJ932Dto {
    idRegistro: string = "J932";
    nmSignatario: string;
    cpfCnpj: string;
    qualificacaoAssinante: string;
    codQualificacaoAssinante: string;
    crc?: string | null;
    email?: string | null;
    telefone?: string | null;
    ufCRC?: string | null;
    sequencialCRC?: string | null;
    dtValidadeCRC?: string | null;
}
export class RegistroJ935Dto {
    idRegistro: string = "J935";
    cpfCnpj: string;
    nomeAuditor: string;
    registroAuditorCVM?: string | null;
}
export class RegistroJ990Dto {
    idRegistro: string = "J990";
    qtdRegistros: string;
}