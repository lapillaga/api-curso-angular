import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';
import { CatalogoControllers } from "./Controllers/CatalogoControllers";
import { ContactsController } from "./Controllers/ContactsController";
import { ProductController } from './Controllers/ProductController';
import { ProductTypeController } from './Controllers/ProductTypeController';
import { PublicProductController } from './Controllers/PublicProductController';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  cors: true,
  controllers: [
    CatalogoControllers,
    ContactsController,
    ProductController,
    ProductTypeController,
    PublicProductController
  ], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${3000}`);
});
