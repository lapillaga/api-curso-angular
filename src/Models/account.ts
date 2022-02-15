import { Recipient } from '../Models/recipient';

export class Account {
  recipient: Recipient;
  accountInfo: AccountInfo;
  email: string;
}

export class AccountInfo {
  bankName: string;
  bankCode: string;
  type: string;
  number: string;
}