import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Link from "next/link";

interface CardBlogProps {
  imageUrl: string;
  category: string;
  title: string;
  createdAt: string;
  author: string;
  description: string;
  slug: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  imageUrl,
  category,
  title,
  createdAt,
  author,
  description,
  slug,
}) => {
  return (
    <Link href={`/${slug}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <Badge className="rounded-sm bg-green-100" variant="outline">
            {category}
          </Badge>
          <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
          <p className="text-sm font-light italic">
            {format(new Date(createdAt), "dd MMMM yyyy")} - {author}
          </p>
          <p className="line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardBlog;
