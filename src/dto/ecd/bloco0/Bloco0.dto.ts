import {
    Registro0000Dto,
    Registro0001Dto,
    Registro0007Dto,
    Registro0020Dto,
    Registro0035Dto,
    Registro0150Dto,
    Registro0180Dto,
    Registro0990Dto
} from "./Registros0.dto";

export default class Bloco0Dto {
    registro0000: Registro0000Dto;
    registro0001: Registro0001Dto;
    registro0007: Registro0007Dto[];
    registro0020: Registro0020Dto[];
    registro0035: Registro0035Dto[];
    registro0150: Registro0150Dto[];
    registro0180: Registro0180Dto[];
    registro0990: Registro0990Dto;
}