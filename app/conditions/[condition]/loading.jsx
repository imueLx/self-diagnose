import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="glass-panel w-full max-w-3xl rounded-3xl p-8 shadow-xl shadow-teal-500/10 animate-pulse dark:shadow-none">
        <div className="mb-6 h-6 w-24 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="mx-auto mb-6 h-10 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="mx-auto mb-6 h-6 w-1/2 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="mx-auto mb-4 h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="mx-auto mb-6 h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="mx-auto mb-4 h-6 w-1/3 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="h-10 rounded bg-slate-200 dark:bg-slate-800"
              ></div>
            ))}
        </div>
        <div className="mx-auto mb-4 mt-8 h-6 w-1/3 rounded bg-slate-200 dark:bg-slate-800"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(2)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="h-10 rounded bg-slate-200 dark:bg-slate-800"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
