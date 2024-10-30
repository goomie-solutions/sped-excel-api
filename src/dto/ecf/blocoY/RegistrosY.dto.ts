export class RegistroY001Dto {
    idRegistro: string = "Y001";
    indMov: string;
}
export class RegistroY520Dto {
    idRegistro: string = "Y520"
    tipo: string;
    pais: string;
    formaRecebimentoPagamento: string;
    naturezaOperacao: string;
    vlPeriodo: string;
}
export class RegistroY570Dto {
    idRegistro: string = "Y570";
    cnpjFontePagadora: string;
    nmEmpresarial: string;
    indOrgaoPublico: string;
    codReceita: string;
    impostoRendaRetidoFonte?: string | null;
    contribuicaoSocialRetidaFonte?: string | null;
}
export class RegistroY590Dto {
    idRegistro: string = "Y590";
    tpAtivoExterior: string;
    codPais: string;
    discriminacao: string;
    vlAnterior: string;
    vlAtual: string;
}
export class RegistroY600Dto {
    idRegistro: string = "Y600";
    dtAlteracaoQuadroSocietario: string;
    dtSaidaQuadroSocietario?: string | null;
    paisResidencia: string;
    indQualificacao: string;
    cpfCnpj?: string | null;
    nome: string;
    qualificacao: string;
    percentualParticipacaoCapitalSocial: string;
    percentualParticipacaoCapitalVotante: string;
    cpfRepresentanteLegal?: string | null;
    qualificacaoRepresLegal?: string | null;
    vlRemuneracaoTrabalho: string;
    vlLucrosDividendos: string;
    vlJcp: string;
    vlDemaisRendimentos: string;
    vlImpostoRendaRetido: string;
}
export class RegistroY612Dto {
    idRegistro: string = "Y612";
    cpf: string;
    nome: string;
    qualificacao: string;
    vlRendimentoTrabalho: string;
    vlDemaisRendimentos: string;
    vlImpostoRendaRetido: string;
}
export class RegistroY620Dto {
    idRegistro: string = "Y620";
    dtEvento: string;
    tpRelacionamento: string;
    pais: string;
    cnpjControladaColigada?: string | null;
    nmEmpresarial: string;
    vlParticipacaoReais: string;
    vlParticipacaoMoedaPais: string;
    percentualPartCapitalTotalInvestida: string;
    percentualPartCapitalVotanteInvestida: string;
    resultadoEquivalenciaPatrimonial?: string | null;
    dtAquisicaoPartSocietaria: string;
    indSumarioCartorio: string;
    numRegistroCartorio?: string | null;
    nmCartorio?: string | null;
    laudoProtocoladoRFB: string;
    numProcesso?: string | null;
}
export class RegistroY630Dto {
    idRegistro: string = "Y630";
    cnpj: string;
    qtdQuotistasFinalPeriodo: string;
    qtdQuotasFinalPeriodo: string;
    vlPatrimonioFinalPeriodo: string;
    dtAbertura: string;
    dtEncerramento?: string | null;
}
export class RegistroY640Dto {
    idRegistro: string = "Y640";
    cnpjConsorcio: string;
    condicaoDeclaranteConsorcio: string;
    receitaConsorcio?: string | null;
    cnpjEmpresaLiderConsorcio: string;
    receitaDeclaranteConsorcio: string;
}
export class RegistroY650Dto {
    idRegistro: string = "Y650";
    cnpjParticipanteConsorcio: string;
    receitaParticipanteConsorcio?: string | null;
}
export class RegistroY660Dto {
    idRegistro: string = "Y660";
    cnpjResultanteEvento: string;
    nmEmpresarial: string;
    percentualPartPatrimonioLiquido?: string | null;
}
export class RegistroY672Dto {
    idRegistro: string = "Y672";
    vlCapitalRegAnoAnterior?: string | null;
    vlCapitalRegistrado?: string | null;
    vlEstoquesAnoAnterior?: string | null;
    vlEstoques?: string | null;
    vlCaixaAnoAnterior?: string | null;
    vlCaixa?: string | null;
    vlAplicFinanceirasAnoAnterior?: string | null;
    vlAplicFinanceiras?: string | null;
    vlContasReceberAnoAnterior?: string | null;
    vlContasReceber?: string | null;
    vlContasPagarAnoAnterior?: string | null;
    vlContasPagar?: string | null;
    vlComprasMercadorias?: string | null;
    vlCompraElementosAtivo?: string | null;
    vlReceitas?: string | null;
    totalAtivo?: string | null;
    indAvaliacaoEstoques?: string | null;
}
export class RegistroY680Dto {
    idRegistro: string = "Y680";
    mes: string;
}
export class RegistroY681Dto {
    idRegistro: string = "Y681";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroY682Dto {
    idRegistro: string = "Y682";
    mes: string;
    acrescimoPatrimonialMes: string;
}
export class RegistroY720Dto {
    idRegistro: string = "Y720";
    lucroLiquidoAntesImpostoAnoAnterior: string;
    dtFinalLucroInformado: string;
    receitaBrutaAnoAnterior: string;
    houveTermoIntimacaoRFB: string;
    transmissaoPrazoIntimacao?: string | null;
}
export class RegistroY750Dto {
    idRegistro: string = "Y750";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroY800Dto {
    idRegistro: string = "Y800";
    tpDoc: string;
    descricao: string;
    hash: string;
    arquivoRTF: string;
    indFimArquivoRTF: string = "Y800FIM";
}
export class RegistroY990Dto {
    idRegistro: string = "Y990";
    qtdRegistros: string;
}
