import {Body, Get, JsonController, Post, QueryParam} from 'routing-controllers';
import { PublicProduct } from '../Models/public-product';

@JsonController('/login/')
export class LoginController {
    user: any = {
        email: 'admin@pichincha.com',
        password: 'admin'
    }

    @Post('')
    login(@Body() body: any) {
        if (body.email === this.user.email && body.password === this.user.password) {
            return {
                status: 'success',
                message: 'Login exitoso',
                data: {
                    user: {
                        name: 'Administrator'
                    },
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                }
            }
        } else {
            return {
                status: 'error',
                message: 'Credenciales incorrectas',
                data: null
            }
        }
    }
}
