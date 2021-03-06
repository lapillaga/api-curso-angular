import {Body, Get, JsonController, Post, QueryParam} from 'routing-controllers';
import {Account} from '../Models/account';

@JsonController('/contacts/')
export class ContactsController {
  contacts: Account[] = [
    {
      accountInfo: {
        bankName: 'Bank of America',
        number: '123456789',
        type: 'checking',
        bankCode: '1'
      },
      email: 'jhon@gmail.com',
      recipient: {
        idCard: '123456789',
        identificationType: 'CC',
        names: 'Jhon Doe Perez Díaz',
      }
    },
    {
      accountInfo: {
        bankName: 'Banco de Chile',
        number: '987654321',
        type: 'savings',
        bankCode: '2'
      },
      email: 'criss@gmail.com',
      recipient: {
        idCard: '123456789',
        identificationType: 'CC',
        names: 'Cristina Perez Díaz Díaz',
      }
    },
    {
      accountInfo: {
        bankName: 'Banco de Pichincha',
        number: '313113213',
        type: 'checking',
        bankCode: '3'
      },
      email: 'fernando@gmail.com',
      recipient: {
        idCard: '123456789',
        identificationType: 'CC',
        names: 'Fernando Flores Lenis Díaz',
      }
    }
  ];

  @Get('')
  getIndex(@QueryParam('name') name: string) {
    if (name) {
      return this.contacts.filter(contact => {
        return contact.recipient.names.toLowerCase().includes(name.toLowerCase());
      });
    }
    return [...this.contacts];
  }

  @Post('')
  createItem(@Body() body: Account) {
    this.contacts.push(body)
    return body;
  }
}
