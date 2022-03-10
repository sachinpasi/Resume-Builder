import React, { useRef, useState } from "react";
import Header from "../../Components/Layout/Editor/Header";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import HeaderModal from "../../Components/User_Components/Editor/HeaderModal/HeaderModal";
import Template_01 from "../../Templates/01_Modern/Template_01";
import { useRouter } from "next/router";
import Blank from "../../Components/User_Components/Blank";
import { useAppSelector } from "../../Redux/hooks";

const Editor = () => {
  const [isHeaderEditModalOpen, setisHeaderEditModalOpen] = useState(false);
  const router = useRouter();

  const ResumeRef = useRef<any>(null);

  const Name = useAppSelector((state) => state.resume.Name);

  const ExportPDF = () => {
    if (ResumeRef.current) {
      ResumeRef.current.save();
    }
  };

  return (
    <div className="bg-editor-bg ">
      <Header ExportPDF={ExportPDF} />

      <main className="w-full min-h-screen py-20 flex items-center justify-center ">
        <HeaderModal
          setisHeaderEditModalOpen={setisHeaderEditModalOpen}
          isHeaderEditModalOpen={isHeaderEditModalOpen}
        />
        <PDFExport ref={ResumeRef} fileName={`${Name}'s Resume`}>
          <div
            style={{
              zoom: 1.7,
            }}
            className="w-[600px] h-[842px] font-ubantu"
          >
            {router.query.id &&
              (() => {
                switch (router.query?.id) {
                  case "e0e9e00f-34e3-4e20-ad3a-135963e38ad6":
                    return (
                      <Template_01
                        setisHeaderEditModalOpen={setisHeaderEditModalOpen}
                        isHeaderEditModalOpen={isHeaderEditModalOpen}
                      />
                    );
                  default:
                    return <Blank />;
                }
              })()}
          </div>
        </PDFExport>
      </main>
    </div>
  );
};

export default Editor;
