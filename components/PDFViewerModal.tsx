import React, { useState } from 'react';
import { UploadedBook } from '../types.ts';
import { 
  X, 
  Download, 
  BookOpen, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Trash2, 
  FileText,
  Calendar,
  Layers
} from 'lucide-react';
import { deleteUploadedBook, isAdminAuthenticated } from '../services/contentStore.ts';

interface PDFViewerModalProps {
  book: UploadedBook | null;
  onClose: () => void;
  onDeleted?: () => void;
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ book, onClose, onDeleted }) => {
  const [zoom, setZoom] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const isAdmin = isAdminAuthenticated();

  if (!book) return null;

  const handleDownload = () => {
    if (!book.dataUrl) return;
    const link = document.createElement('a');
    link.href = book.dataUrl;
    link.download = book.name || `${book.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${book.title}" from the offline library?`)) {
      return;
    }
    setIsDeleting(true);
    try {
      await deleteUploadedBook(book.id);
      if (onDeleted) onDeleted();
      onClose();
    } catch (e) {
      console.error(e);
      alert('Failed to delete book');
    } finally {
      setIsDeleting(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (!bytes) return '0 KB';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div 
      className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${
          isFullscreen 
            ? 'w-full h-full rounded-none' 
            : 'w-full max-w-5xl h-[92vh]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-700/10 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-black text-slate-900 dark:text-white truncate">
                {book.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                <span className="truncate">{book.author || 'CBSE Study Library'}</span>
                <span>•</span>
                <span>{formatFileSize(book.size)}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(book.uploadDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-200/70 dark:bg-slate-800 px-2 py-1 rounded-lg">
              <button 
                onClick={() => setZoom(prev => Math.max(50, prev - 15))}
                className="p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 w-10 text-center">
                {zoom}%
              </span>
              <button 
                onClick={() => setZoom(prev => Math.min(200, prev + 15))}
                className="p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="px-2.5 sm:px-3 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              title="Download PDF to device"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            {/* Admin Delete */}
            {isAdmin && (
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="p-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-all"
                title="Delete Book (Admin)"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(prev => !prev)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Body */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 overflow-auto flex items-center justify-center p-2 relative">
          {book.dataUrl ? (
            <div 
              className="w-full h-full flex items-center justify-center transition-transform origin-top"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            >
              <iframe
                src={`${book.dataUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full rounded-lg border border-slate-300 dark:border-slate-800 shadow-sm bg-white"
                title={book.title}
              />
            </div>
          ) : (
            <div className="text-center p-8 max-w-md">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                Document Preview Unavailable
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                The file content is stored locally. Click download to open with your native reader.
              </p>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow"
              >
                <Download className="w-4 h-4" />
                Download Document
              </button>
            </div>
          )}
        </div>

        {/* Footer info & tags */}
        {book.description && (
          <div className="px-4 py-2.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between gap-4">
            <span className="truncate">{book.description}</span>
            <div className="flex items-center gap-1.5 shrink-0">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-bold text-amber-700 dark:text-amber-400 text-[11px]">
                Offline Digital Library
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewerModal;
