import Card from "../card/Card";
import CardHeader from "../card/CardHeader";
import CardBody from "../card/CardBody";

export function CardDefault({
  src,
  alt,
  title,
  content,
}: {
  src: string;
  alt: string;
  title: string;
  content: string;
}) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader className="relative h-56">
        <img src={src} alt={alt} />
      </CardHeader>
      <CardBody className="">
        <h5 className="mb-2 text-blue-gray">{title}</h5>
        <div>{content}</div>
      </CardBody>
    </Card>
  );
}
