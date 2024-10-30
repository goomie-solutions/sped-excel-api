import {
    RegistroU001Dto,
    RegistroU030Dto,
    RegistroU100Dto,
    RegistroU150Dto,
    RegistroU180Dto,
    RegistroU182Dto,
    RegistroU990Dto,
} from "./RegistrosU.dto";

export default class BlocoUDto {
    registroU001: RegistroU001Dto;
    registroU030: RegistroU030Dto[];
    registroU100: RegistroU100Dto[];
    registroU150: RegistroU150Dto[];
    registroU180: RegistroU180Dto[];
    registroU182: RegistroU182Dto[];
    registroU990: RegistroU990Dto;
}