export class RegistroW001Dto {
    idRegistro: string = "W001";
    indMov: string;
}
export class RegistroW100Dto {
    idRegistro: string = "W100";
    nmMultinacional: string;
    isControladora: string;
    nmControladoraFinal: string;
    jurisdicaoControladora: string;
    taxIdentificationNumber: string;
    responsavelEntregaDeclaracaoPais: string;
    modalidadeEntregaDeclaracaoPais: string;
    nmEntidadeSubstituta?: string | null;
    jurisdicaoSubstituta?: string | null;
    taxIdentificationNumberSubstituta?: string | null;
    dtInicioPeriodoSocietario?: string | null;
    dtFimPeriodoSocietario?: string | null;
    tpMoeda?: string | null;
    indIdioma?: string | null;
}
export class RegistroW200Dto {
    idRegistro: string = "W200";
    jurisdicao: string;
    receitasPartesNaoRelacionadasMoedaEstrangeira: string;
    receitasPartesNaoRelacionadas: string;
    receitasPartesRelacionadasMoedaEstrangeira: string;
    receitasPartesRelacionadas: string;
    receitaTotalMoedaEstrangeira: string;
    receitaTotal: string;
    lairMoedaEstrangeira: string;
    lair: string;
    impostoRendaPgMoedaEstrangeira: string;
    impostoRendaPg: string;
    impostoRendaDevidoMoedaEstrangeira: string;
    impostoRendaDevido: string;
    capitalSocialMoedaEstrangeira: string;
    capitalSocial: string;
    lucrosAcumuladosMoedaEstrangeira: string;
    lucrosAcumulados: string;
    ativosTangiveisMoedaEstrangeira: string;
    ativosTangiveis: string;
    numEmpregados: string;
}
export class RegistroW250Dto {
    idRegistro: string = "W250";
    jurisdicaoTribOrgIncorpDiff?: string | null;
    nmEntidadeIntegrante: string;
    taxIdentificationNumber: string;
    jurisdicaoDeEmissaoTaxIdentificationNumber: string;
    NI?: string | null;
    jurisdicaoEmissaoNI?: string | null;
    tpNI?: string | null;
    tpEndereco: string;
    endereco: string;
    numTelefone?: string | null;
    email?: string | null;
    ativPesqDesenv: string;
    ativGestapPropIntelec: string;
    ativCompras: string;
    ativManufaturaProducao: string;
    ativVendasMarketingDaribuicao: string;
    ativServAdminGestaoSuporte: string;
    ativPrestServPartesNaoRelacionadas: string;
    ativDeptoFinanceiroGrupo: string;
    ativServFinanceirosRegulamentados: string;
    ativSeguro: string;
    ativGestaoAcoesOutrosInstrumentosCapital: string;
    ativInativa: string;
    ativOutros: string;
    descricaoAtivEconomicaDesempenhada?: string | null;
    observacao?: string | null;
}
export class RegistroW300Dto {
    idRegistro: string = "W300";
    jurisdicao?: string | null;
    isReceitasProvPartesNaoRelaciodas?: string | null;
    isReceitasProvPartesRelaciodas?: string | null;
    isReceitaTotal?: string | null;
    isLucroPrejAntesIR?: string | null;
    isImpostoRendaPg?: string | null;
    isImpostoRendaDevido?: string | null;
    isCapitalSocial?: string | null;
    isLucrosAcumulados?: string | null;
    isAtivosTangiveis?: string | null;
    isNumEmpregados?: string | null;
    observacao: string;
    fimObservacao: string;
}
export class RegistroW990Dto {
    idRegistro: string = "W990";
    qtdRegistros: string;
}