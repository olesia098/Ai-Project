"use client";

import { useState } from "react";
import Avatar from "@/app/components/Avatar";
import DesktopItem from "@/app/components/sidebar/DesktopItem";
import useRoutes from "@/app/hooks/useRoutes";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { HiChat } from "react-icons/hi";
import clsx from "clsx";

interface ConversationInfo{
    selected?: boolean;
  }

const ConversationInfo: React.FC<ConversationInfo> = ({
    selected
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const routes = useRoutes();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={clsx(`
          w-[42vh] 
          relative 
          flex 
          items-center 
          space-x-3 
          p-3 
          hover:bg-[#3a38b0d5]
          rounded-lg
          transition
          cursor-pointer
          `,
             selected ? "bg-[#3a38b0d5]" : "bg-[#3a38b0d5]"
        )}
        onClick={toggleModal}
      >
        <div className="flex items-center justify-center">
          <Avatar />
          <p className="ml-2 text-slate-200">Olesya</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed left-6 bottom-24 flex items-center justify-cente bg-opacity-50">
          <div className="bg-[#3a38b0d5] p-4 rounded-lg w-[42vh]">
            <ul role="list" className="flex items-center space-y-1">
              <li>
                {routes.map((item) => (
                  <DesktopItem
                    key={item.label}
                    href="#"
                    label="Logout"
                    icon={HiArrowLeftOnRectangle}
                    onClick={item.onClick}
                  />
                ))}
              </li>
              <li className="text-slate-200">Log Out</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ConversationInfo;
