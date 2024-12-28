import mongoose, { Document, Schema } from "mongoose";
interface Iuser extends Document{
    avatar_url:string,
    url:string,
    followers_url:string,
    following_url:string,
    gists_url:string,
    starred_url:string,
    repos_url:string,
    user_view_type:string,
    name:string,
    company:string,
    blog:string,
    email:string,
    bio:string,
    followers:number,
    following:number,
    location:string,
    created_at:string,
    updated_at:string,
}
const userSchema = new Schema <Iuser>({
  avatar_url: {
    type: String,
  },
  url: {
    type: String,
  },
  followers_url: {
    type: String,
  },
  following_url: {
    type: String,
  },
  gists_url: {
    type: String,
  },
  starred_url: {
    type: String,
  },
  repos_url: {
    type: String,
  },
  user_view_type: {
    type: String,
  },
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  blog: {
    type: String,
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  followers: {
    type: Number,
  },
  following: {
    type: Number,
  },
  location: {
    type: String,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
});

export const model = mongoose.model<Iuser>("user", userSchema);
