import {
    RegistroK001Dto,
    RegistroK030Dto,
    RegistroK155Dto,
    RegistroK156Dto,
    RegistroK355Dto,
    RegistroK356Dto,
    RegistroK915Dto,
    RegistroK935Dto,
    RegistroK990Dto,
} from "./RegistrosK.dto"

export default class BlocoKDto {
    registroK001: RegistroK001Dto;
    registroK030: RegistroK030Dto[];
    registroK155: RegistroK155Dto[];
    registroK156: RegistroK156Dto[];
    registroK355: RegistroK355Dto[];
    registroK356: RegistroK356Dto[];
    registroK915: RegistroK915Dto[];
    registroK935: RegistroK935Dto[];
    registroK990: RegistroK990Dto;
}