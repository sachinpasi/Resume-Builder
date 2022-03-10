import React from "react";
import { HiMail } from "react-icons/hi";

import { RiLinkedinBoxFill, RiGithubFill, RiGlobalLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { useAppSelector } from "../../../../Redux/hooks";
import { Edit_Header_Modal_Type } from "../../../../Interfaces/typings";

const Header_Main = ({ setisHeaderEditModalOpen }: Edit_Header_Modal_Type) => {
  const Data = useAppSelector((state) => state.resume);

  const Name = () => (
    <div className="w-full block text-2xl text-editor-heading font-medium  ">
      {Data.Name}
    </div>
  );
  const Professional_Title = () => (
    <div className="w-full text-[13px] block  text-editor-text leading-[13px]   ">
      {Data.ProfessionalTitle}
    </div>
  );

  const Contact_Section = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full flex flex-col items-end gap-[10px]  ">
      {children}
    </div>
  );

  const Contact_Item = ({ Href, Title, Icon }: any) => (
    <a href={Href} className="flex items-center space-x-1.5">
      <h6 className="text-[9px] text-editor-heading">{Title}</h6>
      <Icon className="text-sm text-editor-text" />
    </a>
  );

  return (
    <div className="relative">
      <div
        onClick={() => setisHeaderEditModalOpen(true)}
        className="w-full h-full absolute cursor-pointer"
      ></div>
      <div className="min-h-[80px] mb-4 flex items-start w-full">
        <div className="w-2/4 h-full">
          <Name />
          <Professional_Title />
        </div>
        <div className="w-2/4 h-full">
          <Contact_Section>
            {Data.Email && (
              <Contact_Item
                Title={Data.Email}
                Href={`mailto:${Data.Email}`}
                Icon={HiMail}
              />
            )}

            {Data?.PhoneNumber && (
              <Contact_Item
                Title={Data.PhoneNumber}
                Href={`tel:${Data.PhoneNumber}`}
                Icon={BsFillPhoneFill}
              />
            )}

            {Data?.LinkedIn && (
              <Contact_Item
                Title={Data.LinkedIn.slice(4)}
                Href={`https://${Data.LinkedIn}`}
                Icon={RiLinkedinBoxFill}
              />
            )}

            {Data?.GitHub && (
              <Contact_Item
                Title={Data.GitHub.slice(4)}
                Href={`https://${Data.GitHub}`}
                Icon={RiGithubFill}
              />
            )}

            {Data?.Website && (
              <Contact_Item
                Title={Data.Website}
                Href={`https://${Data.Website}`}
                Icon={RiGlobalLine}
              />
            )}

            {(Data?.Country || Data?.City || Data?.Area) && (
              <Contact_Item
                Title={`${Data.Area}, ${Data.City}, ${Data.Country}`}
                Icon={MdLocationPin}
              />
            )}
          </Contact_Section>
        </div>
      </div>
    </div>
  );
};

export default Header_Main;
