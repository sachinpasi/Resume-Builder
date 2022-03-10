import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import VerticalWidget from "../../../../Components/User_Components/Editor/HeaderModal/Widgets/VerticalWidget";
import { useAppSelector } from "../../../../Redux/hooks";
import Section_Heading from "../Section_Heading";

type Props = {};

const Interest = (props: Props) => {
  const Data = useAppSelector((state) => state.resume.Interests);
  const [isActiveState, setisActiveState] = useState("");
  const [Interest, setInterset] = useState<any>({
    id: "",
    value: "",
  });

  return (
    <div className="w-full mb-6 relative">
      {isActiveState && (
        <VerticalWidget
          isActiveState={isActiveState}
          setisActiveState={setisActiveState}
          isRight={true}
          isInterset={true}
        />
      )}
      <Section_Heading name="INTERESTS" />
      <div className="flex gap-1.5 px-6 flex-wrap">
        {Data.map(({ id, value }) => (
          <div
            key={id}
            onFocus={() => {
              setTimeout(() => {
                setisActiveState(id);
              }, 200);
            }}
            onBlur={() => {
              setTimeout(() => {
                setisActiveState("");
              }, 200);
            }}
            className="  px-[10px] py-[2.5px] border border-editor-text text-black flex justify-center items-center rounded"
          >
            <div
              // onBlur={(e) => {
              //   dispatch(UPDATE_USER_PROJECT(ProjectItemState));
              // }}
              // onInput={(e) =>
              //   setProjectItemState({
              //     ...ProjectItemState,
              //     Title: e.currentTarget.textContent,
              //     id: project.id,
              //   })
              // }
              contentEditable
              suppressContentEditableWarning={true}
              className="text-[10px] outline-none "
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
