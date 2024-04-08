import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Quests = db.define(
  "quests",
  {
    title: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
    succesId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "succes", // <<< Note, its table's name, not object name
        key: "id", // <<< Note, its a column name
      },
    },
    link: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

(async () => {
  await db.sync();
})();

export default Quests;
