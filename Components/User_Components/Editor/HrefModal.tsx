import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import {
  REMOVE_USER_PROJECT_LINK,
  UPDATE_USER_PROJECT,
} from "../../../Redux/Slices/ResumeSlice";

interface ModalType {
  isHrefModalOpen: boolean;
  setisHrefModalOpen: (value: boolean) => void;
  setisInFocus: (value: string) => void;
  id: any;
}

const HrefModal = ({
  isHrefModalOpen,
  setisHrefModalOpen,
  setisInFocus,
  id,
}: ModalType) => {
  const Data = useAppSelector((state) => state.resume.Projects);
  const index = Data.findIndex((item) => item.id === id);

  const [Link, setLink] = useState(Data[index].Link);

  const dispatch = useAppDispatch();

  const closeModal = () => setisHrefModalOpen(false);
  return (
    <>
      <Transition appear show={isHrefModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-editor-heading"
                  >
                    Link
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    value={Link}
                    defaultValue={Data[index].Link}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="mt-4 gap-2 flex items-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => {
                      dispatch(
                        REMOVE_USER_PROJECT_LINK({
                          id,
                        })
                      );
                      setisInFocus("");
                      closeModal();
                    }}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-teal-900 bg-teal-100 border border-transparent rounded-md hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => {
                      dispatch(
                        UPDATE_USER_PROJECT({
                          Link: Link,
                          id,
                        })
                      );
                      setisInFocus("");
                      closeModal();
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default HrefModal;
