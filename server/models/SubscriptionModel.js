import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Subscriptions = db.define(
  "subscriptions",
  {
    periodicity: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // <<< Note, its table's name, not object name
        key: "id", // <<< Note, its a column name
      },
    },
    session_stripe: {
      type: DataTypes.STRING,
    },
    sub_id: {
      type: DataTypes.STRING,
    },
    customer_id: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

(async () => {
  await db.sync();
})();

export default Subscriptions;
