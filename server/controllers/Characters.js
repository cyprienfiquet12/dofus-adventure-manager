import Characters from "../models/CharacterModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Subscriptions from "../models/SubscriptionModel";

export const getCharacters = async (req, res) => {
  try {
    const characters = await Characters.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(characters);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
export const getCharacterById = async (req, res) => {
  const { id } = req.body;
  try {
    const character = await Characters.findOne({
      where: {
        userId: req.params.userId,
        id: id,
      },
    });
    res.json(character.dataValues);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const newCharacter = async (req, res) => {
  const { name, server, level, omega, kamas, alignement, classe } = req.body;
  console.log(req.body);
  const nameExists = await Characters.findAll({
    where: { name: name, server: server },
  });
  if (!nameExists) {
    return res.status(400).json({
      msg: "Nom de personnage déjà enregistré, si ce n'est pas vous merci de contacter le support.",
    });
  }
  if (level < 200 && omega !== "0" && omega !== 0 && omega) {
    return res.status(400).json({
      msg: "Le niveau oméga ne peut être enregistré, le personnage n'est pas niveau 200.",
    });
  }
  let limit = 1;
  const userSubscription = await Subscriptions.findOne({
    where: { userId: req.params.userId },
  });
  if (userSubscription && userSubscription.status === "active") {
    limit = 5;
  }
  const count = await Characters.count({
    where: { userId: req.params.userId },
  });
  if (limit <= count) {
    return res.status(400).json({
      msg: "Vous avez déjà atteint la limite de personnage, si vous voulez plus d'emplacement passé à l'abonnement supérieur !",
    });
  }
  try {
    await Characters.create({
      name: name,
      server: server,
      userId: req.params.userId,
      level: level,
      omega: omega,
      kamas: kamas,
      alignement: alignement,
      classe: classe,
    });
    res.json({ msg: "Personnage créer !" });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCharacter = async (req, res) => {
  const { id } = req.body;
  try {
    await Characters.destroy({
      where: {
        id: id,
      },
    });
    res.json({ msg: "Personnage supprimé avec succès !" });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
