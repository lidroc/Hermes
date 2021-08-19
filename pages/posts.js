import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import PostList from "@/components/post-list";
import { getAllPosts } from "@/lib/api";

export default function Posts({ posts }) {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <PostList posts={posts} />
        </Container>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params }) {
  const posts = getAllPosts(["slug", "title", "date"]);

  return { props: { posts: posts } };
}
