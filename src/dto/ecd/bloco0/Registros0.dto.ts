export class Registro0000Dto {
    idRegistro: string = "0000";
    tpEscrituracao: string = "LECD";
    dtInicial: string;
    dtFinal: string;
    nmEmpresarialPJ: string;
    cnpj: string;
    uf: string;
    inscricaoEstadual?: string | null;
    codMunicipio?: string | null;
    inscricaoMunicipal?: string | null;
    indSitEsp?: string | null;
    indSitInicioPeriodo: string;
    existeNire: string;
    indFinalidadeEscrituracao: string;
    hashEcdSubstituida?: string | null;
    entidadeSujAuditoriaIndependente: string;
    tpEcd: string;
    cnpjScp?: string | null;
    idMoedaFunc: string;
    isEscrituracaoContabilConsolidada: string;
    isEscrituracaoContabilCentralizada: string;
    indMudancaPlanoContas: string;
    codPlanoReferencial?: string | null;
}
export class Registro0001Dto {
    idRegistro: string = "0001";
    indMov: string;
}
export class Registro0007Dto {
    idRegistro: string = "0007";
    codEntidadeRespAdministracaoCadastro: string;
    codCadastralPj?: string | null;
}
export class Registro0020Dto {
    idRegistro: string = "0020";
    indDescentralizacao: string;
    numInscricaoPj: string;
    uf: string;
    inscricaoEstadual?: string | null;
    codMunicipio?: string | null;
    inscricaoMunicipal?: string | null;
    nire?: string | null;
}
export class Registro0035Dto {
    idRegistro: string = "0035";
    cnpjScp: string;
    nmScp?: string | null;
}
export class Registro0150Dto {
    idRegistro: string = "0150";
    idParticipante: string;
    nome: string;
    codPais: string;
    cnpj?: string | null;
    cpf?: string | null;
    nit?: string | null;
    uf?: string | null;
    inscricaoEstadual?: string | null;
    inscricaoEstadualST?: string | null;
    codMunicipio?: string | null;
    inscricaoMunicipal?: string | null;
    suframa?: string | null;
}
export class Registro0180Dto {
    idRegistro: string = "0180";
    codRelacionamento: string;
    dtInicioRelacionamento: string
    dtFinalRelacionamento?: string | null;
}
export class Registro0990Dto {
    idRegistro: string = "0990";
    qtdLinhas: string;
}
