import { Get, JsonController } from 'routing-controllers';
import { ProductType } from '../Models/product-type';

@JsonController('/product-types/')
export class ProductTypeController {
  types: ProductType[] = [
    {
      code: 'C',
      name: 'Comercial',
    },
    {
      code: 'P',
      name: 'Préstamo',
    },
    {
      code: 'T',
      name: 'Tarjeta',
    }
  ]

  @Get('')
  getIndex() {
    return [...this.types];
  }
}
