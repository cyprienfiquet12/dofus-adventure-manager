import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Subscriptions from "../models/SubscriptionModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Le mot de passe doit correspondre a sa confirmation !" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  const usernameExists = await Users.findOne({ where: { name: name } });
  const emailExists = await Users.findOne({ where: { email: email } });
  if (usernameExists && emailExists) {
    return res
      .status(400)
      .json({ msg: "Nom d'utilisateur et adresse email déjà utilisés !" });
  } else if (usernameExists) {
    return res.status(400).json({ msg: "Nom d'utilisateur déjà utilisé !" });
  } else if (emailExists) {
    return res.status(400).json({ msg: "Adresse email déjà utilisée !" });
  }
  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    const userToReturn = await Users.findOne({ where: { email: email } });
    const userId = userToReturn.id;
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    const haveActiveSubscription = false;
    res
      .status(200)
      .json({ userToReturn, haveActiveSubscription, refreshToken });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Mot de passe incorrect" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const userToReturn = user[0];
    const subscription = await Subscriptions.findOne({
      where: { userId: userId, status: "active" },
    });
    const haveActiveSubscription =
      subscription && subscription.dataValues.status === "active"
        ? true
        : false;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15s" }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    const infoToken = jwt.sign(
      { userId, name, email, haveActiveSubscription },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ userToReturn, haveActiveSubscription, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Email ou mot de passe incorrect" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
