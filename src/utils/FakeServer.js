import jwt from "jsonwebtoken";

const validUser = [
  {
    username: "Ben",
    email: "benseed.bs@gmail.com",
    password: "password",
  },
  {
    username: "testUser",
    email: "test@email.com",
    password: "$2a$10$DgcGIvOKIWoMzhKPznDGs.jMW5hUDqJKTleN7coAXrv3cZmpql7sa",
  },
];

export const attemptLogin = (details) => {
  const isUser = validUser.find((user) => {
    return (
      user.username === details.username &&
      user.email === details.email
    );
  });
  if (isUser) {
    const token = jwt.sign(
      {
        email: details.email,
        username: details.username,
      },
      process.env.REACT_APP_KEY
    );
    return { token: token };
  } else {
    return { error: "details are incorrect" };
  }
};

export const fetchHash = (username, email) => {
  const foundUser = validUser.find((user) => {
    return user.username === username && user.email === email;
  });
  console.log(foundUser, ",<-- foundUser");
  if (foundUser) {
    return { hash: foundUser.password };
  } else {
    return { error: "Credentials are invalid" };
  }
};
