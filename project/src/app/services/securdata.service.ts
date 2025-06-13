import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SecurdataService {

  constructor() { }

  encrypt(plainText: string) {
    const ciphertext = CryptoJS.AES.encrypt(plainText, 'key123').toString();
    return ciphertext;
  }

  decrypt(cipherText: string) {
    const bytes  = CryptoJS.AES.decrypt(cipherText, 'key123');
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText;
  }

}
