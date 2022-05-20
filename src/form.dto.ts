import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class FormDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  desiredPosition: string;

  @IsOptional()
  @IsString()
  skills: string;

  @IsOptional()
  @IsNumber()
  experience: number;

  @IsOptional()
  @IsString()
  english: string;

  @IsOptional()
  @IsNumber()
  salary: number;

  @IsOptional()
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

  @IsOptional()
  @IsString()
  cv: string;
}
