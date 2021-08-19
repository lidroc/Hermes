import Link from "next/link";
import DateFormatter from "@/components/date-formatter";

export default function PostList({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a className="flex items-start justify-between px-4 py-2 mb-2 -mx-4 space-x-4 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50">
              <div>
                <span className="block text-sm text-gray-700 md:hidden">
                  <DateFormatter dateString={post.date} />
                </span>
                <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
                  {post.title}
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="hidden text-sm text-gray-700 md:block">
                  <DateFormatter dateString={post.date} />
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
