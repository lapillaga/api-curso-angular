import { Get, JsonController, QueryParam } from 'routing-controllers';
import { PublicProduct } from '../Models/public-product';

@JsonController('/public-products/')
export class PublicProductController {
  products: PublicProduct[] = [
    {
      code: '1',
      name: 'Ahorros',
      description: 'Abre una cuenta en 10 minutos y empieza a manejar tu dinero donde sea que estés.',
      productType: 'C',
      image: 'https://www.pichincha.com/portal/Portals/0/adam/Submenu/7WAvgisllUCIBv4F6fduZg/Icon/PERSONAS-CUENTAS-CORRIENTE-2.jpg?w=300&h=200&mode=crop'
    },
    {
      code: '2',
      name: 'Ahorro programado',
      description: 'Cumple tus planes a futuro, con una cuota de ahorro mensual desde 10 dólares.',
      productType: 'P',
      image: 'https://www.pichincha.com/portal/Portals/0/adam/Submenu/EfyqZV-vxEGAFGMFzSSChA/Icon/PERSONAS-CUENTAS-AHORRO-PROGRAMADO.jpg?w=300&h=200&mode=crop'
    },
    {
      code: '3',
      name: 'Jóvenes',
      description: 'Descubre todas nuestras opciones para empezar a construir tu futuro',
      productType: 'T',
      image: 'https://www.pichincha.com/portal/Portals/0/adam/Submenu/BCr9OQZmnUyzc_8VFv6E4w/Icon/Jovenes.jpg?w=300&h=200&mode=crop'
    },
    {
      code: '4',
      name: 'Cuenta básica',
      description: 'Abre tu cuenta y maneja tu dinero desde cualquier correponsal de la red Mi Vecino.',
      productType: 'T',
      image: 'https://www.pichincha.com/portal/Portals/0/adam/Submenu/iRnsHbN1I0yqz0hhnN3M-Q/Icon/PERSONAS-CUENTAS-CUENTA-BASICA.jpg?w=300&h=200&mode=crop'
    },
    {
      code: '5',
      name: 'Corriente',
      description: 'Administra y contrala tu dinero a través de cheques personales.',
      productType: 'C',
      image: 'https://www.pichincha.com/portal/Portals/0/adam/Submenu/pt2jp8Pu6USgpnwufHYOWg/Icon/PERSONAS-CUENTAS-CORRIENTE.jpg?w=300&h=200&mode=crop'
    },
  ];

  @Get('')
  getIndex(@QueryParam('productType') productType: string) {
    if (productType) {
      return this.products.filter(product => product.productType === productType);
    }
    return [...this.products];
  }
}
