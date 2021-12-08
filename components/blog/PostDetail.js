import moment from "moment";
import Image from "next/image";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PostDetail({ post }) {
  const richTextFragments = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-lg font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </h4>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-lg">
            {modifiedText.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </p>
        );

      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="w-full bg-red-100 mb-5">
        <div className="imageContainer">
          <Image
            className="image"
            src={post.featuredImage.url}
            // width={1920}
            // height={1080}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mb-12 flex gap-5 items-center">
        <Image
          //needs to be changed or removed the unoptimized
          unoptimized
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
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          richTextFragments(itemindex, item.text, item)
        );

        return richTextFragments(index, children, typeObj, typeObj.type);
      })}
      {/* {documentToReactComponents(post.content.raw.children)} */}
    </>
  );
}

export default PostDetail;
