import moment from "moment";
import Image from "next/image";
import CodeHighlighter from "./CodeHighlighter";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
// import { FaCircle } from "react-icons/fa";

function PostDetail({ post }) {
  // Calculating post reading time
  let content = [];
  post.content.raw.children.map((item) => {
    item.children.map((i) => {
      content.push(i.text);
    });
  });
  const readTime =
    0.008 *
    content
      .toString()
      .split(" ")
      .filter((el) => {
        return el.length;
      }).length;

  return (
    <>
      <div className="mb-5 flex gap-2 items-center">
        <Image
          src={post.author.photo.url}
          alt={post.title}
          height={30}
          width={30}
          objectFit="cover"
          className="rounded-full"
        />
        <div className="flex gap-5">
          <p>
            <span className="text-primary">{post.author.author}</span>
          </p>
          <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-5">{post.title}</h1>
        <p className="text-xs italic">{Math.floor(readTime)} min read ★</p>
      </div>
      <div className="w-full mb-5">
        <div className="w-full h-full relative">
          {post.featuredImage?.url != null && (
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              width={1920}
              height={1080}
              priority={true}
              layout="responsive"
              objectFit="cover"
              quality={30}
            />
          )}
        </div>
      </div>

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
          code: ({ children }) => (
            <code className="bg-codeDark px-1 text-gray-100">{children}</code>
          ),

          blockquote: ({ children }) => (
            <p className="border-l-4 border-primary/50 pl-5 my-10">
              {children}
            </p>
          ),

          li: ({ children }) => <p className="mb-5">• {children}</p>,

          img: ({ src, title, width, height, altText }) => (
            <div className="my-10">
              <Image
                src={src}
                alt={altText + title}
                height={height}
                width={width}
                layout="responsive"
                objectFit="cover"
                quality={30}
                priority={true}
              />
            </div>
          ),
          class: ({ children, className }) => {
            switch (className) {
              case "primary":
                return (
                  <div className="bg-primary/5 text-primary px-3 pb-2 pt-4 flex items-center mb-0 note">
                    <span>{children}</span>
                  </div>
                );
              case "danger":
                return (
                  <div className="bg-red-500/5 text-red-500 px-3 pb-2 pt-4 flex items-center mb-0 note">
                    <span>{children}</span>
                  </div>
                );
              case "warning":
                return (
                  <div className="bg-yellow-500/5 text-yellow-500 px-3 pb-2 pt-4 flex items-center mb-0 note">
                    <span>{children}</span>
                  </div>
                );
              case "success":
                return (
                  <div className="bg-green-500/5 text-green-500 px-3 pb-2 pt-4 flex items-center mb-0 note">
                    <span>{children}</span>
                  </div>
                );

              default:
                return <>{children}</>;
            }
          },
        }}
      />
    </>
  );
}

export default PostDetail;
