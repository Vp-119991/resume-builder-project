import React from 'react'
import { Title } from './Title';

const Features = () => {

  return (
    <div>
      <div className="mt-5 w-full flex justify-center">
  <div className="inline-flex items-center border border-blue-300 rounded-full px-3 py-1 text-sm">
    <span className="flex items-center gap-2 text-blue-600 font-medium">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4"
          fill="#4F3"
        />
      </svg>
Our Key Features
 </span>
  </div>
</div>
  
            <div className="mt-1 flex flex-col items-center gap-10">
  <Title title='Build your resume' description='Our stremlined process helps you to create a professional resume in minutes with intelligent AI-powered tools and features.'/>

  {/* Feature Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
    {/* Feature 1 */}
    <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
      <h3 className="font-semibold text-slate-800 mb-2">ATS-Compatible</h3>
      <p className="text-sm text-slate-500">Your resume passes automated tracking systems effortlessly.</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
      <h3 className="font-semibold text-slate-800 mb-2">Recruiter-Readable</h3>
      <p className="text-sm text-slate-500">Structured layout to highlight your key skills and experience.</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
      <h3 className="font-semibold text-slate-800 mb-2">AI-Optimized</h3>
      <p className="text-sm text-slate-500">Leverages AI insights to make your resume more impactful.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
      <h3 className="font-semibold text-slate-800 mb-2-">One-Click PDF Export</h3>
      <p className="text-sm text-slate-500">Download your resume instantly with clean formatting.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Features;