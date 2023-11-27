import { Transform } from 'class-transformer';
import { IsString, IsInt } from 'class-validator';


export class CreateCatDto {
    @IsString()
    @Transform(({ value }) => value.trim())
    name: string;
  
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    age: number;
  }