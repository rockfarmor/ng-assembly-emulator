
export const MAX_HEX_VALUE = 0xffff;
export const PRIMARY_MEMORY_SIZE = 0xff + 1;


/**
 * Method that generates instuction 
 * @param operationCode The OP-code (can be between 0-15)
 * @param register The register to target (can be between 0-3)
 * @param adressingMode The adressing mode (can be between 0-3)
 * @param adress The adress (can be between 0-255)
 * @returns The instruction as a number
 */
export function GenerateInstruction(operationCode: number, register: number, addressingMode: number, address: number): number {

    operationCode = operationCode % 16;
    register = register % 4;
    addressingMode = addressingMode % 4;
    address = address % 256;
    return ((operationCode << (12)) + (register << (10)) + (addressingMode << (8)) + address);
}

export enum OP_CODE {
    LOAD = 0,
    STORE = 1,
    ADD = 2,
    SUBTRACT = 3,
    MULTIPLY = 4,
    JUMP = 5,
    COMPARE = 6,
    LOGICAL_SHIFT_RIGHT = 7,
    LOGICAL_SHIFT_LEFT = 8,
    BRANCH_IF_EQUAL = 9,
    BRANCH_IF_NOT_EQUAL = 10,
    NOP11 = 11,
    NOP12 = 12,
    NOP13 = 13,
    NOP14 = 14,
    NOP15 = 15,
}

export enum REGISTER {
    GR0 = 0,
    GR1 = 1,
    GR2 = 2,
    GR3 = 3,
}

export enum ADRESSING_MODE {
    DIRECT_ADDRESSING = 0,
    IMMEDIATE_ADDRESSING = 1,
    INDIRECT_ADDRESSING = 2,
    REGISTER_ADDRESSING = 3,
}


export const ADDRESING_MODE_TEXT: any = {
    0: "DIR_A",
    1: "IMM_A",
    2: "IND_A",
    3: "REG_A"
}

export function getEnumTextFromValue(value: number, ENUM: any): string | undefined {
    const enumKeys = Object.keys(ENUM).filter(key => isNaN(Number(key)));
    const enumValues = enumKeys.map(key => ENUM[key as keyof typeof ENUM]);

    const index = enumValues.indexOf(value);
    if (index !== -1) {
        return enumKeys[index];
    }

    return undefined;
}

export function randomInt(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}