import React from "react";
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsFillPlusCircleFill,
  BsPlusCircle,
} from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { useAppDispatch } from "../../../../../Redux/hooks";
import {
  CREATE_EMPTY_EDUCTAION_FIELD,
  CREATE_EMPTY_INTEREST_FIELD,
  CREATE_EMPTY_PROJECT_FIELD,
  CREATE_EMPTY_WORK_EXPERIENCE_FIELD,
  CREATE_SKILLS_ITEM,
  DELETE_EDUCATION_ITEM,
  DELETE_PROJECT_FIELD,
  DELETE_WORK_EXPERIENCE_ITEM,
  MOVE_EDUCTAION_ELEMENT_BOTTOM,
  MOVE_EDUCTAION_ELEMENT_TOP,
  MOVE_INTEREST_ITEM_ABOVE,
  MOVE_INTEREST_ITEM_BELOW,
  MOVE_PROJECT_ITEM_ABOVE,
  MOVE_PROJECT_ITEM_BELOW,
  MOVE_SKILL_ITEM_ABOVE,
  MOVE_SKILL_ITEM_BELOW,
  MOVE_WORK_EXPERIENCE_BOTTOM,
  MOVE_WORK_EXPERIENCE_ELEMENT_TOP,
  REMOVE_INTEREST_ITEM,
  REMOVE_SKILL_ITEM,
} from "../../../../../Redux/Slices/ResumeSlice";

const VerticalWidget = ({
  isActiveState,
  isInterset,
  isWorkExperience,
  isEducation,
  isProjects,
  isRight,
  isSkills,
}: any) => {
  const dispatch = useAppDispatch();

  const HandleDeleteItem = () => {
    if (isWorkExperience) {
      dispatch(
        DELETE_WORK_EXPERIENCE_ITEM({
          id: isActiveState,
        })
      );
    }

    if (isEducation) {
      dispatch(
        DELETE_EDUCATION_ITEM({
          id: isActiveState,
        })
      );
    }

    if (isProjects) {
      dispatch(
        DELETE_PROJECT_FIELD({
          id: isActiveState,
        })
      );
    }

    if (isSkills) {
      dispatch(
        REMOVE_SKILL_ITEM({
          id: isActiveState,
        })
      );
    }

    if (isInterset) {
      dispatch(
        REMOVE_INTEREST_ITEM({
          id: isActiveState,
        })
      );
    }
  };

  const HandleElementMoveUp = () => {
    if (isWorkExperience) {
      dispatch(
        MOVE_WORK_EXPERIENCE_ELEMENT_TOP({
          id: isActiveState,
        })
      );
    }
    if (isEducation) {
      dispatch(
        MOVE_EDUCTAION_ELEMENT_TOP({
          id: isActiveState,
        })
      );
    }
    if (isProjects) {
      dispatch(
        MOVE_PROJECT_ITEM_ABOVE({
          id: isActiveState,
        })
      );
    }

    if (isSkills) {
      dispatch(
        MOVE_SKILL_ITEM_ABOVE({
          id: isActiveState,
        })
      );
    }
    if (isInterset) {
      dispatch(
        MOVE_INTEREST_ITEM_ABOVE({
          id: isActiveState,
        })
      );
    }
  };

  const HandleElementMoveDown = () => {
    if (isWorkExperience) {
      dispatch(
        MOVE_WORK_EXPERIENCE_BOTTOM({
          id: isActiveState,
        })
      );
    }
    if (isEducation) {
      dispatch(
        MOVE_EDUCTAION_ELEMENT_BOTTOM({
          id: isActiveState,
        })
      );
    }
    if (isProjects) {
      dispatch(
        MOVE_PROJECT_ITEM_BELOW({
          id: isActiveState,
        })
      );
    }
    if (isSkills) {
      dispatch(
        MOVE_SKILL_ITEM_BELOW({
          id: isActiveState,
        })
      );
    }

    if (isInterset) {
      dispatch(
        MOVE_INTEREST_ITEM_BELOW({
          id: isActiveState,
        })
      );
    }
  };

  const HandleCreateEmptyField = () => {
    if (isWorkExperience) {
      dispatch(CREATE_EMPTY_WORK_EXPERIENCE_FIELD());
    }
    if (isEducation) {
      dispatch(CREATE_EMPTY_EDUCTAION_FIELD());
    }
    if (isProjects) {
      dispatch(CREATE_EMPTY_PROJECT_FIELD());
    }
    if (isSkills) {
      dispatch(CREATE_SKILLS_ITEM());
    }
    if (isInterset) {
      dispatch(CREATE_EMPTY_INTEREST_FIELD());
    }
  };

  return (
    <div
      className={
        isRight
          ? "absolute z-10 flex flex-col items-center justify-around text-white w-6 h-28 rounded-full bg-editor-text top-2/4 bottom-2/4 -translate-y-[40%] -right-4"
          : "absolute z-10 flex flex-col items-center justify-around text-white w-6 h-28 rounded-full bg-editor-text top-2/4 bottom-2/4 -translate-y-[40%] -left-4"
      }
    >
      <div className="cursor-pointer bg-[#1AB385] rounded-full ">
        <IoAdd onClick={HandleCreateEmptyField} />
      </div>

      <div className="flex flex-col gap-1.5">
        <BsArrowUpCircle
          onClick={HandleElementMoveUp}
          className="cursor-pointer"
        />
        <BsArrowDownCircle
          onClick={HandleElementMoveDown}
          className="cursor-pointer"
        />
      </div>
      <MdDelete
        onClick={HandleDeleteItem}
        className="cursor-pointer text-red-400"
      />
    </div>
  );
};

export default VerticalWidget;
