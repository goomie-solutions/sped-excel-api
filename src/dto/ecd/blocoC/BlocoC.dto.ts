import {
    RegistroC001Dto,
    RegistroC040Dto,
    RegistroC050Dto,
    RegistroC051Dto,
    RegistroC052Dto,
    RegistroC150Dto,
    RegistroC155Dto,
    RegistroC600Dto,
    RegistroC650Dto,
    RegistroC990Dto,
} from "./RegistrosC.dto";

export default class BlocoCDto {
    registroC001: RegistroC001Dto;
    registroC040: RegistroC040Dto;
    registroC050: RegistroC050Dto[];
    registroC051: RegistroC051Dto[];
    registroC052: RegistroC052Dto[];
    registroC150: RegistroC150Dto;
    registroC155: RegistroC155Dto[];
    registroC600: RegistroC600Dto[];
    registroC650: RegistroC650Dto[];
    registroC990: RegistroC990Dto;
}