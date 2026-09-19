import React, { useState, useEffect } from 'react';
import { Subject, Chapter, UploadedBook, SubjectId } from '../types.ts';
import {
  ShieldCheck,
  Lock,
  Unlock,
  KeyRound,
  BookOpen,
  FileText,
  Plus,
  Trash2,
  Save,
  RotateCcw,
  UploadCloud,
  FileUp,
  Download,
  AlertTriangle,
  CheckCircle2,
  FolderPlus,
  Eye,
  EyeOff,
  Settings,
  HelpCircle,
  Sparkles,
  Layers,
  Search
} from 'lucide-react';
import {
  isAdminAuthenticated,
  verifyAdminPasscode,
  changeAdminPasscode,
  logoutAdmin,
  OWNER_EMAIL,
  getActiveSubjects,
  getCustomNote,
  saveCustomNote,
  deleteCustomNote,
  getCustomPYQs,
  saveCustomPYQs,
  deleteCustomPYQs,
  getAllBooks,
  saveUploadedBook,
  deleteUploadedBook,
  clearAllBooks,
  addCustomSubject,
  deleteSubject,
  addCustomChapter,
  deleteChapter,
  eraseAllCustomNotesAndOverrides,
  eraseAllContentAndFactoryReset,
  exportAllDataJSON,
  importDataJSON,
  CONTENT_UPDATE_EVENT
} from '../services/contentStore.ts';
import { getInstantNotes, getInstantPYQs } from '../services/offlineNotesService.ts';
import { 
  StudyItem, 
  StudySection, 
  CanonicalChapterNotes, 
  normalizeToCanonicalNotes, 
  serializeCanonicalNotes 
} from '../services/notesParser.ts';
import { NaturalNotebookViewer } from './SubjectDashboard.tsx';
import PDFViewerModal from './PDFViewerModal.tsx';

interface AdminPortalProps {
  onClose: () => void;
  initialSubjectId?: SubjectId;
  initialChapterId?: string;
}

type AdminTab = 'books' | 'notes' | 'curriculum' | 'security' | 'danger';

