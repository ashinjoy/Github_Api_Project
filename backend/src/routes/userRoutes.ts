import { Router } from "express";
import { deleteUser, saveUserDetails, updateUser } from "../controllers/userController";
const userRouter = Router()
// userRouter.get('/:uname',saveUserDetails)
// userRouter.patch('/:uname',deleteUser)
userRouter.route('/:uname').get(saveUserDetails).put(updateUser).patch(deleteUser)

export default userRouter


