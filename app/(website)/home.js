"use client";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import MagazineCarousel from "@/components/magazineCarousel";
import VerticalCards from "@/components/verticalCards";
import CoverStories from "@/components/magazineList";
import Mastertalks from "@/components/magazineList2";
import BusBulletins from "@/components/BusBulletins";
import Header from "@/components/header";

export default function Post({ posts }) {
  return (
    <>
      <Header />
      <MagazineCarousel />
      <VerticalCards />
      <CoverStories />
      <BusBulletins />
      <Mastertalks />
      <BusBulletins />
      <BusBulletins />
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
