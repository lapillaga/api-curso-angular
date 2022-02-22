export class Transaction {
  description: string;
  type: TransactionType;
  amount: number;
  date: string;
  currentBalance: number;
  number: string;
  canal: string;
  account: string;
}

export class TransactionType {
  code: string;
  name: string;
}
