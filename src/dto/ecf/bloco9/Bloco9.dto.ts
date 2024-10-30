import {
    Registro9001Dto,
    Registro9099Dto,
    Registro9100Dto,
    Registro9900Dto,
    Registro9999Dto,
} from "./Registros9.dto";

export default class Bloco9Dto {
    registro9001: Registro9001Dto;
    registro9099: Registro9099Dto[];
    registro9100: Registro9100Dto[];
    registro9900: Registro9900Dto;
    registro9999: Registro9999Dto;
}