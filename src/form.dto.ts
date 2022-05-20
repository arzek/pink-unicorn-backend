import { IsEmail, IsNumber, IsString } from 'class-validator';

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

  @IsString()
  linkedIn: string;

  @IsString()
  skype: string;

  @IsString()
  telegram: string;

  @IsString()
  whatsApp: string;

  @IsString()
  comment: string;

  @IsString()
  cv: string;
}
