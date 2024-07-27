import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  open: boolean;
  setOpen: any;
  title: string;
  children: any;
  showClose?: boolean;
  btnText?: string;
  isProcessing?: boolean;
  btnAction?: any;
  disableFooter?: boolean;
  closeText?: string;
  closeBtnShow?: boolean;
}

export default function ModalLayout({
  open,
  setOpen,
  title,
  children,
  showClose,
  btnText,
  isProcessing,
  btnAction,
  disableFooter,
  closeText,
  closeBtnShow,
}: ModalProps) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(true)}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block w-full transform overflow-hidden rounded-lg bg-white pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle ">
              <div className="px-4 sm:p-6">
                <div className="text-center ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {showClose && (
                      <div className="flex items-center justify-between">
                        <p className="text-pink text-[18px] font-extrabold">
                          {title}
                        </p>
                        <div
                          onClick={() => setOpen(!open)}
                          className="row flex  cursor-pointer items-center justify-end "
                        >
                          <p>
                            <IoClose size={20} color="#F05C90" />{" "}
                          </p>
                        </div>
                      </div>
                    )}
                  </Dialog.Title>
                  <div className="mt-10">{children}</div>
                </div>
              </div>

              {!disableFooter && (
                <>
                  <p className="border-secondary my-5 w-full border-2"></p>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      onClick={btnAction}
                      className="bg-pink hover:bg-pink focus-visible:pink mr-5 flex justify-end rounded-md px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {isProcessing ? "PROCESSING..." : btnText}
                    </button>

                    {closeBtnShow && (
                      <button
                        type="submit"
                        onClick={() => setOpen(false)}
                        className="bg-pink hover:bg-pink focus-visible:pink mr-5 flex justify-end rounded-md px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {closeText}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
