import { Registro0000Dto,
    Registro0001Dto,
    Registro0010Dto,
    Registro0020Dto, 
    Registro0021Dto,
    Registro0030Dto,
    Registro0035Dto, 
    Registro0930Dto, 
    Registro0990Dto } from "./Registros0.dto";

export default class Bloco0Dto {
    registro0000: Registro0000Dto;
    registro0001: Registro0001Dto;
    registro0010: Registro0010Dto;
    registro0020: Registro0020Dto;
    registro0021: Registro0021Dto | null;
    registro0030: Registro0030Dto;
    registro0035: Registro0035Dto[];
    registro0930: Registro0930Dto[];
    registro0990: Registro0990Dto;
}