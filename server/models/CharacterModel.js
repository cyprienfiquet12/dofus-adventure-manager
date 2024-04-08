import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Characters = db.define(
  "characters",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // <<< Note, its table's name, not object name
        key: "id", // <<< Note, its a column name
      },
    },
    server: {
      type: DataTypes.ENUM(
        "Imagiro",
        "Orukam",
        "Hell Mina",
        "Draconiros",
        "Ombre",
        "Tylezia",
        "Tal Kasha",
        "Lernaya",
        "Gusnoh",
        "Zerpan"
      ),
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    omega: {
      type: DataTypes.INTEGER,
    },
    kamas: {
      type: DataTypes.INTEGER,
    },
    alignement: {
      type: DataTypes.ENUM("Bontarien", "Brâkmarien"),
    },
    classe: {
      type: DataTypes.ENUM(
        "Ecaflip",
        "Eniripsa",
        "Iop",
        "Crâ",
        "Féca",
        "Sacrieur",
        "Sadida",
        "Osamodas",
        "Enutrof",
        "Sram",
        "Xélor",
        "Pandawa",
        "Roublard",
        "Zobal",
        "Steamer",
        "Eliotrop",
        "Huppermage",
        "Ouginak",
        "Forgelance"
      ),
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

(async () => {
  await db.sync();
})();

export default Characters;
