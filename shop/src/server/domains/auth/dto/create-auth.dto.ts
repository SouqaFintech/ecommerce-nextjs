import { CoreMutationOutput } from '@/server/domains/common/dto/core-mutation-output.dto';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
export class RegisterDto {
  name!: string;
  email!: string;
  password!: string;
  permission: Permission = Permission.CUSTOMER;
}

export class LoginDto {
  email?: string;
  password?: string;
}

export class SocialLoginDto {
  provider!: string;
  access_token!: string;
}
export class ChangePasswordDto {
  oldPassword!: string;
  newPassword!: string;
}
export class ForgetPasswordDto {
  email!: string;
}
export class VerifyForgetPasswordDto {
  email!: string;
  token!: string;
}
export class ResetPasswordDto {
  email!: string;
  token!: string;
  password!: string;
}

export class AuthResponse {
  token!: string;
  permissions!: string[];
  role?: string;
}
export class CoreResponse extends CoreMutationOutput {}
export class VerifyOtpDto {
  otp_id!: string;
  code!: string;
  phone_number!: string;
}
export class OtpResponse {
  id!: string;
  message!: string;
  success!: boolean;
  phone_number!: string;
  provider!: string;
  is_contact_exist!: boolean;
}
export class OtpDto {
  phone_number!: string;
}
export class OtpLoginDto {
  otp_id!: string;
  code!: string;
  phone_number!: string;
  name?: string;
  email?: string;
}
