"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";
import { IoImagesOutline, IoSendOutline  } from "react-icons/io5";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId: conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result.info.secure_url,
      conversationId: conversationId,
    });
  };

  return (
    <div
      className="py-4 
        px-4 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
        bg-[#252784]
        "
    >
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="bcspyf5d"
      >
        <IoImagesOutline size={30} className="text-gray-200" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Message ChatGPT..."
        />
        <button
          type="submit"
          className="
            rounded-full 
            p-2 
            bg-gray-200 
            cursor-pointer 
            hover:bg-[#3A38B0] 
            transition
          "
        >
          <IoSendOutline  size={18} className="text-[#141351] " />
        </button>
      </form>
    </div>
  );
};

export default Form;
