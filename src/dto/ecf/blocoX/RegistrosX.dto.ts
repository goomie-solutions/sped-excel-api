export class RegistroX001Dto {
    idRegistro: string = "X001";
    indMov: string;
}
export class RegistroX280Dto {
    idRegistro: string = "X280";
    beneficioFiscal: string;
    orgaoConcessorIsencaoReducao: string;
    projeto: string;
    atoConcessorio: string;
    inicioPrazoVigencia: string;
    fimPrazoVigencia: string;
    cnpjIncentivo: string;
    ncmIncentivo?: string | null;
    receitaLiquidaIncentivo: string;
    vlIncentivo?: string | null;
}
export class RegistroX291Dto {
    idRegistro: string = "X291";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX292Dto {
    idRegistro: string = "X292";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX300Dto {
    idRegistro: string = "X300";
    numOrdemOperacoes: string;
    tpExportacoes: string;
    descricaoExportacoes?: string | null;
    totalOperacoes?: string | null;
    codNCM?: string | null;
    quantidade?: string | null;
    unidadeMedida?: string | null;
    isOperSujArbitramento?: string | null;
    tpMetodoDetPrecoParametro?: string | null;
    operacoesParametro?: string | null;
    descricaoBensParametro?: string | null;
    idPartesEnvolvidas?: string | null;
    tpItensCalculoPrecoParametro?: string | null;
    dtUtilizadaCalcPrecoParametro?: string | null;
    criteriosPrecoParametro?: string | null;
    dtTransacao?: string | null;
    dtEmbarque?: string | null;
    fonteCotacao?: string | null;
    ajustesPrecoParametro?: string | null;
    precoParametro?: string | null;
    precoPraticado?: string | null;
    qtdAjustadaPeriodoApuracao?: string | null;
    vlAjusteSerAdicionado?: string | null;
    vlCotacao?: string | null;
    numDeclaracaoUnicaExportacao?: string | null;
    dtEntregaPrevista?: string | null;
    juros?: string | null;
    txJurosMin?: string | null;
    txJurosMax?: string | null;
    codCNC?: string | null;
    tpMoeda?: string | null;
}
export class RegistroX305Dto {
    idRegistro: string = "X305";
    tpAjustesPrecoParametro: string;
    descricaoOutrosAjustes?: string | null;
    vlAjusteEmReais: string;
    fonteAjuste: string;
}
export class RegistroX310Dto {
    idRegistro: string = "X310";
    nmContratanteTransacaoDomiciliadaExterior: string;
    pais: string;
    vlOperacao: string;
    condicaoPessoaEnvolvidaOperacao: string;
}
export class RegistroX320Dto {
    idRegistro: string = "X320";
    numOrdem: string;
    tpImportacoes: string;
    descricao?: string | null;
    totalOperacao?: string | null;
    codNCM?: string | null;
    qtd?: string | null;
    unidadeMedida?: string | null;
    tpMetodo?: string | null;
    codInventarioInsumoProdutoImportado?: string | null;
    utilizacaoInsumoProdutoImportado?: string | null;
    operacoesApuracaoPrecoParametro?: string | null;
    itensSelecApurPrecoParametro?: string | null;
    idPartesEnvolvidas?: string | null;
    tpItensCalculoPrecoParametro?: string | null;
    dtUtilizadaCalculoPrecoParametro?: string | null;
    criteriosDeterminacaoPrecoParametro?: string | null;
    dtTransacao?: string | null;
    dtRegistroDUIMP?: string | null;
    fonteCotacao?: string | null;
    ajustesPrecoParametro?: string | null;
    precoParametro?: string | null;
    precoPraticado?: string | null;
    qtdAjustadaPeriodoApuracao?: string | null;
    vlAjusteSerAdicionado?: string | null;
    vlCotacao?: string | null;
    numDUIMP?: string | null;
    dtEntregaPrevista?: string | null;
    juros?: string | null;
    txJurosMin?: string | null;
    txJurosMax?: string | null;
    codCNC?: string | null;
    tpMoeda?: string | null;
}
export class RegistroX325Dto {
    idRegistro: string = "X325";
    tpAjustesPrecoParametro: string;
    descricaoOutrosAjustes?: string | null;
    vlAjusteEmReais: string;
    fonteAjuste: string;
}
export class RegistroX330Dto {
    idRegistro: string = "X330";
    nmContratanteTransacaoDomiciliadaExterior: string;
    pais: string;
    vlOperacao: string;
    condicaoPessoaEnvolvidaOperacao: string;
}
export class RegistroX340Dto {
    idRegistro: string = "X340";
    razaoSocial: string;
    numIdentificacaoFiscal: string;
    indControle: string;
    pais: string;
    indProspecExplPetroleoGas: string;
    indConsolidacao: string;
    motivoNaoConsolidacao?: string | null;
    cnpjInvestidaBrasil?: string | null;
    tpMoedaPaisDomicilio: string;
}
export class RegistroX350Dto {
    idRegistro: string = "X350";
    receitaLiquida: string;
    custosBensServicosVendidos: string;
    lucroBruto: string;
    receitasFinanceirasAuferidas: string;
    outrasReceitasOperacionais: string;
    despesasFinanceiraAuferidas: string;
    despesasOperacionais: string;
    lucroOperacional: string;
    receitasParticipacoes: string;
    outrasReceitas: string;
    outrasDespesas: string;
    lucroLiquidoAntesImpostoRenda: string;
    lucroArbitradoAntesImpostoRenda: string;
    impostoDevido: string;
    lucroLiquidoPeriodo: string;
}
export class RegistroX351Dto {
    idRegistro: string = "X351";
    resultInvestidaMoedaPaisDomicilio: string;
    resultInvestidaReais: string;
    resultInvestidaOperacoesIsencaoPetroleoGasMoedaPaisDomicilio: string;
    resultInvestidaOperacoesIsencaoPetroleoGasReais: string;
    resultNegativoAcumuladoAnosAnteriores: string;
    resultPositivoTributarMoedaPaisDomicilio: string;
    resultPositivoTributarReais: string;
    impEfetPgMoedaPaisDomicilio: string;
    impEfetPgReais: string;
    impEfetPgExteriorRendRecebidosMoedaPaisDomicilio: string;
    impEfetPgExteriorRendRecebidosReais: string;
    impRetidoFonteExterior: string;
    impRetidoFonteExteriorReais: string;
    impRetidoFonteBrasil: string;
}
export class RegistroX352Dto {
    idRegistro: string = "X352";
    resultPeriodoMoedaPaisDomicilio: string;
    resultPeriodoReais: string;
    lucroDispPeriodoMoedaPaisDomicilio: string;
    lucroDispPeriodoReais: string;
}
export class RegistroX353Dto {
    idRegistro: string = "X353";
    resultNegUtilConsolidacaoMoedaPaisDomicilio: string;
    resultNegUtilConsolidacaoReais: string;
    saldoResultNegNaoUtilMoedaPaisDomicilio: string;
    saldoResultNegNaoUtilMoedaPaisReais: string;
    resultProprioControladaMoedaPaisReais: string;
    resultProprioControladaReais: string;
}
export class RegistroX354Dto {
    idRegistro: string = "X354";
    resultNegPerAntMoedaPaisDomicilio: string;
    resultNegPerAntReais: string;
    saldoResultNegAcumMoedaPaisDomicilio: string;
}
export class RegistroX355Dto {
    idRegistro: string = "X355";
    rendaPassivaPropriaMoedaPaisDomicilio: string;
    rendaPassivaPropriaReais: string;
    rendaTotalMoedaPaisDomicilio: string;
    rendaTotalReais: string;
    rendaAtivaPropriaMoedaPaisDomicilio: string;
    rendaAtivaPropriaReais: string;
    percentual: string;
}
export class RegistroX356Dto {
    idRegistro: string = "X356";
    percentualPartInvestidoraDireta: string;
    ativoTotal: string;
    patrimonioLiquido: string;
}
export class RegistroX357Dto {
    idRegistro: string = "X357";
    pais: string;
    nifCnpj: string;
    razaoSocial: string;
    percentual: string;
}
export class RegistroX360Dto {
    idRegistro: string = "X360";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX365Dto {
    idRegistro: string = "X365";
    codIdentidade: string;
    nmEntidade?: string | null;
}
export class RegistroX366Dto {
    idRegistro: string = "X366";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX370Dto {
    idRegistro: string = "X370";
    idEntidade: string;
    codTpTransacao: string;
    nmEntidade: string;
    pais: string;
    codNCM?: string | null;
    tpDemais?: string | null;
    descricaoTransacaoControlada: string;
    vlTransacao: string;
    indAjustes: string;
    vlAjusteEspontaneo: string;
    vlAjusteCompensatorio: string;
    tpAjusteCompensatorio?: string | null;
    metodoPrecosTransferencia: string;
    descricaoMetodoPrecosTransferencia?: string | null;
    compensacaoIntencional: string;
    efeitoSinergia: string;
    transacaoCombOutraTransacao: string;
    utilDadosMultiplosAnos: string;
    medidaSimplificacao: string;
}
export class RegistroX371Dto {
    idRegistro: string = "X371";
    codCta: string;
    codCentroCustos?: string | null;
    valor: string;
    indValor: string;
}
export class RegistroX375Dto {
    idRegistro: string = "X375";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX390Dto {
    idRegistro: string = "X390";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX400Dto {
    idRegistro: string = "X400";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX410Dto {
    idRegistro: string = "X410";
    pais: string;
    indHomePageDisp: string;
    indDispServidor: string;
}
export class RegistroX420Dto {
    idRegistro: string = "420";
    tpRoyalties: string;
    pais: string;
    vlExploracaoSw?: string | null;
    vlExploracaoAut?: string | null;
    vlExploracaoMarca?: string | null;
    vlExploracaoPat?: string | null;
    vlExploracaoKnow?: string | null;
    vlExploracaoFranq?: string | null;
    vlExploracaoInt?: string | null;
}
export class RegistroX430Dto {
    idRegistro: string = "X430";
    pais: string;
    vlServicosAssist?: string | null;
    vlServicosSemAssist?: string | null;
    vlServicosSemAssistExt?: string | null;
    vlJcp?: string | null;
    vlDemaisJuros?: string | null;
    vlDividendos?: string | null;
}
export class RegistroX450Dto {
    idRegistro: string = "X450";
    pais: string;
    vlServicosAssist?: string | null;
    vlServicosSemAssist?: string | null;
    vlServicosSemAssistExt?: string | null;
    vlJcpPagoPF?: string | null;
    vlJcpPagoPJ?: string | null;
    vlDemaisJuros?: string | null;
    vlDividendosPagoPF?: string | null;
    vlDividendosPagoPJ?: string | null;
}
export class RegistroX460Dto {
    idRegistro: string = "X460";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX470Dto {
    idRegistro: string = "X470";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX480Dto {
    idRegistro: string = "X480";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX485Dto {
    idRegistro: string = "X485";
    tpBeneficio: string;
    numAtoDeclaratorio: string;
    cnpjIncorporadoraAfetada?: string | null;
    idObra2018?: string | null;
    idObra2020?: string | null;
    idObraEEi?: string | null;
    portCEBAS?: string | null;
    dtPublicacaoPortCEBAS?: string | null;
    dtInicioVigencia?: string | null;
    dtFimVigencia?: string | null;
}
export class RegistroX490Dto {
    idRegistro: string = "X490";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX500Dto {
    idRegistro: string = "X500";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX510Dto {
    idRegistro: string = "X510";
    codigo: string;
    descricao?: string | null;
    valor?: string | null;
}
export class RegistroX990Dto {
    idRegistro: string = "X990";
    qtdRegistros: string;
}