import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ChangePasswordDTO {
  @IsNotEmpty()
  @IsString()
  @Expose()
  password: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  confirmNewPassword: string;
}
