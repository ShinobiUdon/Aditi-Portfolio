import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-6">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-cambridge-blue hover:bg-hookers-green text-white transition-colors rounded-lg"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          <div className="bg-ash-gray/5 rounded-lg p-8 shadow-sm">
            <div className="aspect-[8.5/11] bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;