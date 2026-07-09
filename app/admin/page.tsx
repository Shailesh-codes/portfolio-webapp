"use client";

import React, { useState, useEffect } from "react";
import { 
  Inbox, 
  Trash2, 
  Search, 
  RefreshCw, 
  LogOut, 
  Lock, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Check, 
  ExternalLink,
  ChevronRight,
  Filter,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { 
  getContactsAction, 
  updateContactStatusAction, 
  deleteContactAction 
} from "../actions/contact";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string; // 'unread' | 'read' | 'replied'
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Contacts data
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSimulated, setIsSimulated] = useState(false);
  
  // Filters & Search
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  
  // Selected Message for detailed preview modal
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  // Check sessionStorage on mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_password");
    if (savedPassword) {
      handleLogin(savedPassword);
    }
  }, []);

  const handleLogin = async (pwdToTry: string) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await getContactsAction(pwdToTry);
      if (res.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_password", pwdToTry);
        setPassword(pwdToTry);
        setContacts(res.data || []);
        setIsSimulated(!!res.simulated);
      } else {
        setLoginError(res.error || "Invalid Password");
        sessionStorage.removeItem("admin_password");
      }
    } catch (err) {
      setLoginError("An error occurred during authentication.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_password");
    setIsAuthenticated(false);
    setContacts([]);
    setPassword("");
  };

  const refreshContacts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getContactsAction(password);
      if (res.success) {
        setContacts(res.data || []);
        setIsSimulated(!!res.simulated);
      } else {
        setError(res.error || "Failed to load messages.");
      }
    } catch (err) {
      setError("An error occurred while fetching messages.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await updateContactStatusAction(id, newStatus, password);
      if (res.success) {
        // Update local state
        setContacts(prev => 
          prev.map(c => c.id === id ? { ...c, status: newStatus } : c)
        );
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(prev => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    
    try {
      const res = await deleteContactAction(id, password);
      if (res.success) {
        setContacts(prev => prev.filter(c => c.id !== id));
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete contact", err);
    }
  };

  // Format Date beautifully
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return dateString;
    }
  };

  // Filtered contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === "all" || contact.status === statusFilter;
      
    return matchesSearch && matchesStatus;
  });

  const unreadCount = contacts.filter(c => c.status === "unread").length;
  const totalCount = contacts.length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6 transition-colors duration-300 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-500/10 dark:bg-pink-500/5 blur-3xl pointer-events-none" />

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-semibold transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Login Card */}
        <div className="w-full max-w-md rounded-3xl border border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl p-8 md:p-10 shadow-2xl relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-[var(--lavender)] flex items-center justify-center mb-4 border border-purple-100 dark:border-purple-900/30">
              <Lock className="w-7 h-7 animate-pulse" />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Admin Portal
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm mt-2 max-w-xs leading-relaxed">
              Verify your admin password to view and manage your contact form submissions.
            </p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(password);
            }} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block"
              >
                Access Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password..."
                  className="w-full px-4 py-3.5 pl-11 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[var(--lavender)] focus:ring-1 focus:ring-[var(--lavender)]/20 transition-all"
                />
                <Lock className="w-4 h-4 text-zinc-400 dark:text-zinc-600 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {loginError && (
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 text-rose-800 dark:text-rose-400 text-xs font-semibold flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--lavender)] text-white font-bold rounded-xl transition-all shadow-md shadow-[var(--lavender)]/20 hover:shadow-lg hover:shadow-[var(--lavender)]/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none text-sm cursor-pointer"
            >
              {isLoggingIn ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Unlock Dashboard"
              )}
            </button>
          </form>

          {/* Quick Notice */}
          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 text-center">
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
              Enter your configured project admin password.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 pb-20 relative">
      {/* Top Banner for simulated database */}
      {isSimulated && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-800 dark:text-amber-400 text-xs font-semibold py-3 px-6 text-center flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />
          <span>
            Supabase Credentials missing in Env variables. Currently running in <strong>Demo/Simulation mode</strong> with mock messages. Configure your credentials to read from Supabase.
          </span>
        </div>
      )}

      {/* Header Container */}
      <header className="sticky top-0 z-30 w-full border-b border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/10 rounded-xl text-[var(--lavender)] hidden sm:flex">
            <Inbox className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-zinc-900 dark:text-zinc-50">
              Admin Inbox
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium mt-0.5">
              Portfolio Messages Manager
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={refreshContacts}
            disabled={isLoading}
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all cursor-pointer disabled:opacity-50"
            title="Refresh Inbox"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-rose-50 dark:bg-zinc-900 dark:hover:bg-rose-950/30 text-zinc-700 hover:text-rose-600 dark:text-zinc-300 dark:hover:text-rose-400 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Panel Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {/* Total card */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-900/40 p-5 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Total Received</span>
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-2">{totalCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </div>
          </div>

          {/* Unread card */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-900/40 p-5 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Unread</span>
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-2">{unreadCount}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${unreadCount > 0 ? "bg-amber-500/10 text-amber-500" : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-400"}`}>
              <Mail className="w-5 h-5" />
            </div>
          </div>

          {/* Read card */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-900/40 p-5 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Replied/Processed</span>
              <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mt-2">
                {contacts.filter(c => c.status === "replied").length}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900 p-4 rounded-2xl">
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search sender, email, message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[var(--lavender)] focus:ring-1 focus:ring-[var(--lavender)]/20 transition-all"
            />
            <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                statusFilter === "all"
                  ? "bg-[var(--lavender)] text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              All ({contacts.length})
            </button>
            <button
              onClick={() => setStatusFilter("unread")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                statusFilter === "unread"
                  ? "bg-amber-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              Unread ({contacts.filter(c => c.status === "unread").length})
            </button>
            <button
              onClick={() => setStatusFilter("read")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                statusFilter === "read"
                  ? "bg-sky-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              Read ({contacts.filter(c => c.status === "read").length})
            </button>
            <button
              onClick={() => setStatusFilter("replied")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                statusFilter === "replied"
                  ? "bg-emerald-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              Replied ({contacts.filter(c => c.status === "replied").length})
            </button>
          </div>
        </div>

        {/* Errors */}
        {error && (
          <div className="p-4 mb-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 text-rose-800 dark:text-rose-400 text-sm font-semibold flex items-center gap-3 animate-fade-in">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Message Inbox list */}
        {filteredContacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-900 rounded-3xl text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">No Messages Found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 max-w-xs">
              {contacts.length === 0 
                ? "No one has reached out to you yet. Submissions from the contact form will appear here!" 
                : "No messages match your selected search query or filters."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* List side (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-4">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedMessage(contact)}
                  className={`group rounded-2xl border p-5 md:p-6 text-left transition-all duration-300 cursor-pointer flex flex-col gap-4 relative overflow-hidden ${
                    selectedMessage?.id === contact.id
                      ? "border-[var(--lavender)] bg-[var(--lavender)]/5 dark:bg-[var(--lavender)]/10 shadow-lg shadow-[var(--lavender)]/5"
                      : "border-zinc-200 dark:border-zinc-900 bg-white hover:bg-zinc-50/50 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60"
                  }`}
                >
                  {/* Left indicator glow for unread */}
                  {contact.status === "unread" && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                  )}

                  {/* Top card metadata */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-sm md:text-base flex items-center gap-2">
                        {contact.name}
                        {contact.status === "unread" && (
                          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" title="Unread" />
                        )}
                      </h4>
                      <span className="text-[11px] md:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-1 block">
                        {contact.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Status Badges */}
                      {contact.status === "unread" && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/25 uppercase tracking-wider">
                          Unread
                        </span>
                      )}
                      {contact.status === "read" && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/10 text-sky-500 border border-sky-500/25 uppercase tracking-wider">
                          Read
                        </span>
                      )}
                      {contact.status === "replied" && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 uppercase tracking-wider">
                          Replied
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message Snippet */}
                  <p className="text-zinc-600 dark:text-zinc-350 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {contact.message}
                  </p>

                  {/* Card bottom date & controls */}
                  <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mt-2">
                    <span className="text-[11px] text-zinc-450 dark:text-zinc-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(contact.created_at)}
                    </span>

                    <span className="text-[11px] font-bold text-[var(--lavender)] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      View Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Preview side (1/3 width) */}
            <div className="lg:col-span-1">
              {selectedMessage ? (
                <div className="sticky top-28 rounded-3xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-900/50 p-6 md:p-8 flex flex-col justify-between h-fit gap-6 shadow-xl">
                  {/* Message Header */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        Details
                      </h3>
                      
                      {/* Change Status Dropdown */}
                      <select
                        value={selectedMessage.status}
                        onChange={(e) => handleUpdateStatus(selectedMessage.id, e.target.value)}
                        className="text-xs font-bold border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-250 rounded-xl px-2.5 py-1.5 focus:outline-none cursor-pointer"
                      >
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      {/* Sender details block */}
                      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 flex flex-col gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Sender Info</span>
                        <h4 className="font-extrabold text-sm md:text-base text-zinc-900 dark:text-zinc-50">{selectedMessage.name}</h4>
                        <a 
                          href={`mailto:${selectedMessage.email}`}
                          className="text-xs md:text-sm font-semibold text-[var(--lavender)] hover:underline flex items-center gap-1 w-fit group"
                        >
                          {selectedMessage.email}
                          <ExternalLink className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>

                      {/* Date block */}
                      <div className="flex items-center gap-2 text-xs text-zinc-450 dark:text-zinc-550 px-1">
                        <Calendar className="w-4 h-4 text-zinc-400" />
                        <span>Received on {formatDate(selectedMessage.created_at)}</span>
                      </div>

                      {/* Message content block */}
                      <div className="space-y-2 mt-4 px-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Message</span>
                        <div className="p-4 md:p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-950/20 text-zinc-700 dark:text-zinc-300 text-xs md:text-sm leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                          {selectedMessage.message}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-4">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Regarding your message on Portfolio&body=Hi ${selectedMessage.name},%0D%0A%0D%0AThank you for contacting me. %0D%0A%0D%0A`}
                      onClick={() => handleUpdateStatus(selectedMessage.id, "replied")}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--lavender)] text-white font-bold rounded-xl hover:opacity-95 transition-all text-xs shadow-md shadow-[var(--lavender)]/20 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Reply Email
                    </a>
                    
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="p-3 bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-450 border border-rose-100 dark:border-rose-900/40 rounded-xl transition-all cursor-pointer"
                      title="Delete Message"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="sticky top-28 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/10 p-8 text-center flex flex-col items-center justify-center py-20 min-h-60">
                  <div className="w-12 h-12 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-400 flex items-center justify-center mb-3">
                    <ChevronRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-650 dark:text-zinc-300">Select a Message</h4>
                  <p className="text-zinc-450 dark:text-zinc-500 text-[11px] mt-1 max-w-[200px]">
                    Click any message card in the list to load and manage full content details.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
