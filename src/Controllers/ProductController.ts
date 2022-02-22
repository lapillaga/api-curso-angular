import { Get, JsonController, Param, QueryParam } from 'routing-controllers';
import { Product } from '../Models/product';
import { AccountType } from '../Models/account-type';
import { Transaction, TransactionType } from '../Models/transaction';

@JsonController('/products/')
export class ProductController {
  savingsAccount: AccountType = {
    code: 'savings',
    name: 'Cuentas de ahorros',
  };
  checkingAccount: AccountType = {
    code: 'checking',
    name: 'Cuentas corrientes',
  };

  products: Product[] = [
    {
      account: this.savingsAccount,
      products: [
        {
          code: 'CA1',
          accountAvailable: 27.12,
          accountUsed: 27.12,
          accountNumber: '220XXXXXX323',
        },
        {
          code: 'CA2',
          accountAvailable: 227.12,
          accountUsed: 227.12,
          accountNumber: '220XXXXXX333',
        }
      ]
    },
    {
      account: this.checkingAccount,
      products: [
        {
          code: 'CH1',
          accountAvailable: 123.22,
          accountUsed: 123.22,
          accountNumber: '420XXXXXX323',
        }
      ]
    }
  ]

  transactionTypeDeposit: TransactionType = {
    code: 'deposit',
    name: 'Deposito',
  };

  transactionTypeWithdrawal: TransactionType = {
    code: 'withdrawal',
    name: 'Retiro',
  };

  transactionTypeTransfer: TransactionType = {
    code: 'transfer',
    name: 'Transferencia',
  };

  transactionTypeCredit: TransactionType = {
    code: 'credit',
    name: 'Credito',
  };


  transactions: Transaction[] = [
    {
      number: '54844689',
      description: 'CONSUMO VISA IN GOOGLE',
      amount: -10.00,
      canal: 'VISA',
      account: 'CA1',
      currentBalance: 27.12,
      date: '2022-01-01',
      type: this.transactionTypeCredit
    },
    {
      number: '54843389',
      description: 'DEPOSITOS A LA VISTA',
      amount: 10.00,
      canal: 'VENTANILLA',
      account: 'CA1',
      currentBalance: 37.12,
      date: '2022-01-02',
      type: this.transactionTypeDeposit
    },
    {
      number: '54224689',
      description: 'TRANSFERENCIA DE CA1 A CA2',
      amount: 22.00,
      canal: 'BANCA MOVIL',
      account: 'CA2',
      date: '2022-01-02',
      currentBalance: 43.12,
      type: this.transactionTypeTransfer
    },
    {
      number: '54810689',
      description: 'CONSUMO VISA IN AMAZON',
      amount: -100.00,
      canal: 'VISA',
      account: 'CH1',
      currentBalance: 273.12,
      date: '2022-01-02',
      type: this.transactionTypeCredit
    },
    {
      number: '52144689',
      description: 'RETIRO CAJERO AZOGUES',
      amount: -10.00,
      canal: 'ATM',
      account: 'CA1',
      date: '2022-01-04',
      currentBalance: 21.12,
      type: this.transactionTypeWithdrawal
    },
    {
      number: '54222689',
      description: 'TRANSFERNCIA DIRECTA DE CRISTIAN CASTRO',
      amount: 120.00,
      canal: 'BANCA MOVIL',
      account: 'CA1',
      currentBalance: 237.12,
      date: '2022-01-05',
      type: this.transactionTypeTransfer
    }
  ]

  @Get('')
  getIndex() {
    return [...this.products];
  }

  @Get('movements/:account')
  getMovements(@Param('account') account: string) {
    return [...this.transactions.filter(transaction => transaction.account === account)];
  }
}
