import {
    RegistroW001Dto,
    RegistroW100Dto,
    RegistroW200Dto,
    RegistroW250Dto,
    RegistroW300Dto,
    RegistroW990Dto,
} from "./RegistrosW.dto";

export default class BlocoWDto {
    registroW001: RegistroW001Dto;
    registroW100: RegistroW100Dto;
    registroW200: RegistroW200Dto[];
    registroW250: RegistroW250Dto[];
    registroW300: RegistroW300Dto[];
    registroW990: RegistroW990Dto;
}