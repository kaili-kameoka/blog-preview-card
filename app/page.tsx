import PostCard from "@/components/PostCard/PostCard";

const featuredPost = {
  category: "Learning",
  publishedAt: "Published 21 Dec 2023",
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  illustrationSrc: "/illustration-article.svg",
  authorName: "Greg Hooper",
  authorAvatarSrc: "/image-avatar.webp",
};

export default function Home() {
  return <PostCard {...featuredPost} priority />;
}
