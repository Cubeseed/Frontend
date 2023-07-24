import React, { useContext, useState } from "react";
import { Context } from "@/context/context";
type TextAreaProps = {
  limit: number;
};

function Textarea({ limit }: TextAreaProps) {
  const { setText, text } = useContext(Context);

  // const [content, setContent] = React.useState<string>();

  const handleTextArea = React.useCallback(
    (text: string) => {
      setText(text.slice(0, limit));
    },
    [limit, setText]
  );

  return (
    <>
      <textarea
        value={text}
        placeholder="input"
        onChange={(e) => handleTextArea(e.target.value)}
      ></textarea>
      <span> {limit} character limit left</span>
    </>
  );
}

export default Textarea;
