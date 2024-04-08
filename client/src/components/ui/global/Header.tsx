import Logo from "../../../assets/Logo.png";

export default function Header() {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-36" src={Logo} />
      </div>
    </div>
  );
}