const AdminPortal: React.FC<AdminPortalProps> = ({ onClose, initialSubjectId, initialChapterId }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAdminAuthenticated());
  const [passcodeInput, setPasscodeInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<AdminTab>('books');

  // Subjects & chapters data
  const [subjects, setSubjects] = useState<Subject[]>(getActiveSubjects());
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubjectId || 'physics');
  const [selectedChapterId, setSelectedChapterId] = useState<string>(initialChapterId || '');
  
  // Notes / PYQs editor state
  const [contentType, setContentType] = useState<'notes' | 'pyqs'>('notes');
  const [editorText, setEditorText] = useState<string>('');
  const [previewActive, setPreviewActive] = useState<boolean>(false);
  const [isSavingNote, setIsSavingNote] = useState<boolean>(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string>('');

  // Books / PDF state
  const [booksList, setBooksList] = useState<UploadedBook[]>([]);
  const [bookTitle, setBookTitle] = useState<string>('');
  const [bookAuthor, setBookAuthor] = useState<string>('');
  const [bookDescription, setBookDescription] = useState<string>('');
  const [bookSubjectId, setBookSubjectId] = useState<string>(initialSubjectId || 'physics');
  const [bookChapterId, setBookChapterId] = useState<string>('all');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [bookSearchQuery, setBookSearchQuery] = useState<string>('');
  const [viewingBook, setViewingBook] = useState<UploadedBook | null>(null);

  // New Subject & Chapter Modals
  const [newSubName, setNewSubName] = useState<string>('');
  const [newSubIcon, setNewSubIcon] = useState<string>('📚');
  const [newSubColor, setNewSubColor] = useState<string>('blue');
  const [showAddSubjectModal, setShowAddSubjectModal] = useState<boolean>(false);

  const [newChapTitle, setNewChapTitle] = useState<string>('');
  const [newChapDesc, setNewChapDesc] = useState<string>('');
  const [showAddChapterModal, setShowAddChapterModal] = useState<boolean>(false);

  // Security / Passcode
  const [oldPasscode, setOldPasscode] = useState<string>('');
  const [newPasscode, setNewPasscode] = useState<string>('');
  const [confirmPasscode, setConfirmPasscode] = useState<string>('');
  const [passMsg, setPassMsg] = useState<{ text: string; isError: boolean } | null>(null);

  // Danger Zone
  const [eraseConfirmInput, setEraseConfirmInput] = useState<string>('');
  const [dangerActionLoading, setDangerActionLoading] = useState<boolean>(false);

  // Load books and refresh data
  const refreshData = async () => {
    const updatedSubs = getActiveSubjects();
    setSubjects(updatedSubs);
    const books = await getAllBooks();
    setBooksList(books);
  };

  useEffect(() => {
    refreshData();
    const handleUpdate = () => refreshData();
    window.addEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(CONTENT_UPDATE_EVENT, handleUpdate);
  }, []);

  // Update selected chapter when subject changes
  useEffect(() => {
    const currentSub = subjects.find((s) => s.id === selectedSubjectId);
    if (currentSub && currentSub.chapters.length > 0) {
      if (!currentSub.chapters.some((c) => c.id === selectedChapterId)) {
        setSelectedChapterId(currentSub.chapters[0].id);
      }
    } else {
      setSelectedChapterId('');
    }
  }, [selectedSubjectId, subjects]);

  // Load editor text when subject, chapter, or content type changes
  useEffect(() => {
    if (!selectedSubjectId || !selectedChapterId) {
      setEditorText('');
      return;
    }

    const currentSub = subjects.find((s) => s.id === selectedSubjectId);
    const currentChap = currentSub?.chapters.find((c) => c.id === selectedChapterId);
    const chapTitle = currentChap?.title || '';

    if (contentType === 'notes') {
      const custom = getCustomNote(selectedSubjectId, selectedChapterId);
      if (custom !== null) {
        setEditorText(custom);
      } else {
        // Load default instant note as template
        getInstantNotes(selectedSubjectId, currentSub?.name || '', chapTitle, selectedChapterId)
          .then((text) => setEditorText(text));
      }
    } else {
      const custom = getCustomPYQs(selectedSubjectId, selectedChapterId);
      if (custom !== null) {
        setEditorText(custom);
      } else {
        // Load default instant PYQ as template
        getInstantPYQs(selectedSubjectId, currentSub?.name || '', chapTitle, selectedChapterId)
          .then((text) => setEditorText(text));
      }
    }
    setSaveSuccessMsg('');
  }, [selectedSubjectId, selectedChapterId, contentType, subjects]);

  // Authentication handler
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPasscode(passcodeInput)) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect admin passcode. Access denied.');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
    setPasscodeInput('');
  };

  // Snippet helper for notes editor
  const insertMarkdownSnippet = (snippet: string) => {
    setEditorText((prev) => (prev ? prev + '\n\n' + snippet : snippet));
  };

  // Auto Format and Normalize ChatGPT / External notes into canonical CBSE notes structure
  const handleAutoFormatChatGPT = () => {
    if (!editorText.trim()) return;
    const currentSub = subjects.find((s) => s.id === selectedSubjectId);
    const currentChap = currentSub?.chapters.find((c) => c.id === selectedChapterId);
    
    const canonical = normalizeToCanonicalNotes(editorText, {
      chapterTitle: currentChap?.title || 'Chapter Study Notes',
      isPyq: contentType === 'pyqs',
      subjectId: selectedSubjectId
    });

    // Format into clean structured markdown sections
    const structuredMarkdown = canonical.sections.map((sec, idx) => {
      let out = `## ${sec.title}${sec.marks ? ` [${sec.marks}]` : ''}\n`;
      sec.items.forEach(item => {
        if (item.type === 'subtopic') {
          out += `\n### ${item.text.replace(/^#+\s*/, '')}\n`;
        } else if (item.type === 'formula') {
          out += `\n$$\n${item.text}\n$$\n`;
        } else if (item.type === 'definition') {
          out += `\n**Definition:** ${item.text}\n`;
        } else if (item.type === 'derivation') {
          out += `\n**Derivation:**\n${item.text}\n`;
        } else if (item.type === 'example') {
          out += `\n**Solved Example:** ${item.text}\n`;
        } else if (item.type === 'application') {
          out += `\n**Applications:** ${item.text}\n`;
        } else if (item.type === 'keypoints') {
          out += `\n**Key Points:** ${item.text}\n`;
        } else if (item.type === 'insight') {
          out += `\nINSIGHT: ${item.text}\n`;
        } else if (item.type === 'rubric') {
          out += `\n**CBSE Marking Rubric:** ${item.text}\n`;
        } else if (item.type === 'solution') {
          out += `\nSOLUTION: ${item.text}\n`;
        } else if (item.type === 'step') {
          out += `${item.text}\n`;
        } else if (item.type === 'code') {
          out += `\n\`\`\`${item.lang || 'code'}\n${item.text}\n\`\`\`\n`;
        } else if (item.type === 'bullet') {
          out += `${item.text.startsWith('-') || item.text.startsWith('•') ? item.text : `• ${item.text}`}\n`;
        } else {
          out += `\n${item.text}\n`;
        }
      });
      return out.trim();
    }).join('\n\n---\n\n');

    setEditorText(structuredMarkdown);
    setSaveSuccessMsg('✨ Notes auto-formatted into canonical CBSE structure! Click Save when ready.');
    setTimeout(() => setSaveSuccessMsg(''), 4000);
  };

  // Upload custom notes/PYQs from .txt, .md, or .json file
  const handleNotesFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setEditorText(content);
        setSaveSuccessMsg(`Loaded notes from "${file.name}". Auto-normalizing...`);
        setTimeout(() => setSaveSuccessMsg(''), 3500);
      }
    };
    reader.readAsText(file);
  };

  // Save Note / PYQ
  const handleSaveContent = () => {
    if (!selectedSubjectId || !selectedChapterId) return;
    setIsSavingNote(true);
    if (contentType === 'notes') {
      saveCustomNote(selectedSubjectId, selectedChapterId, editorText);
    } else {
      saveCustomPYQs(selectedSubjectId, selectedChapterId, editorText);
    }
    setTimeout(() => {
      setIsSavingNote(false);
      setSaveSuccessMsg('Content saved & updated to offline cache!');
      setTimeout(() => setSaveSuccessMsg(''), 3500);
    }, 300);
  };

  // Reset to default NCERT
  const handleResetToDefault = async () => {
    if (!selectedSubjectId || !selectedChapterId) return;
    const currentSub = subjects.find((s) => s.id === selectedSubjectId);
    const currentChap = currentSub?.chapters.find((c) => c.id === selectedChapterId);
    if (!currentChap) return;

    if (!window.confirm('Reset this chapter to default CBSE NCERT content?')) return;

    if (contentType === 'notes') {
      deleteCustomNote(selectedSubjectId, selectedChapterId);
      const def = await getInstantNotes(selectedSubjectId, currentSub.name, currentChap.title);
      setEditorText(def);
    } else {
      deleteCustomPYQs(selectedSubjectId, selectedChapterId);
      const def = await getInstantPYQs(selectedSubjectId, currentSub.name, currentChap.title);
      setEditorText(def);
    }
    setSaveSuccessMsg('Reset to default CBSE NCERT text.');
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  // Upload Book / PDF
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      if (!bookTitle) {
        // remove extension
        setBookTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    }
  };

  const handleSaveBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please choose a PDF or document file to upload.');
      return;
    }
    if (!bookTitle.trim()) {
      alert('Please provide a title for the book.');
      return;
    }

    setIsUploading(true);
    try {
      // Convert file to base64 DataURL for offline storage
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUrl = event.target?.result as string;
        const newBook: UploadedBook = {
          id: 'book_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
          name: selectedFile.name,
          title: bookTitle.trim(),
          author: bookAuthor.trim() || 'Academic Library',
          description: bookDescription.trim(),
          subjectId: bookSubjectId,
          chapterId: bookChapterId === 'all' ? undefined : bookChapterId,
          size: selectedFile.size,
          type: selectedFile.type || 'application/pdf',
          uploadDate: new Date().toISOString(),
          dataUrl: dataUrl,
          tags: ['Offline Book', 'CBSE Reference'],
        };

        await saveUploadedBook(newBook);
        await refreshData();
        setSelectedFile(null);
        setBookTitle('');
        setBookAuthor('');
        setBookDescription('');
        setIsUploading(false);
        alert('Book uploaded and stored offline successfully!');
      };
      reader.readAsDataURL(selectedFile);
    } catch (err) {
      console.error(err);
      setIsUploading(false);
      alert('Failed to upload book. Check browser storage limits.');
    }
  };

  // Add Subject
  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;
    const id = newSubName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    addCustomSubject({
      id: id,
      name: newSubName.trim(),
      icon: newSubIcon || '📚',
      color: newSubColor || 'blue',
      chapters: [
        {
          id: `${id}_ch1`,
          title: 'Chapter 1: Introduction',
          description: 'Fundamental principles and key topics.',
          notes: '',
          importantQuestions: [],
        },
      ],
    });
    setNewSubName('');
    setShowAddSubjectModal(false);
    setSelectedSubjectId(id);
    refreshData();
  };

  // Add Chapter
  const handleAddChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapTitle.trim() || !selectedSubjectId) return;
    const chapId = `${selectedSubjectId}_c_${Date.now()}`;
    addCustomChapter(selectedSubjectId, {
      id: chapId,
      title: newChapTitle.trim(),
      description: newChapDesc.trim() || 'Custom added curriculum chapter.',
      notes: '',
      importantQuestions: [],
    });
    setNewChapTitle('');
    setNewChapDesc('');
    setShowAddChapterModal(false);
    setSelectedChapterId(chapId);
    refreshData();
  };

  // Handle Change Passcode
  const handleChangePass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPasscode !== confirmPasscode) {
      setPassMsg({ text: 'New passcodes do not match.', isError: true });
      return;
    }
    const res = await changeAdminPasscode(oldPasscode, newPasscode);
    setPassMsg({ text: res.message, isError: !res.success });
    if (res.success) {
      setOldPasscode('');
      setNewPasscode('');
      setConfirmPasscode('');
    }
  };

  // Handle Export Backup
  const handleExportBackup = async () => {
    const jsonStr = await exportAllDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ace12_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Import Backup
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const text = evt.target?.result as string;
        const res = await importDataJSON(text);
        await refreshData();
        alert(`Backup restored successfully! Loaded ${res.count} books and updated notes.`);
      } catch (err: any) {
        alert('Failed to import backup: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  // Lock Screen Render
  if (!isAuthenticated) {
    return (
      <div 
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      >
        <div 
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg mx-auto mb-4">
            <img 
              src="/logo.png" 
              alt="Ace12 Logo" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-xl font-black text-center text-slate-900 dark:text-white tracking-tight">
            Ace12 Admin & Content Portal
          </h2>
          <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-1 mb-6 font-medium">
            Authorized access for <span className="font-bold text-amber-700 dark:text-amber-400">{OWNER_EMAIL}</span>
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Admin Master Passcode
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  placeholder="Enter administrator passcode"
                  autoFocus
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 pl-10 pr-11 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title={showPassword ? "Hide passcode" : "Show passcode"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-tight">
                Restricted to verified faculty & content maintainers.
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/80 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Unlock className="w-4 h-4" />
                Unlock Portal
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);
  const currentChapter = currentSubject?.chapters.find((c) => c.id === selectedChapterId);

  // Filtered books list
  const filteredBooks = booksList.filter((b) => {
    if (!bookSearchQuery) return true;
    const q = bookSearchQuery.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      (b.author && b.author.toLowerCase().includes(q)) ||
      (b.description && b.description.toLowerCase().includes(q)) ||
      b.subjectId.toLowerCase().includes(q)
    );
  });

  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-6xl h-[94vh] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Navbar */}
        <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Ace12 Logo" 
              className="w-10 h-10 rounded-xl shadow-sm border border-amber-500/30 object-cover" 
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-black text-slate-900 dark:text-white tracking-tight">
                  Ace12 Creator & Admin Portal
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Cloud Live Synced</span>
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                All changes sync automatically across all student devices & accounts.
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-slate-200/70 dark:bg-slate-800 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab('books')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'books'
                  ? 'bg-white dark:bg-slate-900 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Books & PDFs ({booksList.length})
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'notes'
                  ? 'bg-white dark:bg-slate-900 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Offline Notes & PYQs Editor
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'curriculum'
                  ? 'bg-white dark:bg-slate-900 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Subjects & Chapters
            </button>
            <button
              onClick={() => setActiveTab('danger')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'danger'
                  ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Wipe & Backup
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'security'
                  ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              Passcode
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all"
              title="Lock Admin session"
            >
              Lock
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              Exit to App
            </button>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="flex md:hidden px-3 py-2 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-2 no-scrollbar">
          {(['books', 'notes', 'curriculum', 'danger', 'security'] as AdminTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap capitalize ${
                activeTab === tab
                  ? 'bg-amber-800 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {tab === 'danger' ? 'Wipe / Backup' : tab}
            </button>
          ))}
        </div>

        {/* Main Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/50">
          {/* ========================================================= */}
          {/* TAB 1: BOOKS & PDF MANAGER */}
          {/* ========================================================= */}
          {activeTab === 'books' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Uploader Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">
                      Upload Books, NCERT Textbooks & PDF Reference Guides
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Uploaded files are stored in browser IndexedDB and are permanently available in 100% offline mode.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSaveBook} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Subject Target */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Assign to Subject
                      </label>
                      <select
                        value={bookSubjectId}
                        onChange={(e) => setBookSubjectId(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      >
                        {subjects.map((sub) => (
                          <option key={sub.id} value={sub.id}>
                            {sub.icon} {sub.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Chapter Target */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Assign to Chapter (Optional)
                      </label>
                      <select
                        value={bookChapterId}
                        onChange={(e) => setBookChapterId(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      >
                        <option value="all">Entire Subject / Reference Library</option>
                        {subjects
                          .find((s) => s.id === bookSubjectId)
                          ?.chapters.map((chap) => (
                            <option key={chap.id} value={chap.id}>
                              {chap.title}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Book Title */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Book / Document Title *
                      </label>
                      <input
                        type="text"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                        placeholder="e.g. NCERT Physics Part 1 or Exemplar"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                        required
                      />
                    </div>

                    {/* Author / Publication */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Author / Publication
                      </label>
                      <input
                        type="text"
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                        placeholder="e.g. NCERT Official, SL Arora, HC Verma"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>

                    {/* Description */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Short Description / Highlights
                      </label>
                      <input
                        type="text"
                        value={bookDescription}
                        onChange={(e) => setBookDescription(e.target.value)}
                        placeholder="e.g. Complete chapter formulas, solved textbook questions and summaries"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>

                  {/* File Dropzone */}
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-amber-600 dark:hover:border-amber-500 rounded-2xl p-6 text-center bg-slate-50/50 dark:bg-slate-950/50 transition-colors">
                    <input
                      type="file"
                      id="pdfFileInput"
                      accept=".pdf,application/pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="pdfFileInput"
                      className="cursor-pointer flex flex-col items-center justify-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center shadow-md">
                        <FileUp className="w-6 h-6" />
                      </div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {selectedFile ? (
                          <span className="text-emerald-700 dark:text-emerald-400 font-black">
                            Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        ) : (
                          'Click to select or drag and drop PDF textbook here'
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        Supports PDF format up to 50MB. Saved persistently in browser storage.
                      </p>
                    </label>
                  </div>

                  {/* Upload Action */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isUploading || !selectedFile}
                      className="px-6 py-2.5 bg-amber-800 hover:bg-amber-700 disabled:opacity-50 text-white rounded-xl text-xs font-black shadow transition-all flex items-center gap-2"
                    >
                      {isUploading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Saving to Offline Storage...</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          <span>Upload & Store Offline</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Uploaded Books List */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">
                      Offline Stored Books Library ({filteredBooks.length})
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      These books appear in student dashboards and the offline book reader.
                    </p>
                  </div>

                  {/* Search */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={bookSearchQuery}
                      onChange={(e) => setBookSearchQuery(e.target.value)}
                      placeholder="Search books..."
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs font-semibold"
                    />
                  </div>
                </div>

                {filteredBooks.length === 0 ? (
                  <div className="p-8 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                    <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-2 opacity-60" />
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      No books uploaded yet
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Upload your first NCERT book or chapter PDF using the form above.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredBooks.map((book) => (
                      <div
                        key={book.id}
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-amber-500/40 transition-all flex items-start justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-amber-700/10 text-amber-800 dark:text-amber-400 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
                              {book.title}
                            </h4>
                            <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 truncate">
                              {book.author || 'CBSE Guide'} • {subjects.find((s) => s.id === book.subjectId)?.name || book.subjectId}
                            </p>
                            <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-600 dark:text-slate-400">
                              <span>{(book.size / (1024 * 1024)).toFixed(2)} MB</span>
                              <span>•</span>
                              <span>{new Date(book.uploadDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => setViewingBook(book)}
                            className="p-1.5 text-amber-800 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-950/40 rounded-lg transition-all"
                            title="Read / Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={async () => {
                              if (window.confirm(`Delete "${book.title}"?`)) {
                                await deleteUploadedBook(book.id);
                                await refreshData();
                              }
                            }}
                            className="p-1.5 text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950/40 rounded-lg transition-all"
                            title="Delete Book"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: NOTES & PYQS OFFLINE EDITOR */}
          {/* ========================================================= */}
          {activeTab === 'notes' && (
            <div className="space-y-4 max-w-5xl mx-auto">
              {/* Header Controls */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Select Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      value={selectedSubjectId}
                      onChange={(e) => setSelectedSubjectId(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold"
                    >
                      {subjects.map((sub) => (
                        <option key={sub.id} value={sub.id}>
                          {sub.icon} {sub.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Chapter */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Chapter
                    </label>
                    <select
                      value={selectedChapterId}
                      onChange={(e) => setSelectedChapterId(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold"
                    >
                      {currentSubject?.chapters.map((chap) => (
                        <option key={chap.id} value={chap.id}>
                          {chap.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mode: Notes vs PYQs */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Content Document
                    </label>
                    <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setContentType('notes')}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          contentType === 'notes'
                            ? 'bg-amber-800 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Notes & Formulas
                      </button>
                      <button
                        type="button"
                        onClick={() => setContentType('pyqs')}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          contentType === 'pyqs'
                            ? 'bg-amber-800 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        15-Year Solved PYQs
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Snippet & Auto-Structure Insert Bar */}
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={handleAutoFormatChatGPT}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-white text-xs font-black shadow-sm flex items-center gap-1.5 transition-all"
                    title="Parse and normalize pasted ChatGPT / Markdown notes into CBSE structured cards"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    Auto-Structure (ChatGPT / Raw Text)
                  </button>

                  <label className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all">
                    <FileUp className="w-3.5 h-3.5 text-amber-600" />
                    Upload File (.txt/.md/.json)
                    <input
                      type="file"
                      accept=".txt,.md,.markdown,.json"
                      onChange={handleNotesFileUpload}
                      className="hidden"
                    />
                  </label>

                  <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block" />

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Snippets:
                  </span>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('## Major Concept Title\n### 1.1 Key Principles\n- Detailed explanation with definitions.\n- Board exam focus point.')}
                    className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    + Section
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('$$\nF = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2}\n$$\n**When to Apply:** Used for stationary point charges in electrostatics.')}
                    className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    + Formula
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('**Definition:** State fundamental definition or scientific law precisely as per NCERT standard.')}
                    className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    + Definition
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('**Derivation:** Step-by-step mathematical proof\n**Step 1:** Initial conditions and statement\n**Step 2:** Mathematical integration\n**Step 3:** Final boxed formula')}
                    className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    + Derivation
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('INSIGHT: Examiners award full marks when step indices and units are clearly boxed.')}
                    className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    + Examiner Tip
                  </button>

                  <div className="ml-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewActive((prev) => !prev)}
                      className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-[11px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {previewActive ? 'Hide Live Preview' : 'Split Live Preview'}
                    </button>
                    <button
                      type="button"
                      onClick={handleResetToDefault}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 text-slate-600 hover:text-rose-600 dark:text-slate-400 text-[11px] font-bold flex items-center gap-1 transition-all"
                      title="Reset this chapter to default NCERT text"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset to Default
                    </button>
                  </div>
                </div>
              </div>

              {/* Editor + Live Preview */}
              <div className={`grid ${previewActive ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {/* Editor Textarea */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-amber-600" />
                      Raw / ChatGPT Notes Editor
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      {editorText.length} characters
                    </span>
                  </div>
                  <textarea
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    placeholder="Paste ChatGPT notes, markdown, or JSON here. Click 'Auto-Structure' to instantly format into textbook layout..."
                    className="w-full flex-1 min-h-[420px] bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl p-3.5 font-mono text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 leading-relaxed resize-y"
                  />
                </div>

                {/* Live Preview using NaturalNotebookViewer for exact 1:1 fidelity */}
                {previewActive && (
                  <div className="bg-[#faf8f4] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col max-h-[500px] overflow-y-auto">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-200/50 dark:border-slate-800">
                      <span className="text-xs font-black text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-emerald-600" />
                        Exact Student View Preview
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        1:1 Render Fidelity
                      </span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <NaturalNotebookViewer 
                        content={editorText || 'No notes entered yet.'}
                        pyqContent={contentType === 'pyqs' ? editorText : undefined}
                        subject={currentSubject?.name || 'Subject'}
                        tabMode={contentType === 'pyqs' ? 'pyqs' : 'notes'}
                        onSelectTab={() => {}}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action Save Bar */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  {saveSuccessMsg ? (
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-black animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{saveSuccessMsg}</span>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Changes are converted into canonical structured format and immediately sync across all logged-in devices.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleAutoFormatChatGPT}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-all"
                  >
                    Format & Beautify
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveContent}
                    disabled={isSavingNote}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-black shadow transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSavingNote ? 'Saving...' : 'Save & Publish Live'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: CURRICULUM, SUBJECTS & CHAPTERS */}
          {/* ========================================================= */}
          {activeTab === 'curriculum' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Subjects Management */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">
                      Subject Directory & Custom Additions
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Add custom CBSE subjects or adjust existing subjects.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAddSubjectModal(true)}
                    className="px-3.5 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Subject
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {subjects.map((sub) => (
                    <div
                      key={sub.id}
                      className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                        selectedSubjectId === sub.id
                          ? 'border-amber-600 bg-amber-50/40 dark:bg-amber-950/20'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40'
                      }`}
                    >
                      <button
                        onClick={() => setSelectedSubjectId(sub.id)}
                        className="flex items-center gap-3 text-left min-w-0 flex-1"
                      >
                        <span className="text-xl shrink-0">{sub.icon}</span>
                        <div className="min-w-0">
                          <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
                            {sub.name}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
                            {sub.chapters.length} chapters {sub.isCustom ? '• Custom' : ''}
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Are you sure you want to remove "${sub.name}" from view?`)) {
                            deleteSubject(sub.id);
                            refreshData();
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                        title="Remove Subject"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapters Management for Selected Subject */}
              {currentSubject && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white">
                        {currentSubject.icon} {currentSubject.name} Chapters ({currentSubject.chapters.length})
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Add, rename, or erase individual chapters from this subject.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddChapterModal(true)}
                      className="px-3.5 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
                    >
                      <Plus className="w-4 h-4" />
                      Add Chapter
                    </button>
                  </div>

                  <div className="space-y-2">
                    {currentSubject.chapters.map((chap, idx) => (
                      <div
                        key={chap.id}
                        className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px] font-black shrink-0">
                            {idx + 1}
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
                              {chap.title}
                            </h4>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                              {chap.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => {
                              setSelectedChapterId(chap.id);
                              setActiveTab('notes');
                            }}
                            className="px-2.5 py-1 bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-amber-100 dark:hover:bg-amber-950/40 hover:text-amber-800 transition-all flex items-center gap-1"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            Edit Notes
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete chapter "${chap.title}"?`)) {
                                deleteChapter(chap.id);
                                refreshData();
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                            title="Delete Chapter"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: WIPE & FACTORY ERASE / BACKUP */}
          {/* ========================================================= */}
          {activeTab === 'danger' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Backup & Restore */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-black text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-700" />
                  Full System Backup & Restore
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Export all your customized notes, curriculum changes, and uploaded books into a single portable backup file.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleExportBackup}
                    className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow"
                  >
                    <Download className="w-4 h-4" />
                    Export Full Backup (JSON)
                  </button>

                  <label className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all border border-slate-200 dark:border-slate-700">
                    <UploadCloud className="w-4 h-4" />
                    <span>Import Backup File</span>
                    <input
                      type="file"
                      accept=".json,application/json"
                      onChange={handleImportBackup}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Erase Specific Sections */}
              <div className="bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="text-sm font-black text-rose-700 dark:text-rose-300">
                    Erase & Reset Operations
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Perform granular wipes to clear out custom notes, reset individual databases, or completely wipe all content to start fresh.
                </p>

                <div className="space-y-3 pt-2">
                  {/* Wipe Notes Overrides */}
                  <div className="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">
                        Erase All Custom Notes & PYQ Overrides
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        Restores default NCERT Class 12 formulas, notes, and 15-year questions across all subjects.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm('Erase all customized notes and restore default CBSE notes?')) {
                          eraseAllCustomNotesAndOverrides();
                          refreshData();
                          alert('Custom notes erased successfully.');
                        }
                      }}
                      className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shrink-0 transition-all"
                    >
                      Erase Notes
                    </button>
                  </div>

                  {/* Wipe Uploaded Books */}
                  <div className="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">
                        Erase All Uploaded Books & PDFs ({booksList.length} files)
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        Deletes all offline textbook PDFs from browser IndexedDB storage to reclaim disk space.
                      </p>
                    </div>
                    <button
                      onClick={async () => {
                        if (window.confirm('Delete all offline uploaded PDF books?')) {
                          await clearAllBooks();
                          await refreshData();
                          alert('All books removed from offline storage.');
                        }
                      }}
                      className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shrink-0 transition-all"
                    >
                      Erase All Books
                    </button>
                  </div>

                  {/* Master Factory Reset & Full Wipe */}
                  <div className="p-4 rounded-xl bg-rose-100/60 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 space-y-3">
                    <div>
                      <h4 className="text-xs font-black text-rose-900 dark:text-rose-200">
                        Master Factory Reset & Complete Wipe
                      </h4>
                      <p className="text-[11px] text-rose-800 dark:text-rose-300">
                        Wipes all custom subjects, deleted chapter records, custom notes, uploaded books, and restores the original system state.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
                      <input
                        type="text"
                        value={eraseConfirmInput}
                        onChange={(e) => setEraseConfirmInput(e.target.value)}
                        placeholder='Type "CONFIRM ERASE" to proceed'
                        className="bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-700 rounded-lg px-3 py-1.5 text-xs font-bold text-rose-900 dark:text-rose-100 placeholder:text-rose-400 focus:outline-none"
                      />
                      <button
                        onClick={async () => {
                          if (eraseConfirmInput.trim() !== 'CONFIRM ERASE') {
                            alert('Please type "CONFIRM ERASE" in all caps to confirm full reset.');
                            return;
                          }
                          setDangerActionLoading(true);
                          await eraseAllContentAndFactoryReset();
                          await refreshData();
                          setEraseConfirmInput('');
                          setDangerActionLoading(false);
                          alert('Master factory reset complete. Clean slate restored!');
                        }}
                        disabled={dangerActionLoading || eraseConfirmInput.trim() !== 'CONFIRM ERASE'}
                        className="px-4 py-1.5 bg-rose-700 hover:bg-rose-800 disabled:opacity-40 text-white rounded-lg text-xs font-black transition-all"
                      >
                        {dangerActionLoading ? 'Wiping...' : 'Execute Complete Wipe'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 5: SECURITY & PASSCODE */}
          {/* ========================================================= */}
          {activeTab === 'security' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm max-w-lg mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    Update Admin Master Passcode
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Change the secret passcode required to open this portal.
                  </p>
                </div>
              </div>

              <form onSubmit={handleChangePass} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Current Passcode
                  </label>
                  <input
                    type="password"
                    value={oldPasscode}
                    onChange={(e) => setOldPasscode(e.target.value)}
                    placeholder="Enter current passcode"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    New Passcode
                  </label>
                  <input
                    type="password"
                    value={newPasscode}
                    onChange={(e) => setNewPasscode(e.target.value)}
                    placeholder="Enter at least 4 characters"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Confirm New Passcode
                  </label>
                  <input
                    type="password"
                    value={confirmPasscode}
                    onChange={(e) => setConfirmPasscode(e.target.value)}
                    placeholder="Re-enter new passcode"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    required
                  />
                </div>

                {passMsg && (
                  <div
                    className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
                      passMsg.isError
                        ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    }`}
                  >
                    {passMsg.isError ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                    <span>{passMsg.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow transition-all"
                >
                  Update Passcode
                </button>
              </form>
            </div>
          )}
        </div>

        {/* New Subject Modal */}
        {showAddSubjectModal && (
          <div 
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddSubjectModal(false)}
          >
            <div 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-base font-black text-slate-900 dark:text-white mb-4">
                Add New CBSE Subject
              </h3>
              <form onSubmit={handleAddSubject} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    value={newSubName}
                    onChange={(e) => setNewSubName(e.target.value)}
                    placeholder="e.g. Accountancy, Economics, Hindi"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Emoji Icon
                  </label>
                  <input
                    type="text"
                    value={newSubIcon}
                    onChange={(e) => setNewSubIcon(e.target.value)}
                    placeholder="e.g. 📊, 📝, 🏛️"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddSubjectModal(false)}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Create Subject
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* New Chapter Modal */}
        {showAddChapterModal && (
          <div 
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddChapterModal(false)}
          >
            <div 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-base font-black text-slate-900 dark:text-white mb-4">
                Add Chapter to {currentSubject?.name}
              </h3>
              <form onSubmit={handleAddChapter} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Chapter Title
                  </label>
                  <input
                    type="text"
                    value={newChapTitle}
                    onChange={(e) => setNewChapTitle(e.target.value)}
                    placeholder="e.g. Ray Optics & Optical Instruments"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Description / Subtopics
                  </label>
                  <input
                    type="text"
                    value={newChapDesc}
                    onChange={(e) => setNewChapDesc(e.target.value)}
                    placeholder="e.g. Reflection, refraction, lenses, and microscopes."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddChapterModal(false)}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Add Chapter
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Instant PDF / Book Viewer */}
        {viewingBook && (
          <PDFViewerModal
            book={viewingBook}
            onClose={() => setViewingBook(null)}
            onDeleted={refreshData}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
