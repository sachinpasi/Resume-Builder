import React, { useEffect, useRef, useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import VerticalWidget from "../../../../Components/User_Components/Editor/HeaderModal/Widgets/VerticalWidget";
import HrefModal from "../../../../Components/User_Components/Editor/HrefModal";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import {
  ADD_EMPTY_LINE_PROJECT_DESC,
  REMOVE_LINE_PROJECT_DESC,
  SET_FOCUS_TO_SECTION,
  UPDATE_USER_PROJECT,
} from "../../../../Redux/Slices/ResumeSlice";
import Section_Heading from "../Section_Heading";

type Props = {};

const Projects = (props: Props) => {
  const [isHrefModalOpen, setisHrefModalOpen] = useState(false);
  const [isActiveState, setisActiveState] = useState("");
  const dispatch = useAppDispatch();
  const ActiveProject = useAppSelector(
    (state) => state.resume.CurrentFocusSection
  );
  const [ProjectItemState, setProjectItemState] = useState<any>({
    id: "",
    Title: "",
    From: "",
    To: "",
    Link: "",

    DescId: "",
    value: "",
  });

  const Project_Description_Item = ({ data }: any) => (
    <div className="flex items-start">
      <div className="text-xs px-1.5 -ml-1 -mt-0.5">-</div>
      <div className="text-[10px] leading-[14px]">{data}</div>
    </div>
  );

  const Data = useAppSelector((state) => state.resume.Projects);

  return (
    <div
      onMouseLeave={() => {
        setisActiveState("");
        dispatch(UPDATE_USER_PROJECT(ProjectItemState));
      }}
      className="w-full  relative"
    >
      <Section_Heading name="Projects" />
      {isActiveState && (
        <VerticalWidget
          isActiveState={isActiveState}
          setisActiveState={setisActiveState}
          isProjects={true}
          isRight={true}
        />
      )}
      <div className="w-full">
        <div className=" px-6 relative h-full w-full pb-2">
          {Data.map((project) => {
            if (project?.id === isActiveState) {
              return (
                <div key={project.id} className="my-4">
                  <HrefModal
                    isHrefModalOpen={isHrefModalOpen}
                    setisHrefModalOpen={setisHrefModalOpen}
                    id={project.id}
                    setisInFocus={setisActiveState}
                  />
                  <div className="flex items-center justify-between w-full gap-2 pb-[1px]">
                    <div
                      onBlur={(e) => {
                        dispatch(UPDATE_USER_PROJECT(ProjectItemState));
                      }}
                      onInput={(e) =>
                        setProjectItemState({
                          ...ProjectItemState,
                          Title: e.currentTarget.textContent,
                          id: project.id,
                        })
                      }
                      contentEditable
                      suppressContentEditableWarning={true}
                      className="text-xs w-full outline-none overflow-hidden  border-b-[1.5px]  pb-1 focus:border-editor-green-light "
                    >
                      {project.Title}
                    </div>
                    <button onClick={() => setisHrefModalOpen(true)}>
                      <HiExternalLink className="text-xs text-editor-green opacity-70 cursor-pointer -mt-0.5" />
                    </button>
                  </div>
                  <div className="w-full flex items-center justify-between -mt-0.5 ">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div
                          contentEditable
                          suppressContentEditableWarning={true}
                          onBlur={(e) => {
                            dispatch(UPDATE_USER_PROJECT(ProjectItemState));
                          }}
                          onInput={(e) => {
                            setProjectItemState({
                              ...ProjectItemState,
                              From: e.currentTarget.textContent,
                              id: project.id,
                            });
                          }}
                          className="border-b border-editor-green-light border-dashed py-0.5 h-5 text-[11px] outline-none  text-center tracking-wide"
                        >
                          {project.From}
                        </div>
                      </div>
                      <div className="px-1">-</div>
                      <div className="flex items-center">
                        <div
                          onBlur={(e) => {
                            dispatch(UPDATE_USER_PROJECT(ProjectItemState));
                          }}
                          onInput={(e) => {
                            setProjectItemState({
                              ...ProjectItemState,
                              To: e.currentTarget.textContent,
                              id: project.id,
                            });
                          }}
                          contentEditable
                          suppressContentEditableWarning={true}
                          className="border-b border-editor-green-light border-dashed py-0.5 h-5 text-[11px] outline-none  text-center tracking-wide"
                        >
                          {project.To}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded text-editor-green focus:ring-0"
                      />
                      <p className="text-[10px]">Present</p>
                    </div>
                  </div>
                  <div className="my-1 flex flex-col gap-1.5">
                    {project.Description.map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="text-xs px-2 -ml-1 -mt-0.5">-</div>

                        <div
                          onBlur={(e) => {
                            dispatch(UPDATE_USER_PROJECT(ProjectItemState));
                          }}
                          onInput={(e) => {
                            setProjectItemState({
                              ...ProjectItemState,
                              value: e.currentTarget.textContent,
                              DescId: item.id,
                              id: project.id,
                            });
                          }}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              dispatch(
                                ADD_EMPTY_LINE_PROJECT_DESC({
                                  id: project.id,
                                })
                              );
                            }
                          }}
                          onKeyDown={(e) => {
                            if (
                              e.key === "Backspace" &&
                              e.currentTarget.textContent === ""
                            ) {
                              dispatch(
                                REMOVE_LINE_PROJECT_DESC({
                                  id: project.id,
                                  DescId: item.id,
                                })
                              );
                              setTimeout(() => {
                                setisActiveState("");
                              }, 200);
                            }
                          }}
                          contentEditable
                          suppressContentEditableWarning={true}
                          className={
                            item.value === "Write Project Description" &&
                            ProjectItemState.value === ""
                              ? "text-[10px] w-full outline-none overflow-hidden text-gray-300  border-b-[1px] border-gray-300  pb-1 border-dashed focus:border-editor-green leading-3 "
                              : "text-[10px] w-full outline-none overflow-hidden  border-b-[1px] border-gray-300  pb-1 border-dashed focus:border-editor-green leading-3 "
                          }
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={project.id}
                  onClick={() => setisActiveState(project.id)}
                  className={"flex flex-col mb-2 "}
                >
                  <div className="flex items-center gap-1">
                    <div className="text-[12px] whitespace-nowrap  ">
                      {project.Title}
                    </div>
                    <div className="text-[11px] ">
                      ({project.From} - {project.To})
                    </div>
                    {project.Link && (
                      <div className="w-4 h-4">
                        <div className="absolute  w-4 h-4 z-10"></div>
                        <a href={`https://${project.Link}`}>
                          <HiExternalLink className="text-xs text-editor-green opacity-70 cursor-pointer -mt-0.5" />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-[3px] my-1">
                    {project?.Description?.map((item: any) => {
                      if (item.value !== "") {
                        return (
                          <div key={item.id} className="flex items-start">
                            <div className="text-xs px-1.5 -ml-1 -mt-0.5">
                              -
                            </div>
                            <div
                              className={
                                item.value === "Write Project Description"
                                  ? "text-[10px] text-gray-300 leading-[14px]"
                                  : "text-[10px] leading-[14px]"
                              }
                            >
                              {item.value}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
