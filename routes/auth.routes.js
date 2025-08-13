import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

//Path: /api/v1/auth/signUp(POST)
authRouter.post('/sign-up', signUp);

//Path: /api/v1/auth/signIn
authRouter.post('/sign-in',  signIn);

//Path: /api/v1/auth/signOut
authRouter.post('/sign-out',  signOut);


export default authRouter;