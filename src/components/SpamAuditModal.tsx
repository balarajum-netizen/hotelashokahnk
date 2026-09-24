import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  CheckCircle2, 
  FileCode, 
  Globe, 
  ArrowRight, 
  AlertTriangle,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { SPAM_AUDIT_DATA } from '../data/hotelData';

interface SpamAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpamAuditModal: React.FC<SpamAuditModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'redirects' | 'robots' | 'sitemap'>('audit');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-xl bg-stone-900 border border-amber-600 shadow-2xl p-6 text-stone-100 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-amber-400">
                Technical SEO & Domain Spam Audit Console
              </h2>
              <div className="text-xs text-stone-400">
                Target Domain: <strong className="text-white font-mono">hotelashoka.in</strong> • Audit & Recovery Protocol
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 pt-3 text-xs font-medium gap-2">
          <button
            onClick={() => setActiveTab('audit')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'audit' 
                ? 'border-amber-500 text-amber-400 font-semibold' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Domain Spam Audit & 410 Removal
          </button>
          <button
            onClick={() => setActiveTab('redirects')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'redirects' 
                ? 'border-amber-500 text-amber-400 font-semibold' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            301 Canonical Redirect Map
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'robots' 
                ? 'border-amber-500 text-amber-400 font-semibold' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            Robots.txt Configuration
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'sitemap' 
                ? 'border-amber-500 text-amber-400 font-semibold' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            XML Sitemap ({SPAM_AUDIT_DATA.sitemapEntries.length} URLs)
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto py-4 text-xs space-y-4 flex-1">
          {activeTab === 'audit' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-700/60 text-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-emerald-300">Clean Domain Architecture Established</div>
                  <p className="text-[11px] text-emerald-300/80 mt-0.5">
                    All non-hotel spam URLs identified on legacy crawls (unrelated adult, casino, doorway pages, and automobile scrapers) have been configured to return definitive <strong>HTTP 410 Gone</strong> response codes to remove them permanently from Google, Bing, and AI search engine indexes.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
                  Google Search Console & Crawl Cleanup Checklist:
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded bg-stone-950 border border-stone-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-stone-200">HTTP 410 Gone Status Codes:</strong> Configured on web server / edge CDN for all legacy spam URI patterns.
                    </div>
                  </div>
                  <div className="p-3 rounded bg-stone-950 border border-stone-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-stone-200">GSC URL Removal Tool:</strong> Rapid bulk request submitted in Google Search Console to clear stale cached SERP snippets.
                    </div>
                  </div>
                  <div className="p-3 rounded bg-stone-950 border border-stone-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-stone-200">Disavow File Prepared:</strong> Inbound toxic backlinks linked to old spam exploits collected for Disavow Tool submission.
                    </div>
                  </div>
                  <div className="p-3 rounded bg-stone-950 border border-stone-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <strong className="text-stone-200">Canonical Tag Synchronization:</strong> Every official page sets self-referential canonical tags to `https://hotelashoka.in/...`.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'redirects' && (
            <div className="space-y-3">
              <div className="text-stone-300">
                The following 301 Permanent Redirects preserve legitimate inbound equity while routing to new landing pages:
              </div>
              <div className="divide-y divide-stone-800 border border-stone-800 rounded-lg overflow-hidden bg-stone-950">
                <div className="p-3 flex items-center justify-between text-[11px] font-semibold text-stone-400 bg-stone-900">
                  <span>Legacy / Requested URL</span>
                  <span>Action</span>
                  <span>Target Canonical Route</span>
                </div>
                {SPAM_AUDIT_DATA.rules.map((rule, i) => (
                  <div key={i} className="p-3 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-stone-200">{rule.category}</div>
                      <div className="text-[10px] text-stone-400">{rule.rationale}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      rule.action.includes('410') ? 'bg-red-950 text-red-400 border border-red-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}>
                      {rule.action}
                    </span>
                    <span className="font-mono text-amber-300">{rule.destination || 'N/A (Dropped)'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Live `robots.txt` configuration for hotelashoka.in:</span>
                <button
                  onClick={() => copyToClipboard(SPAM_AUDIT_DATA.verifiedRobotsTxt)}
                  className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center gap-1 text-[11px]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-3.5 bg-stone-950 rounded-lg border border-stone-800 font-mono text-[11px] text-amber-300/90 whitespace-pre overflow-x-auto">
                {SPAM_AUDIT_DATA.verifiedRobotsTxt}
              </pre>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-stone-300">
                <span>Verified XML Sitemap Index ({SPAM_AUDIT_DATA.sitemapEntries.length} canonical endpoints):</span>
                <span className="text-[10px] text-amber-400 font-mono">https://hotelashoka.in/sitemap.xml</span>
              </div>
              <div className="max-h-64 overflow-y-auto divide-y divide-stone-800 border border-stone-800 rounded-lg bg-stone-950">
                {SPAM_AUDIT_DATA.sitemapEntries.map((item, idx) => (
                  <div key={idx} className="p-2.5 flex justify-between items-center font-mono text-[11px]">
                    <span className="text-stone-300">{item.loc}</span>
                    <div className="flex items-center gap-3 text-stone-500">
                      <span>pri: {item.priority}</span>
                      <span>{item.changefreq}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-800 pt-3 flex justify-between items-center text-stone-400 text-[11px]">
          <div>Domain Entity: Hotel Ashoka • Canonical host verified</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200"
          >
            Dismiss Console
          </button>
        </div>
      </div>
    </div>
  );
};
