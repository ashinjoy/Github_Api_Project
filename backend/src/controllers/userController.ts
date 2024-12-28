import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/badRequestError";
// import {
//   createUser,
//   deleteUserData,
//   getUserByName,
// } from "../services/userService";
import { fetchGitHubData, fetchRepoList } from "../services/githubServices";
import { userModel } from "../models/userModel";

export const saveUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { uname } = req.params;
    if (!uname) {
      throw new BadRequestError("Provide UserName", 400);
    }
    let getUser = await userModel.findOne({ uname });
    if (!getUser) {
      const getGitHubDetails = await fetchGitHubData(uname);
      const userEntity = {
        login: getGitHubDetails.login,
        avatar_url: getGitHubDetails?.avatar_url,
        followers_url: getGitHubDetails?.followers_url,
        following_url: getGitHubDetails?.following_url,
        repos_url: getGitHubDetails?.repos_url,
        name: getGitHubDetails?.name,
        company: getGitHubDetails?.company,
        blog: getGitHubDetails?.blog,
        email: getGitHubDetails?.email,
        bio: getGitHubDetails?.bio,
        followers: getGitHubDetails?.followers,
        following: getGitHubDetails?.following,
        public_repos: getGitHubDetails?.public_repos,
        public_gists: getGitHubDetails?.public_gists,
        location: getGitHubDetails?.location,
        created_at: new Date(getGitHubDetails?.created_at),
      };
      getUser = await userModel.create(userEntity);
    }

    const getRepoDetails = await fetchRepoList(getUser.repos_url);
    res.status(200).json({
      success: true,
      message: "success",
      repoDetails: getRepoDetails,
      userData: getUser,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { uname } = req.params as { uname: string };
    if (!uname) {
      throw new BadRequestError("Bad Request! No valid Uname", 400);
    }
    await userModel.findOneAndUpdate({ login: uname }, { delete: true });
    res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
):Promise<void> => {
  try {
    const { uname } = req.params as { uname: string };
    const updates = req.body;
    if (!uname) {
      throw new BadRequestError("Bad Request! Provide UserName", 400);
    }
   const updateUserByName =  await userModel.findOneAndUpdate({ login: uname }, updates, { new: true });
    res.status(201).json({success:true,message:"User Profile Updated",userData:updateUserByName})
  } catch (error) {
    console.error(error);
    next(error);
  }
};
