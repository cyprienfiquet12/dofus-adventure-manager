import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const QuestsCharacters = db.define(
  "quest_character",
  {
    questId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "quests", // <<< Note, its table's name, not object name
        key: "id", // <<< Note, its a column name
      },
    },
    characterId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "characters", // <<< Note, its table's name, not object name
        key: "id", // <<< Note, its a column name
      },
    },
  },
  { freezeTableName: true }
);

(async () => {
  await db.sync();
})();

export default QuestsCharacters;
