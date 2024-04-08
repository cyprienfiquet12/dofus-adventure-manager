import { CircularImg } from "../ui/image/CircularImg";
import Cra from "../../assets/Crâ.webp";
import Ecaflip from "../../assets/Ecaflip.webp";
import Eliotrop from "../../assets/Eliotrope.webp";
import Eniripsa from "../../assets/Eniripsa.webp";
import Enutrof from "../../assets/Enutrof.webp";
import Feca from "../../assets/Féca.webp";
import Huppermage from "../../assets/Huppermage.webp";
import Iop from "../../assets/Iop.webp";
import Osamodas from "../../assets/Osamodas.webp";
import Ouginak from "../../assets/Ouginak.webp";
import Pandawa from "../../assets/Pandawa.webp";
import Roublard from "../../assets/Roublard.webp";
import Sacrieur from "../../assets/Sacrieur.webp";
import Sadida from "../../assets/Sadida.webp";
import Sram from "../../assets/Sram.webp";
import Steamer from "../../assets/Steamer.webp";
import Xelor from "../../assets/Xélor.webp";
import Zobal from "../../assets/Zobal.webp";
import Forgelance from "../../assets/Forgelance.webp";

export function ClasseDisplay({ classe }: { classe: string | undefined }) {
  const getClasseDisplay = () => {
    switch (classe) {
      case "Ecaflip":
        return <CircularImg src={Ecaflip} alt={classe} />;
      case "Eniripsa":
        return <CircularImg src={Eniripsa} alt={classe} />;
      case "Iop":
        return <CircularImg src={Iop} alt={classe} />;
      case "Crâ":
        return <CircularImg src={Cra} alt={classe} />;
      case "Féca":
        return <CircularImg src={Feca} alt={classe} />;
      case "Sacrieur":
        return <CircularImg src={Sacrieur} alt={classe} />;
      case "Sadida":
        return <CircularImg src={Sadida} alt={classe} />;
      case "Osamodas":
        return <CircularImg src={Osamodas} alt={classe} />;
      case "Enutrof":
        return <CircularImg src={Enutrof} alt={classe} />;
      case "Sram":
        return <CircularImg src={Sram} alt={classe} />;
      case "Xélor":
        return <CircularImg src={Xelor} alt={classe} />;
      case "Pandawa":
        return <CircularImg src={Pandawa} alt={classe} />;
      case "Roublard":
        return <CircularImg src={Roublard} alt={classe} />;
      case "Zobal":
        return <CircularImg src={Zobal} alt={classe} />;
      case "Steamer":
        return <CircularImg src={Steamer} alt={classe} />;
      case "Eliotrop":
        return <CircularImg src={Eliotrop} alt={classe} />;
      case "Huppermage":
        return <CircularImg src={Huppermage} alt={classe} />;
      case "Ouginak":
        return <CircularImg src={Ouginak} alt={classe} />;
      case "Forgelance":
        return <CircularImg src={Forgelance} alt={classe} />;
      default:
        return <CircularImg src={Cra} alt={"default class"} />;
    }
  };
  return getClasseDisplay();
}
