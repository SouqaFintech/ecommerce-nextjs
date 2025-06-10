import { AuthService } from './auth.service';
import {
  ChangePasswordDto,
  ForgetPasswordDto,
  LoginDto,
  OtpDto,
  OtpLoginDto,
  RegisterDto,
  ResetPasswordDto,
  SocialLoginDto,
  VerifyForgetPasswordDto,
  VerifyOtpDto,
} from './dto/create-auth.dto';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('register')
  createAccount(registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  // @Post('token')
  login(loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  // @Post('social-login-token')
  socialLogin(socialLoginDto: SocialLoginDto) {
    return this.authService.socialLogin(socialLoginDto);
  }
  // @Post('otp-login')
  otpLogin(otpLoginDto: OtpLoginDto) {
    return this.authService.otpLogin(otpLoginDto);
  }
  // @Post('send-otp-code')
  sendOtpCode(otpDto: OtpDto) {
    return this.authService.sendOtpCode(otpDto);
  }
  // @Post('verify-otp-code')
  verifyOtpCode(verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyOtpCode(verifyOtpDto);
  }
  // @Post('forget-password')
  forgetPassword(forgetPasswordDto: ForgetPasswordDto) {
    return this.authService.forgetPassword(forgetPasswordDto);
  }
  // @Post('reset-password')
  resetPassword(resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }
  // @Post('change-password')
  changePassword(changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(changePasswordDto);
  }
  // @Post('logout')
  async logout(): Promise<boolean> {
    return true;
  }
  // @Post('verify-forget-password-token')
  verifyForgetPassword(
    verifyForgetPasswordDto: VerifyForgetPasswordDto,
  ) {
    return this.authService.verifyForgetPasswordToken(verifyForgetPasswordDto);
  }

  // @Get('me')
  me() {
    return this.authService.me();
  }
  // @Post('add-points')
  addWalletPoints(addPointsDto: any) {
    return this.authService.me();
  }
  // @Post('contact-us')
  contactUs(addPointsDto: any) {
    return {
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon.',
    };
  }
}
