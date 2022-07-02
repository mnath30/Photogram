import { v4 as uuid } from "uuid";
import { avatar } from "../../asset";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    description: "Got this amazing pair today. Tomorrow's run will be fun.",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200207/cld-sample-5.jpg",
    info: "shoe",
    likes: {
      likeCount: 2,
      likedBy: ["john", "janedoe"],
    },
    username: "maitreyee",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "john",
        text: "See you tomorrow",
      },
      {
        _id: uuid(),
        username: "janedoe",
        text: "Great shoes",
      },
    ],
  },
  {
    _id: uuid(),
    description: "Breakfast at the plaza. Would you like to join?",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200207/cld-sample-4.jpg",
    info: "food",
    likes: {
      likeCount: 3,
      likedBy: ["maitreyee", "john", "Triperia"],
    },
    username: "janedoe",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "maitreyee",
        text: "Looks delicious",
      },
      {
        _id: uuid(),
        username: "janedoe",
        text: "Wow!",
      },
    ],
  },
  {
    _id: uuid(),
    description: "Meet the newest member of our family :)",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200206/cld-sample.jpg",
    info: "girl-with-dog",
    likes: {
      likeCount: 1,
      likedBy: ["maitreyee"],
    },
    username: "janedoe",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "maitreyee",
        text: "Hi!!",
      },
    ],
  },
  {
    _id: uuid(),
    description: "Waking up here is such a bliss",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200206/cld-sample-2.jpg",
    info: "mountains",
    likes: {
      likeCount: 3,
      likedBy: ["maitreyee", "john", "Wildlife"],
    },
    username: "Triperia",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Wildlife",
        text: "Beautiful",
      },
      {
        _id: uuid(),
        username: "janedoe",
        text: "Wow!",
      },
    ],
  },
  {
    _id: uuid(),
    description: "Look who we met today....Reindeers",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200185/samples/animals/reindeer.jpg",
    info: "reindeer",
    likes: {
      likeCount: 1,
      likedBy: ["john"],
    },
    username: "Wildlife",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "john",
        text: "Wow!",
      },
    ],
  },
  {
    _id: uuid(),
    description: "It's monday again",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200192/samples/ecommerce/leather-bag-gray.jpg",
    info: "bag",
    likes: {
      likeCount: 1,
      likedBy: ["janedoe"],
    },
    username: "john",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "maitreyee",
        text: "Why so soon",
      },
      {
        _id: uuid(),
        username: "janedoe",
        text: ":(",
      },
    ],
  },
  {
    _id: uuid(),
    description: "Meet Milo, Nilo and Silo ",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200190/samples/animals/three-dogs.jpg",
    info: "dogs",
    likes: {
      likeCount: 2,
      likedBy: ["maitreyee", "john"],
    },
    username: "Wildlife",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "maitreyee",
        text: "Hello there ",
      },
      {
        _id: uuid(),
        username: "janedoe",
        text: "So cute",
      },
    ],
  },
  {
    _id: uuid(),
    description: "The solution to all my troubles 😋",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200185/samples/food/dessert.jpg",
    info: "pie",
    likes: {
      likeCount: 3,
      likedBy: ["maitreyee", "john", "janedoe"],
    },
    username: "maitreyee",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "janedoe",
        text: "Looks delicious",
      },
    ],
  },
  {
    _id: uuid(),
    description: "The greenery and the beautiful lake here",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200195/samples/landscapes/nature-mountains.jpg",
    info: "nature-mountains",
    likes: {
      likeCount: 1,
      likedBy: ["janedoe"],
    },
    username: "Triperia",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "janedoe",
        text: "So peacefull",
      },
    ],
  },
  {
    _id: uuid(),
    description: "What a great game",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200207/cld-sample-3.jpg",
    info: "nature-mountains",
    likes: {
      likeCount: 3,
      likedBy: ["maitreyee", "john", "janedoe"],
    },
    username: "The Sports' enthusiast",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "maitreyee",
        text: "Indeed!",
      },
    ],
  },
  {
    _id: uuid(),
    description: "All set. Let's gooo!!",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200191/samples/landscapes/beach-boat.jpg",
    info: "boat",
    likes: {
      likeCount: 3,
      likedBy: ["maitreyee", "john", "janedoe"],
    },
    username: "Triperia",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "janedoe",
        text: "Comming 🏃‍♀️",
      },
    ],
  },
  {
    _id: uuid(),
    description: "Meet miley",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200188/samples/landscapes/girl-urban-view.jpg",
    info: "girl",
    likes: {
      likeCount: 2,
      likedBy: ["john", "janedoe"],
    },
    username: "Urban",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "janedoe",
        text: "Hello",
      },
    ],
  },
  {
    _id: uuid(),
    description: "At work",
    image:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1654200185/samples/people/kitchen-bar.jpg",
    info: "man-in-kitchen",
    likes: {
      likeCount: 3,
      likedBy: ["maitreyee", "john", "janedoe"],
    },
    username: "john",
    profile: avatar,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "janedoe",
        text: "Hello chef",
      },
    ],
  },
];
