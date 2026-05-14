import Image from "next/image";
import type { StaticImageData } from "next/image";
import "./PostCard.css";
import Link from "next/link";

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
  url: string;
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
  url,
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
        <p className="PostCard__Category TextPreset3Bold">{category}</p>
        <p className="PostCard__Published TextPreset3">{publishedAt}</p>
        <h1 className="PostCard__Title TextPreset1">
          <Link className="PostCard__TitleLink" href={url}>
            {title}
          </Link>
        </h1>
        <p className="PostCard__Description TextPreset2">{description}</p>
      </div>

      <div className="PostCard__Author TextPreset3Bold">
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

export default PostCard;
