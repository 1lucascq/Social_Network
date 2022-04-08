export const initialState = [
  {
    user: {
      username: "iamgroot",
      id: "0101010",
    },
    post: {
      title: "I am groot",
      content: `I am groot`,
      postedAt: new Date("1/1/14").getTime(),
    },
  },
  {
    user: {
      username: "anakin",
      id: "0202020",
    },
    post: {
      title: "I don't like sand",
      content: `It's all coarse, and rough, and irritating. And it gets everywhere.`,
      postedAt: new Date("1/1/2002").getTime(),
    },
  },
  {
    user: {
      username: "gandalf",
      id: "0303030",
    },
    post: {
      title: "YOU SHALL NOT PASS!",
      content: `Fly, your fools!`,
      postedAt: new Date("1/1/01").getTime(),
    },
  },
  {
    user: {
      username: "beatles",
      id: "0404040",
    },
    post: {
      title: "Hey Jude",
      content: `Don't carry the world upon your shoulders`,
      postedAt: new Date("1/1/68").getTime(),
    },
  },
];