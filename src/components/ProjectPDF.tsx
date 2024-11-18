import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Loader2, AlertCircle, X, ZoomIn, ZoomOut } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface ProjectPDFProps {
  url: string;
  onClose: () => void;
}

const ProjectPDF: React.FC<ProjectPDFProps> = ({ url, onClose }) => {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [error, setError] = React.useState<string | null>(null);
  const [scale, setScale] = React.useState(1.5);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error('PDF loading error:', err);
    setError('Unable to load PDF. Please try again later.');
  }

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.8));

  // Close on escape key
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen p-4 flex flex-col">
        {/* Header */}
        <div className="bg-white rounded-t-lg p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-ash-gray/10 rounded-full transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-ash-gray/10 rounded-full transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            {numPages && (
              <span className="text-dark-slate-gray">
                Page {pageNumber} of {numPages}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-ash-gray/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Content */}
        <div className="flex-1 bg-white shadow-lg overflow-auto">
          {error ? (
            <div className="flex items-center justify-center gap-2 text-red-500 p-8">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          ) : (
            <div className="flex justify-center p-4">
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex items-center justify-center h-[400px]">
                    <Loader2 className="w-8 h-8 animate-spin text-hookers-green" />
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-lg"
                />
              </Document>
            </div>
          )}
        </div>

        {/* Footer */}
        {numPages && !error && (
          <div className="bg-white rounded-b-lg p-4 flex justify-center gap-4">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-cambridge-blue text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hookers-green transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-cambridge-blue text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hookers-green transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPDF;