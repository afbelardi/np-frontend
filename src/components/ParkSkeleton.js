export default function ParkSkeleton () {
    return (
      <div
        role="status"
        className="w-11/12 p-4 mt-10 rounded animate-pulse md:p-6"
      >
        <div className="flex flex-col items-center justify-center w-full">
        <div className="h-5 mb-8 rounded-full bg-slate-500 w-60"></div>
        <div className="h-2.5 mb-2 rounded-full bg-slate-500 w-72"></div>
        <div className="h-2.5 mb-2 rounded-full bg-slate-500 w-80"></div>
        <div className="h-2.5 mb-2 rounded-full bg-slate-500 w-80"></div>
        <div className="h-2.5 mb-8 rounded-full bg-slate-500 w-72"></div>

        </div>
        <div className="flex items-center justify-center h-56 mb-4 rounded bg-slate-500">
          <svg
            className="w-12 h-12 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="flex justify-center">
            <div className="h-2.5  rounded-full bg-slate-500 w-48 mb-4"></div>
        </div>
        <div className="h-2  rounded-full bg-slate-500 mb-2.5"></div>
        <div className="h-2  rounded-full bg-slate-500 mb-2.5"></div>
        <div className="h-2 rounded-full bg-slate-500"></div>
        <div className="flex items-center mt-4 mb-8 space-x-3">
          <div>
            <div className="h-2.5 rounded-full bg-slate-500 w-32 mb-2"></div>
            <div className="w-48 h-2 rounded-full bg-slate-500"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 ">
            <div className="h-2.5 rounded-full bg-slate-500 w-40 mb-4"></div>
            <div className="h-2 mb-3 rounded-full w-72 bg-slate-500"></div>
            <div className="h-2 mb-3 rounded-full w-72 bg-slate-500"></div>
            <div className="h-2 mb-3 rounded-full w-72 bg-slate-500"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
