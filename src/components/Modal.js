import React from "react";

const Modal = ({ handleInfo }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
              <i className="fas fa-info-circle text-blue-700"></i>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                How to use
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  You have to choose what you need from the list on the right,
                  and it will be added after the last item.
                </p>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  The template buttons are used to generate a basic structure
                  for a project for example.
                </p>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Badges allow you to have links on the version, the author, the
                  last commit etc. Of course, it is necessary to modify the data
                  of the links so that it corresponds to your request.
                </p>
              </div>
              <div className="mt-2 bg-gray-100 rounded-sm">
                <p className="text-sm text-gray-500">
                  If you have any update ideas, feel free to leave an{" "}
                  <a href="https://github.com/GorskiAnthony/templateReadme/issues">
                    issue
                  </a>{" "}
                  on github or contact me on{" "}
                  <a href="https://twitter.com/Gorski_anthony">twitter</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={handleInfo}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
