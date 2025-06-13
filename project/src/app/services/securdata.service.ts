import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurdataService {

  constructor() { }

  encrypt(plainText: string) {
    const ciphertext = CryptoJS.AES.encrypt(plainText, environment.secur_key).toString();
    return ciphertext;
  }

  decrypt(cipherText: string) {
    const bytes  = CryptoJS.AES.decrypt(cipherText, environment.secur_key);
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText;
  }

}
