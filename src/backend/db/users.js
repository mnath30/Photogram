import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { avatar } from "../../asset";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullname: "Maitreyee Nath",
    username: "maitreyee",
    password: "mait123",
    email: "maitnath@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description: "Life is a daring adventure or nothing at all",
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    fullname: "John Doe",
    username: "john",
    password: "jdoe123",
    email: "johndoe@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description: "Let's have some great food and enjoy the bliss of life",
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    fullname: "Jane Doe",
    username: "janedoe",
    password: "janeDoe123",
    email: "janedoe@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description: "Love music, travelling, exploring and something more...",
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    fullname: "World Sports",
    username: "The_Sports'_enthusiast",
    password: "sportsenthu123",
    email: "sportsenthu@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description:
      "What can be better than a great game and an even better sportsmanship",
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    fullname: "Triperia",
    username: "Triperia",
    password: "triperia123",
    email: "triperia@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description: "Let's travel and go on adventures together",
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    fullname: "Wildlife Explorer",
    username: "Wildlife",
    password: "wildlife123",
    email: "wildlife@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description: "Wildlife explorer",
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    fullname: "Urban Life",
    username: "Urban",
    password: "urban123",
    email: "urban@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: avatar,
    description: "The urban lifestyle",
    followers: [],
    following: [],
    bookmarks: [],
  },
];
