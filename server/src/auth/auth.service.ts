import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      msg: 'OK LOGIN',
    };
  }

  signup() {
    return {
      msg: 'OK SIGNUP',
    };
  }
}
