import {
    RegistroN001Dto,
    RegistroN030Dto,
    RegistroN500Dto,
    RegistroN600Dto,
    RegistroN605Dto,
    RegistroN610Dto,
    RegistroN615Dto,
    RegistroN620Dto,
    RegistroN630Dto,
    RegistroN650Dto,
    RegistroN660Dto,
    RegistroN670Dto,
    RegistroN990Dto,
} from "./RegistrosN.dto";

export default class BlocoNDto {
    registroN001: RegistroN001Dto;
    registroN030: RegistroN030Dto[];
    registroN500: RegistroN500Dto[];
    registroN600: RegistroN600Dto[];
    registroN605: RegistroN605Dto[];
    registroN610: RegistroN610Dto[];
    registroN615: RegistroN615Dto[];
    registroN620: RegistroN620Dto[];
    registroN630: RegistroN630Dto[];
    registroN650: RegistroN650Dto[];
    registroN660: RegistroN660Dto[];
    registroN670: RegistroN670Dto[];
    registroN990: RegistroN990Dto;
}