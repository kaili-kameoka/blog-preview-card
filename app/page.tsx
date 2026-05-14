import PostCard from "@/components/PostCard/PostCard";
import authorAvatar from "@/public/image-avatar.webp";
import articleIllustration from "@/public/illustration-article.svg";

const featuredPost = {
  category: "Learning",
  publishedAt: "Published 21 Dec 2023",
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  illustrationSrc: articleIllustration,
  illustrationAlt: "Abstract illustration of HTML and CSS learning tools",
  authorName: "Greg Hooper",
  authorAvatarSrc: authorAvatar,
  authorAvatarAlt: "Greg Hooper",
};

export default function Home() {
  return <PostCard {...featuredPost} priority />;
}
