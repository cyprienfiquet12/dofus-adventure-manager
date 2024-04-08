import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import {
  getCharacters,
  newCharacter,
  deleteCharacter,
  getCharacterById,
} from "../controllers/Characters.js";
import { getQuests } from "../controllers/Quests.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  createSubscription,
  getPortalLink,
} from "../controllers/Subscriptions.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.post("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/characters/:userId", verifyToken, getCharacters);
router.post("/character/:userId", verifyToken, getCharacterById);
router.post("/characters/:userId", verifyToken, newCharacter);
router.delete("/characters/:userId", verifyToken, deleteCharacter);
router.post("/subscription/subscribe/:userId", verifyToken, createSubscription);
router.get("/portal/:userId", verifyToken, getPortalLink);
router.get("/quests", verifyToken, getQuests);

export default router;
