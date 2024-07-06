import React from 'react';

const EducationSection = () => {
  return (
    
    <div className="max-w-2xl ml-5 p-6">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        <div className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute left-0 top-0 w-4 h-4 bg-white border-2 border-slate-900 rounded-full -translate-x-1/2"></div>
          <h3 className="text-xl font-semibold">BACHELOR OF COMPUTER APPLICATIONS</h3>
          <p className="text-sm bg-gray-100 inline-block px-2 py-1 rounded mt-1">2019 - [ PURSUING ]</p>
          <p className="text-gray-600 mt-1 italic">Lovely Professional University , Phagwara , Punjab [ INDIA ]</p>
          <p className="mt-2">
           Currently Pursuing Course with current CGPA of 6.52 / 10
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute left-0 top-0 w-4 h-4 bg-white border-2 border-slate-900 rounded-full -translate-x-1/2"></div>
          <h3 className="text-xl font-semibold">HIGHER SECONDARY EXAM (10+2)</h3>
          <p className="text-sm bg-gray-100 inline-block px-2 py-1 rounded mt-1">2018</p>
          <p className="text-gray-600 mt-1 italic">Chinamya Vidyalaya, Bokaro Steel City,Jharkhand [ India ] </p>
          <p className="mt-2">
            I successfully passed the Higher Secondary Exam ( XII ) and scored 78%.
          </p>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-200">
          <div className="absolute left-0 top-0 w-4 h-4 bg-white border-2 border-slate-900 rounded-full -translate-x-1/2"></div>
          <h3 className="text-xl font-semibold"> SECONDARY EXAM ( X )</h3>
          <p className="text-sm bg-gray-100 inline-block px-2 py-1 rounded mt-1">2018</p>
          <p className="text-gray-600 mt-1 italic">Mar Gregorious Memorial Higher Secondary School, Bokaro Steel City , Jharkhand [ India ] </p>
          <p className="mt-2">
            I successfully passed the Higher Secondary Exam ( X ) and scored a CGPA of 9.24  / 10.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;