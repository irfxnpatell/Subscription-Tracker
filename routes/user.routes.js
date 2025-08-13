import { Router } from "express";
import {getUser,getUsers} from '../controllers/user.controller.js'
import authorize from '../middlewares/auth.middleware.js'
import errorMiddleware from '../middlewares/error.middleware.js'

const userRouter = Router();


//GET/users --> get all users
//GET/users/:id --> get user by id // 123

userRouter.get('/', getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/', (req,res) => res.send({title:'CREATE new users '}) );

userRouter.put('/:id', (req,res) => res.send({title:'UPDATE specific user '}));

userRouter.delete('/:id', (req,res) => res.send({title:'DELETE specific user '}));


export default userRouter;