import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/badRequestError";
import {
  fetchFollowersList,
  fetchFollowingList,
  fetchGitHubData,
  fetchRepoList,
} from "../services/githubServices";
import { userModel } from "../models/userModel";
import { CustomError } from "../errors/customError";

export const saveUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { uname } = req.params as {uname:string};
    if (!uname) {
      throw new BadRequestError("Provide UserName", 400);
    }
    let getUser = await userModel.findOne({ login:uname });
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
): Promise<void> => {
  try {
    const { uname } = req.params as { uname: string };
    const updates = req.body;
    if (!uname) {
      throw new BadRequestError("Bad Request! Provide UserName", 400);
    }
    const updateUserByName = await userModel.findOneAndUpdate(
      { login: uname },
      updates,
      { new: true }
    );
    res.status(201).json({
      success: true,
      message: "User Profile Updated",
      userData: updateUserByName,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const sort = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validQueryInputs = [
      "public_repo",
      "public_gists",
      "followers",
      "following",
      "created_at",
    ];
    const { sortby } = req.query as { sortby: string };
    if (!sortby) {
      throw new BadRequestError("Bad Request", 400);
    }
    if (typeof sortby !== "string") {
      throw new BadRequestError("Invalid query format", 400);
    }
    const sortDetails = sortby.split("-");
    const sortedOn = sortDetails[0];
    const sortedBy = sortDetails[1];
    if (!validQueryInputs.includes(sortedOn)) {
      throw new BadRequestError("Invalid query field", 400);
    }
    const sortOrder =
      sortedBy === "ascending" ? 1 : sortedBy === "descending" ? -1 : null;
    if (!sortOrder) {
      throw new BadRequestError("Invalid sort Order", 400);
    }
    const sortedData = await userModel.find().sort({ [sortedOn]: sortOrder });
    res
      .status(200)
      .json({ success: true, message: "success", userData: sortedData });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const searchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { searchTerm } = req.query as { searchTerm: string };
    if (!searchTerm) {
      throw new BadRequestError("Invalid Input", 400);
    }
    const searchResult = await userModel.aggregate([
      {
        $match: {
          $or: [
            { login: searchTerm },
            { location: searchTerm },
            { company: searchTerm },
            { email: searchTerm },
          ],
        },
      },
    ]);
    res
      .status(200)
      .json({ success: true, message: "success", userData: searchResult });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
export const mutualFriends = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { uname } = req.params;
    if (!uname) {
      throw new BadRequestError("Invalid paramter", 400);
    }
    const getUserData = await userModel.findOne({ login: uname });
    if (!getUserData) {
      throw new CustomError("No Valid User", 400);
    }
    const followingDetails = await fetchFollowingList(uname);
    const followersDetails = await fetchFollowersList(
      getUserData.followers_url
    );
    const mutualFriends = followersDetails
      .filter((follower: { login: string }) => {
        return followingDetails.some(
          (following: { login: string }) => follower.login == following.login
        );
      })
      .map(
        (follower: {
          login: string;
          repos_url: string;
          avatar_url: string;
        }) => {
          return {
            login: follower.login,
            repos_url: follower.repos_url,
            avatar_url: follower.avatar_url,
          };
        }
      );
    await userModel.findOneAndUpdate(
      { login: uname },
      { $set: { friends: mutualFriends } },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "success",
        mutual_friends: mutualFriends,
      });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
