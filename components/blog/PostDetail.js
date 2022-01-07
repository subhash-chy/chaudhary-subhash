import moment from "moment";
import Image from "next/image";
import CodeHighlighter from "./CodeHighlighter";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";

function PostDetail({ post }) {
  return (
    <>
      <div className="w-full mb-5">
        <div className="w-full h-full relative">
          {post.featuredImage?.url != null ? (
            <Image
              src={post.featuredImage.url}
              width={1920}
              height={1080}
              priority={true}
              layout="responsive"
              objectFit="cover"
              quality={30}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mb-12 flex gap-5 items-center">
        <Image
          src={post.author.photo.url}
          height={50}
          width={50}
          objectFit="cover"
          className="rounded-full"
        />
        <div>
          <h2 className="font-bold">{post.author.author}</h2>
          <p>{moment(post.createdAt).format("DD MMM, YYYY")}</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-5">{post.title}</h1>

      <RichText
        content={post.content.raw}
        renderers={{
          a: ({ children, openInNewTab, href, rel, ...rest }) => {
            if (href.match(/^https?:\/\/|^\/\//i)) {
              return (
                <Link href={href} {...rest}>
                  <a
                    className="text-primary"
                    target={openInNewTab ? "_blank" : "_self"}
                    rel={rel || "noopener noreferrer"}
                  >
                    {children}
                  </a>
                </Link>
              );
            }
          },
          h1: ({ children }) => (
            <h1 className="text-2xl font-semiboldmt-10 mb-3 line-clamp-3">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold mt-10 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-10 mb-3">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-md font-semibold mt-10 mb-3">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="font-semibold mt-10 mb-3">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="font-semibold mt-10 mb-3">{children}</h6>
          ),
          p: ({ children }) => <p className=" mb-3">{children}</p>,

          // bold, italic or underline
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <em>{children}</em>,
          underline: ({ children }) => <u>{children}</u>,

          code_block: ({ children }) => (
            <div className="my-12">
              <CodeHighlighter codeString={children} />
            </div>
          ),
          // code: ({ children }) => <code className="my-20">{children}</code>,

          blockquote: ({ children }) => (
            <p className="border-l-4 border-primary/50 pl-5 my-10">
              {children}
            </p>
          ),

          img: ({ src, title, width, height, mimeType, altText }) => (
            <div className="my-10">
              <Image
                src={src}
                alt={altText + title}
                height={height}
                width={width}
                layout="responsive"
                objectFit="cover"
                quality={30}
              />
            </div>
          ),
        }}
      />
    </>
  );
}

export default PostDetail;
