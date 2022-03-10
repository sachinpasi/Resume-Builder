import React, { useEffect, useState } from "react";
import VerticalWidget from "../../../../Components/User_Components/Editor/HeaderModal/Widgets/VerticalWidget";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { UPDATE_USER_EDUCATION } from "../../../../Redux/Slices/ResumeSlice";
import Side_Primary from "../Icons/Side_Primary";
import Section_Heading from "../Section_Heading";

type Props = {};

const Education = (props: Props) => {
  const Data = useAppSelector((state) => state.resume.Education);
  const [isActiveState, setisActiveState] = useState("");
  const [Education, setEducation] = useState<any>({
    id: "",
    StudyProgram: "",
    Institute: "",
    From: "",
    To: "",
    Aggregate: "",
  });

  const dispatch = useAppDispatch();

  return (
    <div className="w-full mb-6 relative">
      {isActiveState && (
        <VerticalWidget
          isActiveState={isActiveState}
          setisActiveState={setisActiveState}
          isEducation={true}
        />
      )}
      <Section_Heading name="Education" />
      <div className="w-full h-auto">
        {Data?.map(({ StudyProgram, Aggregate, From, Institute, To, id }) => {
          return (
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
              className=" pl-4 relative h-full w-full pb-2"
            >
              <Side_Primary isLastElement={Data[Data.length - 1].id === id} />
              <div className="pl-5 ">
                <div
                  onBlur={(e) => {
                    dispatch(UPDATE_USER_EDUCATION(Education));
                  }}
                  onInput={(e) =>
                    setEducation({
                      ...Education,
                      StudyProgram: e.currentTarget.textContent,
                      id: id,
                    })
                  }
                  contentEditable
                  suppressContentEditableWarning={true}
                  className="text-[12px] font-bold w-full focus:outline-none overflow-hidden  focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                >
                  {StudyProgram}
                </div>
                <div
                  onBlur={(e) => {
                    dispatch(UPDATE_USER_EDUCATION(Education));
                  }}
                  onInput={(e) =>
                    setEducation({
                      ...Education,
                      Institute: e.currentTarget.textContent,
                      id: id,
                    })
                  }
                  contentEditable
                  suppressContentEditableWarning={true}
                  className="text-[11px] leading-[14px]  mb-1 w-full focus:outline-none overflow-hidden  focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                >
                  {Institute}
                </div>
                <div className="flex items-start justify-between text-editor-text  ">
                  <div className="flex gap-[3px] whitespace-nowrap ">
                    <div
                      onBlur={(e) => {
                        dispatch(UPDATE_USER_EDUCATION(Education));
                      }}
                      onInput={(e) =>
                        setEducation({
                          ...Education,
                          From: e.currentTarget.textContent,
                          id: id,
                        })
                      }
                      contentEditable
                      suppressContentEditableWarning={true}
                      className="text-[9px] italic tracking-wide w-full focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light  "
                    >
                      {From}
                    </div>
                    <div className="text-[9px] italic tracking-wide">-</div>
                    <div
                      onBlur={(e) => {
                        dispatch(UPDATE_USER_EDUCATION(Education));
                      }}
                      contentEditable
                      onInput={(e) =>
                        setEducation({
                          ...Education,
                          To: e.currentTarget.textContent,
                          id: id,
                        })
                      }
                      suppressContentEditableWarning={true}
                      className="text-[9px]  italic tracking-wide w-full focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                    >
                      {To}
                    </div>
                  </div>

                  <div
                    onBlur={(e) => {
                      dispatch(UPDATE_USER_EDUCATION(Education));
                    }}
                    contentEditable
                    onInput={(e) =>
                      setEducation({
                        ...Education,
                        Aggregate: e.currentTarget.textContent,
                        id: id,
                      })
                    }
                    suppressContentEditableWarning={true}
                    className=" text-[9px] italic tracking-wide   focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                  >
                    {Aggregate}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
