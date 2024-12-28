import { Router } from "express";
import { deleteUser, saveUserDetails } from "../controllers/userController";
const userRouter = Router()
// userRouter.get('/:uname',saveUserDetails)
// userRouter.patch('/:uname',deleteUser)
userRouter.route('/:uname').get(saveUserDetails).patch(deleteUser)

export default userRouter


