import { useState, useEffect } from "react";
import hljs from "highlight.js";

function CodeHighlighter({ codeString }) {
  const [isCopied, setIsCopied] = useState(false);
  // const codeRef = useRef();

  // onClick handler function for the copy button
  const text = codeString.props.content[0].text;
  // const pure = text.forEach(function (element) {
  //   element.innerHTML = element.innerHTML
  //     .replace(/&/g, "&amp;")
  //     .replace(/</g, "&lt;")
  //     .replace(/>/g, "&gt;")
  //     .replace(/"/g, "&quot;")
  //     .replace(/'/g, "&#039;");
  // });
  useEffect(() => {
    hljs.highlightAll();
  });
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log("Error occured", err);
      });
  };

  return (
    <div className="bg-secondaryDark rounded-md w-full flex flex-col items-end">
      <button
        className="z-10 my-2 px-4 py-2 bg-primary text-gray-100  shadow-2xl shadow-primary/50 rounded-sm hover:opacity-90"
        onClick={handleCopyClick}
      >
        {isCopied ? "Copied!!" : "Copy"}
      </button>
      <pre className="w-full">
        <code className="jsx">{codeString}</code>
      </pre>
    </div>
  );
}

export default CodeHighlighter;
