import React, { useState } from "react";
type TextAreaProps = {
  limit: number;
};

function Textarea({ limit }: TextAreaProps) {
  const [content, setContent] = React.useState<string>();

  const handleTextArea = React.useCallback(
    (text: string) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <>
      <textarea
        value={content}
        placeholder="input"
        onChange={(e) => handleTextArea(e.target.value)}
      ></textarea>
      <span> {limit} character limit left</span>
    </>
  );
}

export default Textarea;
