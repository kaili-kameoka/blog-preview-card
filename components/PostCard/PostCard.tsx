import Image from "next/image";
import type { StaticImageData } from "next/image";
import "./PostCard.css";

type PostCardProps = {
  category: string;
  publishedAt: string;
  title: string;
  description: string;
  illustrationSrc: StaticImageData;
  illustrationAlt: string;
  authorName: string;
  authorAvatarSrc: StaticImageData;
  authorAvatarAlt: string;
  priority?: boolean;
};

function PostCard({
  category,
  publishedAt,
  title,
  description,
  illustrationSrc,
  illustrationAlt,
  authorName,
  authorAvatarSrc,
  authorAvatarAlt,
  priority = false,
}: PostCardProps) {
  return (
    <article className="PostCard">
      <Image
        className="PostCard__Illustration"
        src={illustrationSrc}
        alt={illustrationAlt}
        width={336}
        height={200}
        priority={priority}
      />

      <div className="PostCard__Content">
        <p className="PostCard__Category">{category}</p>
        <p className="PostCard__Published">{publishedAt}</p>
        <h1 className="PostCard__Title">{title}</h1>
        <p className="PostCard__Description">{description}</p>
      </div>

      <div className="PostCard__Author">
        <Image
          className="PostCard__Avatar"
          src={authorAvatarSrc}
          alt={authorAvatarAlt}
          width={32}
          height={32}
        />
        <p>{authorName}</p>
      </div>
    </article>
  );
}


export default PostCard
