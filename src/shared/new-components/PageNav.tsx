import { useNavigate } from 'react-router-dom';

interface PageNavProps {
  title?: string;
}

export default function PageNav({ title }: PageNavProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3 mb-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-800 transition-all duration-200"
      >
        <i className="pi pi-arrow-left text-xs" />
        Back
      </button>
      <button
        onClick={() => navigate('/home')}
        className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all duration-200"
      >
        <i className="pi pi-home text-xs" />
        Home
      </button>
      {title && (
        <span className="text-[11px] text-slate-300 font-semibold ml-auto tracking-wide">
          {title}
        </span>
      )}
    </div>
  );
}
