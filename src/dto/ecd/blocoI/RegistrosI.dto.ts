export class RegistroI001Dto {
    idRegistro: string = "I001";
    indMov: string;
}
export class RegistroI010Dto {
    idRegistro: string = "I010";
    indFormaEscrituracao: string;
    codVersaoLayout: string;
}
export class RegistroI012Dto {
    idRegistro: string = "I012";
    numOrdem: string;
    naturezaLivro: string;
    tipoEscrituracao: string;
    hashAuxiliar?: string;
}
export class RegistroI015Dto {
    idRegistro: string = "I015";
    codCtaResumida: string;
}
export class RegistroI020Dto {
    idRegistro: string = "I020";
    codRegistro: string;
    numSeqCampoAdicional: string;
    nmCampoAdicional: string;
    descricaoCampoAdicional?: string | null;
    indTipoDado: string;
}
export class RegistroI030Dto {
    idRegistro: string = "I030";
    nomeRegistro: string = "TERMO DE ABERTURA";
    numOrdem: string;
    naturezaLivro: string;
    qtdTotalLinhas: string;
    nomeEmpresarial: string;
    nire?: string | null;
    cnpj: string;
    dtArqAtosConst?: string | null;
    dtArqConv?: string | null;
    municipio?: string | null;;
    dtEncerramentoExercicioSocial: string;
}
export class RegistroI050Dto {
    idRegistro: string = "I050";
    dtAlteracao: string;
    natureza: string;
    tipo: string;
    nivel: string;
    codCta: string;
    codCtaSintImedSup?: string | null;
    nmConta: string;
}
export class RegistroI051Dto {
    idRegistro: string = "I051";
    codCentroCustos?: string | null;
    codCtaReferencial: string;
}
export class RegistroI052Dto {
    idRegistro: string = "I052";
    codCentroCustos?: string | null;
    codAglutinacao: string;
}
export class RegistroI053Dto {
    idRegistro: string = "I053";
    idGrupoSubconta: string;
    codSubcontaCorrelata: string;
    natureza: string;
}
export class RegistroI075Dto {
    idRegistro: string = "I075";
    codHistoricoPadrao: string;
    descricaoHistoricoPadrao: string;
}
export class RegistroI100Dto {
    idRegistro: string = "I100";
    dtAlteracao: string;
    codCentroCustos: string;
    nmCentroCustos: string;
}
export class RegistroI150Dto {
    idRegistro: string = "I150";
    dtInicial: string;
    dtFinal: string;
}
export class RegistroI155Dto {
    idRegistro: string = "I155";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoInicial: string;
    indSitSaldoInicial?: string | null;
    vlDebitos: string;
    vlCreditos: string;
    vlSaldoFinal: string;
    indSitSaldoFinal?: string | null;
}
export class RegistroI157Dto {
    idRegistro: string = "I157";
    codCta: string;
    codCentroCustos?: string | null;
    vlSaldoInicial: string;
    indSitSaldoInicial: string;
}
export class RegistroI200Dto {
    idRegistro: string = "I200";
    numLancto: string;
    dtLancto: string;
    vlLancto: string;
    tpLancto: string;
    dtLanctoExtemporaneo?: string | null;
}
export class RegistroI250Dto {
    idRegistro: string = "I250";
    codCta: string;
    codCentroCustos?: string | null;
    vlPartida: string;
    naturezaPartida: string;
    numArquivo?: string | null;
    codHistoricoPadrao?: string | null;
    historico: string;
    codParticipante?: string;
}
export class RegistroI300Dto {
    idRegistro: string = "I300";
    dtBalancete: string;
}
export class RegistroI310Dto {
    idRegistro: string = "I310";
    codCta: string;
    codCentroCustos?: string | null;
    vlDebitos: string;
    vlCreditos: string;
}
export class RegistroI350Dto {
    idRegistro: string = "I350";
    dtApuracaoResultado: string;
}
export class RegistroI355Dto {
    idRegistro: string = "I355";
    codCta: string;
    codCentroCustos?: string | null;
    vlCta: string;
    indSitSaldoFinal: string;
}
export class RegistroI500Dto {
    idRegistro: string = "I500";
    tamFonte: string;
}
export class RegistroI510Dto {
    idRegistro: string = "I510";
    nmCampo: string;
    descricaoCampo: string;
    tpCampo: string;
    tamCampo: string;
    decimaisCampo?: string | null;
    larguraColRel: string;
}
export class RegistroI550Dto {
    idRegistro: string = "I550";
    conteudoCampos?: string | null;
}
export class RegistroI555Dto {
    idRegistro: string = "I555";
    conteudoCampos?: string | null;
}
export class RegistroI990Dto {
    idRegistro: string = "I990";
    qtdRegistros: string;
}