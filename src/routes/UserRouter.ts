import { Router } from 'express';

/**
 * default Route: /api/user
 */
const UserRouter: Router = Router({ mergeParams: true });

UserRouter.post('/login', () => {
}); // login user
UserRouter.post('/logout', () => {
}); // logout user
UserRouter.post('/signup', () => {
}); // create new user

export default UserRouter;
