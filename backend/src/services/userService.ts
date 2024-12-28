import { Iuser, userModel } from "../models/userModel";


// export const getUserByName = async (uname: string): Promise<Iuser | null> => {
//   try {
//     const userData = await userModel.findOne({ uname });
//     return userData;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export const createUser = async (user:Iuser) => {
  try {
    const userData = await userModel.create(user);
    return userData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const deleteUserData = async(uname:string):Promise<Iuser|null>=>{
    try {
        const deleteUser = await userModel.findOneAndUpdate({uname},{delete:true})
        return deleteUser
    } catch (error) {
        console.error(error);
        throw error
    }
}
