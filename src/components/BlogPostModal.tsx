import React from 'react';
import { X, Calendar, User, Clock, Share2, MessageSquare, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { COMPANY_INFO } from '../data/servicesData';
import { trackConversion } from '../utils/analytics';
import { OptimizedImage } from './OptimizedImage';

interface BlogPostModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({
  post,
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!isOpen || !post) return null;

  const handleShare = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        navigator.share({
          title: post.title,
          text: post.summary,
          url: window.location.href,
        }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          console.log('[Share] Link copied to clipboard');
        }).catch(() => {});
      }
    } catch (e) {
      console.warn('[Share] Error sharing article:', e);
    }
  };

  const handleWhatsAppInquiry = () => {
    trackConversion.clickWhatsApp('blog_modal', post.title);
    const msg = `Hi Expert Technologies, I read your article "${post.title}" and would like to consult with your engineer in Chhatrapati Sambhajinagar.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8">
        {/* Close Button - Sticky/Sticky-Floating top right so it remains accessible on mobile scroll */}
        <button
          onClick={onClose}
          className="fixed sm:absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white shadow-lg border border-slate-700/80 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          aria-label="Close article reader"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="relative bg-slate-900 text-white p-6 sm:p-8 pr-14 sm:pr-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">{post.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800 pt-3">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>{post.publishDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-video max-h-64">
            <OptimizedImage
              src={post.image}
              alt={post.title}
              preset="modalBanner"
              loading="lazy"
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-blue-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Key Takeaways
            </h3>
            <ul className="space-y-2">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-100 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Article</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask On WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal('Solar System Installation');
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
