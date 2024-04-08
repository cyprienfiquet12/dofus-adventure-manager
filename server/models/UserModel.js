import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    customer_id_stripe: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

(async () => {
  await db.sync();
})();

export default Users;
