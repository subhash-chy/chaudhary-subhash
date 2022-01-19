import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../button/Button";
import { IoIosTime } from "react-icons/io";

function PostCard({ post }) {
  const router = useRouter();

  return (
    <div className="mb-5 bg-secondaryDark w-full">
      {post.featuredImage?.url != null && post.author && (
        <Image
          className="mb-5"
          src={post.featuredImage.url}
          alt={post.title}
          height={1080}
          width={1920}
          layout="responsive"
          objectFit="cover"
          quality={30}
          // priority={true}
        />
      )}
      <div className="p-4">
        <div className="flex flex-wrap gap-x-2 items-center mb-5">
          {post.author && (
            <>
              <div className="flex items-center justify-center gap-x-2">
                <Image
                  src={post.author?.photo.url}
                  alt={post.author?.author}
                  className="rounded-full"
                  height={30}
                  width={30}
                  objectFit="cover"
                />
                <p className=" text-gray-300">{post.author?.author}</p>
              </div>
              <p className="mb-2">.</p>
            </>
          )}
          <p className="text-primary text-sm italic">
            <span className="flex items-center justify-center gap-x-1">
              <IoIosTime className="w-3 h-3" />
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </p>
        </div>
        <h1 className="text-2xl font-semibold mb-5 line-clamp-3">
          {post.title}
        </h1>
        <p className="mb-5 line-clamp-3">{post.metaDescription}</p>

        <Button
          onClick={() => router.push(`/blog/${post.slug}`)}
          accent
          title="READ MORE"
        />
      </div>
    </div>
  );
}

export default PostCard;
