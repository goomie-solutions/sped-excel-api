import {
    RegistroL001Dto,
    RegistroL030Dto,
    RegistroL100Dto,
    RegistroL200Dto,
    RegistroL210Dto,
    RegistroL300Dto,
    RegistroL990Dto
} from "./RegistrosL.dto";

export default class BlocoLDto {
    registroL001: RegistroL001Dto;
    registroL030: RegistroL030Dto[];
    registroL100: RegistroL100Dto[];
    registroL200: RegistroL200Dto[];
    registroL210: RegistroL210Dto[];
    registroL300: RegistroL300Dto[];
    registroL990: RegistroL990Dto;
}