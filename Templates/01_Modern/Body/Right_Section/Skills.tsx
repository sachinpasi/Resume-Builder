import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import VerticalWidget from "../../../../Components/User_Components/Editor/HeaderModal/Widgets/VerticalWidget";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import {
  MOVE_SKILL_ITEM_ABOVE,
  MOVE_SKILL_ITEM_BELOW,
  REMOVE_SKILL_ITEM,
  SET_FOCUS_TO_SECTION,
  UPDATE_SKILLS_ITEM,
} from "../../../../Redux/Slices/ResumeSlice";
import Section_Heading from "../Section_Heading";

type Props = {};

const Skills = (props: Props) => {
  const [isActiveState, setisActiveState] = useState("");
  const [SkillsItem, setSkillsItem] = useState<any>({
    id: "",
    value: "",
  });
  const Data = useAppSelector((state) => state.resume.Skills);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full pb-8 relative  ">
      {isActiveState && (
        <VerticalWidget
          isActiveState={isActiveState}
          setisActiveState={setisActiveState}
          isRight={true}
          isSkills={true}
        />
      )}
      <Section_Heading name="Skills" />
      <div className="flex gap-1.5 px-6 flex-wrap">
        {Data.map(({ id, value }) => (
          <div
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
            key={id}
            className=" px-[10px] py-[3px] w-auto transition-all  bg-theme-black-light bg-opacity-70 text-white gap-1 flex justify-center items-center rounded "
          >
            <div
              onBlur={(e) => {
                if (SkillsItem.id && SkillsItem.value !== "") {
                  dispatch(UPDATE_SKILLS_ITEM(SkillsItem));
                }

                if (e.currentTarget.textContent === "") {
                  dispatch(
                    REMOVE_SKILL_ITEM({
                      id,
                    })
                  );
                }
              }}
              onInput={(e) => {
                setSkillsItem({
                  ...SkillsItem,
                  id: id,
                  value: e.currentTarget.textContent,
                });
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Backspace" &&
                  e.currentTarget.textContent === ""
                ) {
                  dispatch(
                    REMOVE_SKILL_ITEM({
                      id,
                    })
                  );
                }
              }}
              contentEditable
              suppressContentEditableWarning
              className="text-[10px] outline-none focus:px-2   "
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
