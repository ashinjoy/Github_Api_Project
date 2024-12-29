import { Router } from "express";
import { deleteUser, mutualFriends, saveUserDetails, searchUser, sort, updateUser } from "../controllers/userController";
const userRouter = Router()
userRouter.route('/:uname').get(saveUserDetails).put(updateUser).patch(deleteUser)
userRouter.get('/sort',sort)
userRouter.get('/search',searchUser)
userRouter.get('/:uname/mutual-friends',mutualFriends)

export default userRouter


