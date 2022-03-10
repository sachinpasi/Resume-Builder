import React, { useState } from "react";
import ElementOfElementWidegt from "../../../../Components/User_Components/Editor/HeaderModal/Widgets/ElementOfElementWidegt";
import VerticalWidget from "../../../../Components/User_Components/Editor/HeaderModal/Widgets/VerticalWidget";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import {
  ADD_EMPTY_LINE_WORK_EXPERIENEC_ROLE,
  REMOVE_WORK_EXPERIENCE_ROLE,
  UPDATE_USER_WORK_EXPERIENCE,
} from "../../../../Redux/Slices/ResumeSlice";
import Details_Border from "../Icons/Details_Border";
import Side_Primary from "../Icons/Side_Primary";
import Section_Heading from "../Section_Heading";

type Props = {};

const Work_Experience = (props: Props) => {
  const Data = useAppSelector((state) => state.resume.WorkExperience);
  const [isActiveState, setisActiveState] = useState("");
  const [isRoleActive, setisRoleActive] = useState("");
  const [WorkExperience, setWorkExperience] = useState<any>({
    id: "",
    Designation: "",
    Company: "",
    From: "",
    To: "",
    City: "",
    Country: "",
    RoleId: "",
    value: "",
  });

  const dispatch = useAppDispatch();

  const HandleAddingNewLineInRole = (id: any) => {
    dispatch(
      ADD_EMPTY_LINE_WORK_EXPERIENEC_ROLE({
        id: id,
      })
    );
  };

  return (
    <div className="w-full pb-8 relative">
      <Section_Heading name="Work Experience" />
      {isActiveState && (
        <VerticalWidget
          isActiveState={isActiveState}
          setisActiveState={setisActiveState}
          isWorkExperience={true}
        />
      )}
      <div className="w-full h-auto">
        {Data.map(
          ({ City, Company, Country, Designation, From, Role, To, id }) => (
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
              className=" pl-4 relative h-full w-full pb-2 "
            >
              <Side_Primary isLastElement={Data[Data.length - 1].id === id} />
              <div className={"pl-5"}>
                <div
                  onBlur={(e) => {
                    dispatch(UPDATE_USER_WORK_EXPERIENCE(WorkExperience));
                  }}
                  onInput={(e) =>
                    setWorkExperience({
                      ...WorkExperience,
                      Designation: e.currentTarget.textContent,
                      id: id,
                    })
                  }
                  contentEditable
                  suppressContentEditableWarning={true}
                  className="text-[12px] font-bold w-full focus:outline-none overflow-hidden  focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                >
                  {Designation}
                </div>
                <div
                  onBlur={(e) => {
                    dispatch(UPDATE_USER_WORK_EXPERIENCE(WorkExperience));
                  }}
                  onInput={(e) =>
                    setWorkExperience({
                      ...WorkExperience,
                      Company: e.currentTarget.textContent,
                      id: id,
                    })
                  }
                  contentEditable
                  suppressContentEditableWarning={true}
                  className="text-[11px] leading-[14px]  mb-1 w-full focus:outline-none overflow-hidden  focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                >
                  {Company}
                </div>

                <div className="flex items-start justify-between text-editor-text  ">
                  <div className="flex gap-[3px] whitespace-nowrap ">
                    <div
                      onBlur={(e) => {
                        dispatch(UPDATE_USER_WORK_EXPERIENCE(WorkExperience));
                      }}
                      onInput={(e) =>
                        setWorkExperience({
                          ...WorkExperience,
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
                        dispatch(UPDATE_USER_WORK_EXPERIENCE(WorkExperience));
                      }}
                      onInput={(e) =>
                        setWorkExperience({
                          ...WorkExperience,
                          To: e.currentTarget.textContent,
                          id: id,
                        })
                      }
                      contentEditable
                      suppressContentEditableWarning={true}
                      className="text-[9px]  italic tracking-wide w-full focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                    >
                      {To}
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    <div
                      onBlur={(e) => {
                        dispatch(UPDATE_USER_WORK_EXPERIENCE(WorkExperience));
                      }}
                      onInput={(e) =>
                        setWorkExperience({
                          ...WorkExperience,
                          City: e.currentTarget.textContent,
                          id: id,
                        })
                      }
                      contentEditable
                      suppressContentEditableWarning={true}
                      className=" text-[9px] italic tracking-wide   focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                    >
                      {City}
                    </div>
                    <div className=" text-[9px] italic tracking-wide   focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light ">
                      ,
                    </div>
                    <div
                      onBlur={(e) => {
                        dispatch(UPDATE_USER_WORK_EXPERIENCE(WorkExperience));
                      }}
                      onInput={(e) =>
                        setWorkExperience({
                          ...WorkExperience,
                          Country: e.currentTarget.textContent,
                          id: id,
                        })
                      }
                      contentEditable
                      suppressContentEditableWarning={true}
                      className=" text-[9px] italic tracking-wide   focus:outline-none   focus:border-b-[1.5px] focus:mb-1 border-editor-green-light "
                    >
                      {Country}
                    </div>
                  </div>
                </div>

                <div className="px-2 py-2 relative mt-2 w-full h-auto">
                  <div className="text-[9px] text-editor-text absolute -top-1.5 left-[15px] italic">
                    Role
                  </div>
                  <Details_Border />

                  <div className="flex flex-col gap-1 relative">
                    {Role.map((data, index) => {
                      if (data.value !== "") {
                        return (
                          <div
                            key={index}
                            className="flex items-start gap-1 w-full -ml-0.5 -mr-0.5"
                          >
                            <div className="text-editor-text h-[10px] inline-flex items-center">
                              -
                            </div>
                            <div
                              onBlur={(e) => {
                                dispatch(
                                  UPDATE_USER_WORK_EXPERIENCE(WorkExperience)
                                );
                              }}
                              onInput={(e) =>
                                setWorkExperience({
                                  ...WorkExperience,
                                  RoleId: data.id,
                                  value: e.currentTarget.textContent,
                                  id: id,
                                })
                              }
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  HandleAddingNewLineInRole(id);
                                }
                              }}
                              onKeyDown={(e) => {
                                if (
                                  e.key === "Backspace" &&
                                  e.currentTarget.textContent === ""
                                ) {
                                  dispatch(
                                    REMOVE_WORK_EXPERIENCE_ROLE({
                                      id,
                                      RoleId: data.id,
                                    })
                                  );
                                  setTimeout(() => {
                                    setisActiveState("");
                                  }, 200);
                                }
                              }}
                              contentEditable
                              suppressContentEditableWarning={true}
                              className="text-[10px] leading-[12px] w-full focus:outline-none overflow-hidden  focus:border-b-[1.5px] focus:mb-1 border-editor-green-light  "
                            >
                              {data.value}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Work_Experience;
