import { Router } from 'express';

/**
 * defalut Route: /api/product
 */
const ProductRouter: Router = Router({ mergeParams: true });

ProductRouter.route('/')
  .get(() => {
  }) // list All
  .post(() => {
  }); // create New

ProductRouter.route('/:id')
  .get(() => {
  }) // list single
  .put(() => {
  }) // update item
  .delete(() => {
  }); // delete item
export default ProductRouter;
