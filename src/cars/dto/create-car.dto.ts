// data-transfer-object

import { IsString, MinLength} from "class-validator";

// Puede ser una interface, pero al necesitar realizar validaciones, no se podrá
export class CreateCarDto {

    @IsString({ message: 'THe brand must be a string' })
    readonly brand: string;

    // Se pueden usar varias decoradores, dependiendo las validaciones que queramos
    @IsString()
    // @MinLength(3)
    readonly model: string;
}