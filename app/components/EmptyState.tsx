import Image from "next/image";

const EmptyState = () => {
  return (
    <div
      className="
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          h-full 
          flex 
          justify-center 
          items-center           
        "

    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-200">
          <div>
            <Image
              height="48"
              width="48"
              className="mx-auto w-auto"
              src="/images/icon-gpt.webp"
              alt="Logo"
            ></Image>
          </div>
          Start Chat
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
