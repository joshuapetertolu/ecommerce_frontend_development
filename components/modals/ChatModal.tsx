import React from "react";
import ModalLayout from "../layouts/ModalLayout";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";

interface ChatModalProps {
  show: boolean;
  close: () => void;
}
function ChatModal({ show, close }: ChatModalProps) {
  return (
    <ModalLayout show={show} close={close}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/buyer.svg"
            alt="Empty"
            width={100}
            height={100}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h1 className="font-bold text-lg">Buyer</h1>
            <p className="text-primary text-sm">Online</p>
          </div>
        </div>

        <div className="cursor-pointer">
          <p className="text-sm text-primary">
            {" "}
            <span className="text-gray">+</span> Create Invoice
          </p>
        </div>
      </div>
      <hr className="mt-4" />

      <section>
        <p className="text-center text-gray mt-5">2:32 pm</p>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div>
            <div className="flex justify-start mt-5 items-end space-x-3 ">
              <Image
                src="/images/buyer.svg"
                alt="Empty"
                width={100}
                height={100}
                className="h-8 w-8 rounded-full"
              />
              <div className="bg-gray-200 p-3 bg-[#DCE8FF] md:w-1/2 w-full rounded-r-lg rounded-e-xl rounded-t-lg ">
                <p>I would like to place the following order: order_url.com</p>
              </div>
            </div>

            <div className="flex justify-end mt-5 items-end space-x-3 ">
              <div className="bg-primary text-white p-3 md:w-1/2 w-full  rounded-t-lg rounded-l-lg">
                <p>
                  Thank you for contacting Supplier_username We can deliver alll
                  items as requested.{" "}
                </p>
              </div>

              <Image
                src="/images/buyer.svg"
                alt="Empty"
                width={100}
                height={100}
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <div className="flex justify-between items-center mt-5 space-x-5">
          <input
            type="text"
            placeholder="Type here"
            className="block w-full rounded-md border-0 bg-[#EFEFEF] py-3 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-[#EFEFEF] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
          <button className="bg-primary text-white p-3 rounded-full">
            <VscSend size={30} />
          </button>
        </div>
      </section>
    </ModalLayout>
  );
}

export default ChatModal;
