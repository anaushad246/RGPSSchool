import React from 'react';

const PDFViewer = ({imageUrl, pdfUrl, downloadName,btnName='Download PDF' }) => (
  <div className="flex flex-col items-center">
    <img
        src={imageUrl}
        alt="sample image"
        className="w-full h-full lg:object-contain"
      />
    <a
      href={pdfUrl}
      download={downloadName}
      className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {btnName}
    </a>
  </div>
);

export default PDFViewer;

