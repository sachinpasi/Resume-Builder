import { Description } from "@headlessui/react/dist/components/description/description";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { UPDATE_USER_DATA } from "../../../../Redux/Slices/ResumeSlice";

type Props = {};

const Header_Summary = (props: Props) => {
  const dispatch = useAppDispatch();
  const [Summary, setSummary] = useState<any>({
    Description: " ",
  });

  const Data = useAppSelector((state) => state.resume.Description);

  return (
    <div className="pb-3 w-full">
      <div
        contentEditable
        suppressContentEditableWarning={true}
        onInput={(e) =>
          setSummary({
            ...Summary,
            Description: e.currentTarget.textContent,
          })
        }
        onBlur={(e) => {
          if (Summary.Description === "" || Summary.Description !== " ") {
            dispatch(UPDATE_USER_DATA(Summary));
          }
        }}
        className="w-full focus:outline-none text-[10px] overflow-hidden  focus:border-b-[1.5px] pb-1 border-editor-green-light "
      >
        {Data}
      </div>
    </div>
  );
};

export default Header_Summary;
