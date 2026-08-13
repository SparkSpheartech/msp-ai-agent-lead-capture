"use client";

import React, { useState, useId, useRef } from 'react';
import {
  Mail,
  Save,
  ImagePlus,
  X,
  Eye,
  Upload,
  Type,
  MessageSquare,
  Send,
  Globe,
  Bell,
  Check,
  Sparkles,
  Layout,
  PanelRightOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Tabs ────────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'welcome', label: 'Welcome email', icon: Mail },
  { id: 'popup', label: 'Subscription popup', icon: PanelRightOpen },
  { id: 'sending', label: 'Sending', icon: Send },
];

// ─── Toggle Switch ───────────────────────────────────────────────────────────
function Toggle({ enabled, onChange, label, description }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-start justify-between gap-4 cursor-pointer group">
      <div className="space-y-1">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
          {label}
        </span>
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
        )}
      </div>
      <div className="relative shrink-0 mt-0.5">
        <input
          id={id}
          type="checkbox"
          checked={enabled}
          onChange={() => onChange(!enabled)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full peer-checked:bg-lime-500 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow after:transition-all peer-checked:after:translate-x-5" />
      </div>
    </label>
  );
}

// ─── Cover Image Upload ──────────────────────────────────────────────────────
function CoverImageUpload({ image, onImageChange, onRemove }) {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current?.click();

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onImageChange(url);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <ImagePlus className="w-4 h-4 text-lime-500" />
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Cover image</span>
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 -mt-1">
        The first thing a new subscriber hears from you.
      </p>

      {image ? (
        <div className="relative w-full max-w-md rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 group">
          <img
            src={image}
            alt="Welcome email cover"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handleClick}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white/90 dark:bg-zinc-800/90 rounded-lg text-zinc-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-700"
            >
              <Upload className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onRemove}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-red-500/90 rounded-lg text-white hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="w-full max-w-md h-32 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 hover:border-lime-400 dark:hover:border-lime-600 hover:bg-lime-50/50 dark:hover:bg-lime-950/20 transition-all flex flex-col items-center justify-center gap-2 group"
        >
          <ImagePlus className="w-8 h-8 text-zinc-400 dark:text-zinc-600 group-hover:text-lime-500 transition-colors" />
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
            Upload cover image
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">PNG, JPG, WebP — up to 5MB</span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
    </div>
  );
}

