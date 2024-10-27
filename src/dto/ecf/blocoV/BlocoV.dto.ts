import {
    RegistroV001Dto,
    RegistroV010Dto,
    RegistroV020Dto,
    RegistroV030Dto,
    RegistroV100Dto,
    RegistroV990Dto,
} from "./RegistrosV.dto";

export default class BlocoVDto {
    registroV001: RegistroV001Dto;
    registroV010: RegistroV010Dto[];
    registroV020: RegistroV020Dto[];
    registroV030: RegistroV030Dto[];
    registroV100: RegistroV100Dto[];
    registroV990: RegistroV990Dto;
}