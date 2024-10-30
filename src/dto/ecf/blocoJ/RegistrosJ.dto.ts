export class RegistroJ001Dto {
    idRegistro: string = "J001";
    indMov: string;
}

export class RegistroJ050Dto {
    idRegistro: string = "J050";
    dtAlteracao: string;
    natureza: string;
    tipo: string;
    nivel: string;
    codCta: string;
    codCtaSintNivelImedSup?: string | null;
    nmConta: string;
}

export class RegistroJ051Dto {
    idRegistro: string = "J051";
    codCentroCustos?: string | null;
    codCtaReferencial: string;
}

export class RegistroJ053Dto {
    idRegistro: string = "J053";
    idGrupoCtaSubcta: string;
    codSubctaCorrelata: string;
    naturezaSubctaCorrelata: string;
}

export class RegistroJ100Dto {
    idRegistro: string = "J100";
    dtAlteracao: string;
    codCentroCustos: string;
    nmCentroCustos: string;
}

export class RegistroJ990Dto {
    idRegistro: string = "J990";
    qtdRegistros: string;
}