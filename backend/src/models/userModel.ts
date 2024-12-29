import mongoose, { Document, Schema } from "mongoose";
export interface IFriend {
  login: string;
  repos_url: string;
  avatar_url: string;
}
export interface Iuser extends Document {
  login: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  name?: string;
  company?: string;
  blog?: string;
  email?: string;
  bio?: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  location?: string;
  created_at: Date;
  delete?: boolean;
  friends?: IFriend[] | [];
}
const userSchema = new Schema<Iuser>(
  {
    login: {
      type: String,
      require: true,
      unique: true,
    },
    avatar_url: {
      type: String,
      require: true,
    },
    followers_url: {
      type: String,
    },
    following_url: {
      type: String,
    },
    repos_url: {
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
      unique: true,
    },
    bio: {
      type: String,
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    public_repos: {
      type: Number,
      default: 0,
    },
    public_gists: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    delete: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model<Iuser>("user", userSchema);
