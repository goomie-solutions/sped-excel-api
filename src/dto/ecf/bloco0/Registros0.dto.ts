export class Registro0000Dto {
    idRegistro: string = "0000";
    nmEscrituracao: string = "LECF";
    codVersaoLayout: string;
    cnpj: string;
    nome: string;
    indInicioPeriodo: string;
    situacaoEspecial: string;
    patrRemCisao: string;
    dtSituacaoEspecial: string;
    dtInicial: string;
    dtFinal: string;
    isRetificadora: string;
    numReciboEcfAnterior: string;
    tpEcf: string;
    cnpjScp: string;
}

export class Registro0001Dto {
    idRegistro: string = "0001";
    indMovimento: string;
}

export class Registro0010Dto {
    idRegistro: string = "0010";
    hashEcfImedAnterior: string;
    isOptanteRefis: string;
    formaTributacao: string;
    formaApuracao: string;
    qualificacaoPj: string;
    formaTributacaoPeriodo: string;
    formaApuracaoEstimativaMensal: string;
    tpEscrituracao: string;
    tpPjImuneIsenta: string;
    formaApuracaoIrpjImuneIsenta: string;
    formaApuracaoCsllImuneIsenta: string;
    critReconhecimentoReceitaLucroPresumido: string;
}

export class Registro0020Dto {
    idRegistro: string = "0020";
    indAliquotaCsll: string;
    qtdTotalScp: string;
    indAdmFundoInvestimento: string;
    indPartConsorcio: string;
    indOperacoesExterior: string;
    indOperacoesVinc: string;
    indPjEnquadrada: string;
    indParticipacoesExterior: string;
    indAtividadeRural: string;
    indLucroExploracao: string;
    indReducaoIsencaoImpostoLucroPresumido: string;
    indExistenciaFinorFinam: string;
    indParticipacaoAvaliadaEquivPatr: string;
    indRectosExteriorNaoResidentes: string;
    indAtivosExterior: string;
    indPgtosExteriorNaoResidentes: string;
    indComEletrTi: string;
    indRoyaltiesRecebidosBrasilExterior: string;
    indRoyaltiesPagosBrasilExterior: string;
    indRendServJurosDividendosRecebidosBrasilExterior: string;
    indPgtosRemessasServJurosDividendosBrasilExterior: string;
    indInovacaoTecnologica: string;
    indCapacitacaoInformaticaInclDgt: string;
    indPjHabilitada: string;
    indPoloIndustrialManausAmazoniaOcidental: string;
    indZonasProcessamentoExportacao: string;
    indAreaLivreComercio: string;
    indEntidadeGrupoMultinacional: string;
    indDerex: string;
    indOpcaoNovasRegrasPrecoTransf: string;
}

export class Registro0021Dto {
    idRegistro: string = "0021";
    indRepes: string;
    indRecap: string;
    indPadis: string;
    indReidi: string;
    indRecine: string;
    indRetid: string;
    indOleoBunker: string;
    indReporto: string;
    indRetII: string;
    indRetPmcmv: string;
    indRetEei: string;
    indEbas: string;
    indRepetroIndustrializacao: string;
    indRepetroNacional: string;
    indRepetroPermanente: string;
    indRepetroTemporario: string;
}

export class Registro0030Dto {
    idRegistro: string = "0030";
    codNaturezaPj: string;
    cnae: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    uf: string;
    codMunicipio: string;
    cep: string;
    numTelefone: string;
    email: string;
}

export class Registro0035Dto {
    idRegistro: string = "0035";
    cnpjScp: string;
    nmScp: string;
}

export class Registro0930Dto {
    idRegistro: string = "0930";
    nmSignatario: string;
    identCpfCnpjSignatario: string;
    qualificacaoAssinante: string;
    crc: string;
    email: string;
    telefone: string;
}

export class Registro0990Dto {
    idRegistro: string = "0990";
    qtdRegistros: string;
}