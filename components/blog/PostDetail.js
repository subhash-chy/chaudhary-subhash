import moment from "moment";
import Image from "next/image";
import CodeHighlighter from "./CodeHighlighter";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PostDetail({ post }) {
  // let mc = post.content.raw.children;
  // let nc = mc.map((item, index) => {
  //   // this is undefined
  //   // console.log(item, index);
  //   if (item.type == "paragraph") {
  //     console.log("Childrens at 1", item.children[1], index);
  //     item.children.map((citem, cindex) => {
  //       console.log("CITEM", citem, cindex);
  //       if (citem.type == "link" && citem.index == 1) {
  //         console.log("CITEM CHILDREN", citem.children);
  //         citem.children.map((litem, lindex) => {
  //           console.log("Litem", litem, lindex);
  //         });
  //       }
  //     });
  //   }
  // });
  // console.log("NC is", nc);
  // console.log(post.content.raw.children);
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
          <div key={index} className="mb-8 text-lg">
            {modifiedText.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        );
      // case "paragraph":
      //   switch (link) {
      //     case "link":
      //       return 1;

      //     default:
      //       break;
      //   }

      // case "link":
      //   return (
      //     <div key={index} className="mb-8 text-lg">
      //       {modifiedText.map((item, i) => (
      //         <a key={i}>
      //           {item},{console.log("Items are", item)}
      //         </a>
      //       ))}
      //     </div>
      //   );

      // <a href="https://google.com">test link</a>;

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
      case "code-block":
        return (
          <div key={index} className="my-12">
            {modifiedText.map((item, i) => (
              <CodeHighlighter key={i} codeString={item} />
            ))}
          </div>
        );
      //This is for links
      // case "flat-link":
      //   return (
      //     <a href="https://google.com" className="text-primary">
      //       {modifiedText.map((item, i) => (
      //         <div key={i}>
      //           {item}
      //           <p>test {console.log(item, "Itemsmsmmsmsms")}</p>
      //         </div>
      //       ))}
      //     </a>
      //   );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="w-full mb-5">
        <div className="w-full h-full relative">
          <Image
            className=""
            src={post.featuredImage.url}
            width={1920}
            height={1080}
            priority={true}
            layout="responsive"
            objectFit="cover"
            quality={30}
          />
        </div>
      </div>
      <div className="mb-12 flex gap-5 items-center">
        <Image
          //needs to be changed or removed the unoptimized
          // unoptimized
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
