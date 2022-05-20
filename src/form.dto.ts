import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class FormDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  desiredPosition: string;

  @IsString()
  skills: string;

  @IsNumber()
  experience: number;

  @IsString()
  english: string;

  @IsNumber()
  salary: number;

  @IsString()
  communicationChannel: string;

  @IsOptional()
  @IsString()
  linkedIn: string;

  @IsOptional()
  @IsString()
  skype: string;

  @IsOptional()
  @IsString()
  telegram: string;

  @IsOptional()
  @IsString()
  whatsApp: string;

  @IsOptional()
  @IsString()
  comment: string;

  @IsString()
  cv: string;
}
