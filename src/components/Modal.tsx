import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Modal({
  isOpen,
  setIsOpen,
  handleMutation,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMutation: () => void;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-100"
                >
                  Delete Post
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this post ? Deleted post
                    cannot be restored.
                  </p>
                </div>

                <div className="mt-4 space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-gray-100 focus:outline-none "
                    onClick={handleMutation}
                  >
                    Delete Post
                  </button>

                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium text-red-400 focus:outline-none "
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
