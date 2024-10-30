import {
    RegistroT001Dto,
    RegistroT030Dto,
    RegistroT120Dto,
    RegistroT150Dto,
    RegistroT170Dto,
    RegistroT181Dto,
    RegistroT990Dto,
} from "./RegistrosT.dto";

export default class BlocoTDto {
    registroT001: RegistroT001Dto;
    registroT030: RegistroT030Dto[];
    registroT120: RegistroT120Dto[];
    registroT150: RegistroT150Dto[];
    registroT170: RegistroT170Dto[];
    registroT181: RegistroT181Dto[];
    registroT990: RegistroT990Dto;
}