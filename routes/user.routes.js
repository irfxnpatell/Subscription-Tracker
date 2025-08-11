import { Router } from "express";

const userRouter = Router();


//GET/users --> get all users
//GET/users/:id --> get user by id // 123

userRouter.get('/', (req,res) => res.send({title:'GET all users '}));

userRouter.get('/:id', (req,res) => res.send({title:'GET  user details'}));

userRouter.post('/', (req,res) => res.send({title:'CREATE new users '}));

userRouter.put('/:id', (req,res) => res.send({title:'UPDATE specific user '}));

userRouter.delete('/:id', (req,res) => res.send({title:'DELETE specific user '}));


export default userRouter;