// ─── Tab Content: Welcome Email ──────────────────────────────────────────────
function WelcomeEmailTab() {
  const [sendWelcome, setSendWelcome] = useState(true);
  const [subject, setSubject] = useState('Welcome to SPARKSPHEAR Field Notes');
  const [message, setMessage] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  return (
    <div className="space-y-8">
      {/* Cover Image */}
      <CoverImageUpload
        image={coverImage}
        onImageChange={setCoverImage}
        onRemove={() => setCoverImage(null)}
      />

      {/* Send Welcome Email Toggle */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <Toggle
          enabled={sendWelcome}
          onChange={setSendWelcome}
          label="Send a welcome email"
          description="Sent the moment a new subscriber confirms."
        />
      </div>

      {sendWelcome && (
        <>
          {/* Subject */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-lime-500" />
              <label htmlFor="welcome-subject" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Subject
              </label>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 -mt-1">
              What your new subscriber sees in their inbox.
            </p>
            <input
              id="welcome-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-lime-500" />
              <label htmlFor="welcome-message" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Message
              </label>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 -mt-1">
              Write it the way you write a post. Your blog name, an unsubscribe link and the footer are added for you.
            </p>
            <textarea
              id="welcome-message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey there! Thanks for joining SPARKSPHEAR Field Notes..."
              className="w-full max-w-2xl px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all resize-y min-h-[180px]"
            />

            {/* Preview hint */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
              <Eye className="w-3.5 h-3.5" />
              <span>Auto-appended: blog name, unsubscribe link, and footer</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Tab Content: Subscription Popup ─────────────────────────────────────────
function SubscriptionPopupTab() {
  const [popupEnabled, setPopupEnabled] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Never miss a post');
  const [popupDescription, setPopupDescription] = useState('Get the latest insights delivered straight to your inbox.');
  const [popupDelay, setPopupDelay] = useState('5');
  const [popupTrigger, setPopupTrigger] = useState('scroll');

  return (
    <div className="space-y-8">
      {/* Enable Popup Toggle */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <Toggle
          enabled={popupEnabled}
          onChange={setPopupEnabled}
          label="Subscription popup"
          description="Show a popup to invite readers to subscribe."
        />
      </div>

      {popupEnabled && (
        <>
          <div className="space-y-2">
            <label htmlFor="popup-title" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Title
            </label>
            <input
              id="popup-title"
              type="text"
              value={popupTitle}
              onChange={(e) => setPopupTitle(e.target.value)}
              className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="popup-description" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Description
            </label>
            <textarea
              id="popup-description"
              rows={2}
              value={popupDescription}
              onChange={(e) => setPopupDescription(e.target.value)}
              className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="space-y-2">
              <label htmlFor="popup-delay" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Delay (seconds)
              </label>
              <input
                id="popup-delay"
                type="number"
                min="0"
                max="60"
                value={popupDelay}
                onChange={(e) => setPopupDelay(e.target.value)}
                className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="popup-trigger" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Trigger
              </label>
              <select
                id="popup-trigger"
                value={popupTrigger}
                onChange={(e) => setPopupTrigger(e.target.value)}
                className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all appearance-none"
              >
                <option value="scroll">After scrolling</option>
                <option value="time">After time delay</option>
                <option value="exit">On exit intent</option>
                <option value="immediate">Immediately</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Tab Content: Sending ────────────────────────────────────────────────────
function SendingTab() {
  const [senderName, setSenderName] = useState('SPARKSPHEAR Field Notes');
  const [senderEmail, setSenderEmail] = useState('newsletter@sparkspheartechsolutions.com');
  const [replyTo, setReplyTo] = useState('SparkSphear4me@gmail.com');
  const [digestFrequency, setDigestFrequency] = useState('instant');
  const [maxPosts, setMaxPosts] = useState('5');

  return (
    <div className="space-y-8">
      {/* Sender Identity */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
          <Globe className="w-4 h-4 text-lime-500" />
          Sender identity
        </h4>

        <div className="space-y-2">
          <label htmlFor="sender-name" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Sender name
          </label>
          <input
            id="sender-name"
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="sender-email" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Sender email
          </label>
          <input
            id="sender-email"
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="reply-to" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Reply-to address
          </label>
          <input
            id="reply-to"
            type="email"
            value={replyTo}
            onChange={(e) => setReplyTo(e.target.value)}
            className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
          />
        </div>
      </div>

      {/* Digest Settings */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
          <Bell className="w-4 h-4 text-lime-500" />
          Delivery settings
        </h4>

        <div className="space-y-2">
          <label htmlFor="digest-frequency" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Send frequency
          </label>
          <select
            id="digest-frequency"
            value={digestFrequency}
            onChange={(e) => setDigestFrequency(e.target.value)}
            className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all appearance-none"
          >
            <option value="instant">As soon as published</option>
            <option value="daily">Daily digest</option>
            <option value="weekly">Weekly digest</option>
            <option value="off">Manual only</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="max-posts" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Max posts per email
          </label>
          <input
            id="max-posts"
            type="number"
            min="1"
            max="20"
            value={maxPosts}
            onChange={(e) => setMaxPosts(e.target.value)}
            className="w-full max-w-xl px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/40 focus:border-lime-500 text-sm transition-all"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main NewsletterSettings Component ───────────────────────────────────────
export default function NewsletterSettings({ className }) {
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('welcome');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);

    // Simulate save — replace with actual API call
    await new Promise((r) => setTimeout(r, 800));

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)}>
      {/* ─── Header ────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
            <Mail className="w-7 h-7 text-lime-500" />
            Newsletter
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Configure your newsletter settings
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={cn(
            'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg',
            saving
              ? 'bg-lime-400 text-zinc-950 cursor-wait opacity-70'
              : saved
              ? 'bg-lime-500 text-zinc-950'
              : 'bg-lime-500 text-zinc-950 hover:bg-lime-400 hover:shadow-lime-500/30',
          )}
        >
          {saving ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Saving...
            </>
          ) : saved ? (
            <>
              <Check className="w-4 h-4" />
              Saved
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              Save changes
            </>
          )}
        </button>
      </div>

      {/* ─── Enable Newsletter Toggle Card ──────────────────────────── */}
      <div className="mb-6 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm">
        <Toggle
          enabled={newsletterEnabled}
          onChange={setNewsletterEnabled}
          label="Enable newsletter"
          description="Allow readers to subscribe and receive your posts by email."
        />
      </div>

      {/* ─── Tab Bar ────────────────────────────────────────────────── */}
      <div className="mb-6">
        <nav className="flex border-b border-zinc-200 dark:border-zinc-800" role="tablist">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all -mb-px',
                  isActive
                    ? 'border-lime-500 text-lime-600 dark:text-lime-400'
                    : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700',
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ─── Tab Content ────────────────────────────────────────────── */}
      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 shadow-sm">
        {!newsletterEnabled && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Mail className="w-16 h-16 text-zinc-300 dark:text-zinc-700 mb-4" />
            <h3 className="text-lg font-bold text-zinc-500 dark:text-zinc-400">Newsletter is disabled</h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
              Enable the newsletter above to configure your settings.
            </p>
          </div>
        )}

        {newsletterEnabled && activeTab === 'welcome' && <WelcomeEmailTab />}
        {newsletterEnabled && activeTab === 'popup' && <SubscriptionPopupTab />}
        {newsletterEnabled && activeTab === 'sending' && <SendingTab />}
      </div>

      {/* ─── Footer Hint ────────────────────────────────────────────── */}
      <div className="mt-6 text-center">
        <p className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-lime-500/70" />
          Your newsletter settings are saved automatically when you hit Save changes.
        </p>
      </div>
    </div>
  );
}