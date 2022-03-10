import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowDownRight } from "react-icons/bs";
import {
  Edit_Header_Modal_Type,
  Main_Header_Type,
} from "../../../../Interfaces/typings";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hooks";
import { UPDATE_USER_DATA } from "../../../../Redux/Slices/ResumeSlice";

const HeaderModal = ({
  isHeaderEditModalOpen,
  setisHeaderEditModalOpen,
}: Edit_Header_Modal_Type) => {
  function closeModal() {
    setisHeaderEditModalOpen(false);
  }

  function openModal() {
    setisHeaderEditModalOpen(true);
  }

  const Data = useAppSelector((state) => state.resume);

  const dispatch = useAppDispatch();

  const defaultValues = {
    Name: Data?.Name,
    ProfessionalTitle: Data?.ProfessionalTitle,
    Area: Data.Area,
    City: Data.City,
    Country: Data.Country,
    Email: Data.Email,
    PhoneNumber: Data.PhoneNumber,
    Website: Data.Website,
    GitHub: Data.GitHub,
    LinkedIn: Data.LinkedIn,
    Medium: Data.Medium,
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<Main_Header_Type>({
    defaultValues,
  });

  const onSubmit = handleSubmit((values) => {
    // console.log(values);

    dispatch(UPDATE_USER_DATA(values));
    closeModal();
  });

  return (
    <>
      <Transition appear show={isHeaderEditModalOpen} as={Fragment}>
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
              <form
                onSubmit={onSubmit}
                className="inline-block w-full max-w-4xl py-8 px-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <div className="w-full  flex items-center justify-between">
                  <button className="px-4 py-1.5 font-semibold text-white bg-red-400 rounded-full">
                    Discard
                  </button>{" "}
                  <button
                    type="submit"
                    className="px-4 py-1.5 font-semibold text-white bg-teal-400 rounded-full"
                  >
                    Save
                  </button>
                </div>
                <div className="w-full py-4">
                  <div className="flex items-center gap-4">
                    <h3 className="uppercase tracking-wide font-semibold text-lg">
                      Personal Information
                    </h3>
                    <BsArrowDownRight />
                  </div>
                  <div className="flex items-center justify-between py-4 ">
                    <div className="w-96">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-editor-heading"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        {...register("Name")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="w-96">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-editor-heading"
                      >
                        Professional Title
                      </label>
                      <input
                        type="text"
                        {...register("ProfessionalTitle")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 ">
                    <h3 className="uppercase tracking-wide font-semibold text-lg">
                      Contact Information
                    </h3>
                    <BsArrowDownRight />
                  </div>
                  <div className="flex items-start justify-between   py-4">
                    <div className="flex flex-col gap-4">
                      <div className="w-96">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-editor-heading"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("Email")}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="w-96">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-editor-heading"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          {...register("PhoneNumber")}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="w-96">
                        <label className="block text-sm font-medium text-editor-heading">
                          Area
                        </label>
                        <input
                          type="text"
                          {...register("Area")}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="w-96">
                        <label className="block text-sm font-medium text-editor-heading">
                          City
                        </label>
                        <input
                          type="text"
                          {...register("City")}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>{" "}
                      <div className="w-96">
                        <label className="block text-sm font-medium text-editor-heading">
                          Country
                        </label>
                        <input
                          type="text"
                          {...register("Country")}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between py-4">
                    <div>
                      <div className="flex items-center gap-4 ">
                        <h3 className="uppercase tracking-wide font-semibold text-lg">
                          Social
                        </h3>
                        <BsArrowDownRight />
                      </div>
                      <div className="flex flex-col gap-4 py-4 ">
                        <div className="w-96">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company-website"
                              className="block text-sm font-medium text-editor-heading"
                            >
                              Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                http://
                              </span>
                              <input
                                type="text"
                                {...register("Website")}
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder="www.example.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-96">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-editor-heading"
                          >
                            LinkedIn
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                              http://
                            </span>
                            <input
                              type="text"
                              {...register("LinkedIn")}
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="www.example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 ">
                        <h3 className="uppercase tracking-wide font-semibold text-lg">
                          Coding
                        </h3>
                        <BsArrowDownRight />
                      </div>
                      <div className="flex flex-col gap-4 py-4 ">
                        <div className="w-96">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company-website"
                              className="block text-sm font-medium text-editor-heading"
                            >
                              GitHub
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                http://
                              </span>
                              <input
                                type="text"
                                {...register("GitHub")}
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder="www.example.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-96">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-editor-heading"
                          >
                            Medium
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                              http://
                            </span>
                            <input
                              type="text"
                              {...register("Medium")}
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="www.example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default HeaderModal;
