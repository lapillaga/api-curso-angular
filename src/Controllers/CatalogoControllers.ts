import {Post, Get, JsonController, Body} from "routing-controllers";
import {newUID} from "../Utils/util";

@JsonController('/catalogo/')
export class CatalogoControllers {

    listItems: any[] = [
        {id: 'w7qfsa5f21', Descripcion: 'Pichincha'},
        {id: '04obr8ta22y7', Descripcion: 'Los Rios'},
        {id: '4segylkhwvu', Descripcion: 'El Oro'},
        {id: '7ofshsie6r', Descripcion: 'Guayas'},
    ]

    //#region Catalogos
    listTipoCuenta: any[] = [
        {
            id: "savings",
            description: "Cuenta Ahorro"
        },
        {
            id: "checking",
            description: "Cuenta Corriente"
        }
    ]
    //#endregion

    bankList: any = [
        {
            bankName: 'Banco de Pichincha',
            bankCode: '3'
        },
        {
            bankName: 'Bank of America',
            bankCode: '1'
        },
        {
            bankName: 'Banco de Chile',
            bankCode: '2'
        },
        {
            bankName: 'Banco del Pacífico',
            bankCode: '4'
        }
    ];

    idTypes: any = [
        {
            id: 'CC',
            description: 'Cédula de Ciudadanía'
        },
        {
            id: 'CE',
            description: 'Cédula de Extranjería'
        },
        {
            id: 'TI',
            description: 'Tarjeta de Identidad'
        },
        {
            id: 'PA',
            description: 'Pasaporte'
        }
    ];

    @Get('')
    getIndex() {
        return [...this.listItems]
    }

    @Get('banks')
    getBankList() {
        return [...this.bankList]
    }

    @Get('id-types')
    getIdTypes() {
        return [...this.idTypes]
    }

    @Get('account-types')
    getAccountTypes() {
        return [...this.listTipoCuenta]
    }

    @Post('')
    createItem(@Body() body: { Descripcion: string }) {
        const data = {...body, id: newUID()}
        this.listItems.push(data)
        return data
    }

    @Post('convert-list')
    parseList(@Body() body: any) {
        return body.map(item => ({id: newUID(), Descripcion: item}))
    }
}
