import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../button/Button";

function PostCard({ post }) {
  const router = useRouter();

  return (
    <div className="mb-5 bg-secondaryDark">
      {post.featuredImage?.url != null ? (
        <Image
          src={post.featuredImage.url}
          height={1080}
          width={1920}
          layout="responsive"
          objectFit="cover"
          quality={30}
          priority={true}
        />
      ) : (
        "hello"
      )}
      <div className=" mt-5 p-4">
        <div className="flex gap-x-2 items-center mb-5">
          <Image
            src={post.author.photo.url}
            className="rounded-full"
            height={60}
            width={60}
            objectFit="cover"
          />
          <div>
            <p className=" text-gray-100">{post.author.author}</p>
            <p className="text-sm">
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </p>
          </div>
        </div>
        <h1 className="text-xl font-semibold mb-2 line-clamp-3">
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
