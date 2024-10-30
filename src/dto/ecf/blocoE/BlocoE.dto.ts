import {
    RegistroE001Dto,
    RegistroE010Dto,
    RegistroE015Dto,
    RegistroE020Dto,
    RegistroE030Dto,
    RegistroE155Dto,
    RegistroE355Dto,
    RegistroE990Dto
} from "./RegistrosE.dto";

export default class BlocoEDto {
    registroE001: RegistroE001Dto;
    registroE010: RegistroE010Dto[];
    registroE015: RegistroE015Dto[];
    registroE020: RegistroE020Dto[];
    registroE030: RegistroE030Dto[];
    registroE155: RegistroE155Dto[];
    registroE355: RegistroE355Dto[];
    registroE990: RegistroE990Dto;
}