import { RegistroC001Dto,
    RegistroC040Dto,
    RegistroC050Dto,
    RegistroC051Dto,
    RegistroC053Dto,
    RegistroC100Dto,
    RegistroC150Dto,
    RegistroC155Dto,
    RegistroC157Dto,
    RegistroC350Dto,
    RegistroC355Dto,
    RegistroC990Dto } from "./RegistrosC.dto";

export default class BlocoCDto {
    registroC001: RegistroC001Dto;
    registroC040: RegistroC040Dto[] | null;
    registroC050: RegistroC050Dto[] | null;
    registroC051: RegistroC051Dto[] | null;
    registroC053: RegistroC053Dto[] | null;
    registroC100: RegistroC100Dto[] | null;
    registroC150: RegistroC150Dto[] | null;
    registroC155: RegistroC155Dto[] | null;
    registroC157: RegistroC157Dto[] | null;
    registroC350: RegistroC350Dto[] | null;
    registroC355: RegistroC355Dto[] | null;
    registroC990: RegistroC990Dto;
}