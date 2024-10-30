import {
    RegistroJ001Dto,
    RegistroJ050Dto,
    RegistroJ051Dto,
    RegistroJ053Dto,
    RegistroJ100Dto,
    RegistroJ990Dto
} from "./RegistrosJ.dto";

export default class BlocoJDto {
    registroJ001: RegistroJ001Dto;
    registroJ050: RegistroJ050Dto[];
    registroJ051: RegistroJ051Dto[];
    registroJ053: RegistroJ053Dto[];
    registroJ100: RegistroJ100Dto[];
    registroJ990: RegistroJ990Dto;
}