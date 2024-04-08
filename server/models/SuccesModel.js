import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Succes = db.define(
  "quests",
  {
    title: {
      type: DataTypes.STRING,
    },
    points: {
      type: DataTypes.NUMBER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

(async () => {
  await db.sync();
})();

export default Succes;
