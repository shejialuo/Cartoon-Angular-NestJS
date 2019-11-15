import { Injectable } from '@nestjs/common';
import {nodemailer, smtpConfig, transporter, sendmail} from './PublicTs/emailer';
@Injectable()
export class AppService {
}
