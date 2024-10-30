import {
    RegistroP001Dto,
    RegistroP030Dto,
    RegistroP100Dto,
    RegistroP130Dto,
    RegistroP150Dto,
    RegistroP200Dto,
    RegistroP230Dto,
    RegistroP300Dto,
    RegistroP400Dto,
    RegistroP500Dto,
    RegistroP990Dto,
} from "./RegistrosP.dto";

export default class BlocoPDto {
    registroP001: RegistroP001Dto;
    registroP030: RegistroP030Dto[];
    registroP100: RegistroP100Dto[];
    registroP130: RegistroP130Dto[];
    registroP150: RegistroP150Dto[];
    registroP200: RegistroP200Dto[];
    registroP230: RegistroP230Dto[];
    registroP300: RegistroP300Dto[];
    registroP400: RegistroP400Dto[];
    registroP500: RegistroP500Dto[];
    registroP990: RegistroP990Dto;
}