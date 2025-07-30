import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const zObject = z.object({
  tags: z
    .array(z.string().min(2, "must contains 2 character."))
    .min(1, "atleast one tag is required."),
});

export default function TagsForm() {
  const {
    reset,
    // register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: { tags: [] },
    resolver: zodResolver(zObject),
  });
  const [inputTag, setInputTage] = useState("");

  const addTag = () => {
    const trimmed = inputTag.trim();
    if (trimmed.length < 2) {
      alert("each tag must have 2 chars.");
      return;
    }
    const currentTags = getValues("tags");
    if (currentTags.includes(trimmed)) {
      alert("this tag is already added.");
      return;
    }
    setValue("tags", [...currentTags, trimmed]);
    setInputTage("");
  };
  const onSubmit = (data) => {
    console.log("tags submitted: ", data);
    alert("tatg dubmitted.");
    reset();
    setInputTage();
  };
  const tags = getValues("tags") || [];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="enter tag"
          type="text"
          value={inputTag}
          onChange={(e) => setInputTage(e.target.value)}
        />

        <button 
        type="button" onClick={addTag}>add tag</button>

        {errors.tags && <p>{errors.tags.message}</p>}

        {tags.length > 0 && (
          <ul>
            {tags.map((tag,index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        )}
        <button type="submit">submit tags</button>
      </form>
    </div>
  );
}

/*

tags arrays of strings
at least one tag required non-empty
each tatg must be string with min 2 chars 

*/
