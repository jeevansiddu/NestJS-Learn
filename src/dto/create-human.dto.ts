import { IsString, IsInt, IsBoolean, MinLength } from 'class-validator';
export class CreateHumanDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  @MinLength(5)
  gender: string;
  @IsBoolean()
  isAlive: boolean;
}
