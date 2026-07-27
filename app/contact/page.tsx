"use client";

import { useState } from "react";
import Image from "next/image";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const VIDEO_TYPES = [
  "Commercial / Ad Film",
  "Corporate Video",
  "Social Media Content",
  "Product Shoot",
  "Wedding / Event",
  "Documentary",
  "Other",
];

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function ContactPage() {
  const today = new Date();
  const [selected, setSelected] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", budget: "", videoType: "", message: "",
  });

  const isPastTimeSlot = (time: string) => {
    if (!selected || !isToday(selected)) return false;
    const [, hourStr, minuteStr, meridiem] = time.match(/(\d+):(\d+) (AM|PM)/) || [];
    let hour = parseInt(hourStr, 10);
    if (meridiem === "PM" && hour !== 12) hour += 12;
    if (meridiem === "AM" && hour === 12) hour = 0;
    const slot = new Date(selected);
    slot.setHours(hour, parseInt(minuteStr, 10), 0, 0);
    return slot < new Date();
  };

  const isToday = (date: Date) => {
    const now = new Date();
    return (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    );
  };

  const handleDayClick = (date: Date | undefined) => {
    if (!date) return;
    setSelected(date);
    setSelectedTime("");
    setSubmitted(false);
    setForm({ name: "", email: "", whatsapp: "", budget: "", videoType: "", message: "" });
    setShowModal(true);
  };

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.whatsapp || !form.videoType || !selectedTime) return;
  setIsSubmitting(true);
  setError("");
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        date: selected ? formatDate(selected) : "",
        time: selectedTime,
      }),
    });
    if (!res.ok) throw new Error("Failed to send");
    setSubmitted(true);
  } catch (err) {
   setError("Something went wrong. Please try again or contact us directly.");
  } finally {
    setIsSubmitting(false);
  }
};

  const closeModal = () => {
    setShowModal(false);
    if (!submitted) setSelected(undefined);
  };

  const formatDate = (date: Date) =>
    `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <>
      <style>{`
        /* Reset DayPicker to match our design (react-day-picker v9+ class names) */
        .rdp-root {
          --rdp-accent-color: #111827;
          --rdp-day-width: 40px;
          --rdp-day-height: 40px;
          --rdp-day_button-width: 40px;
          --rdp-day_button-height: 40px;
          --rdp-day_button-border: none;
          --rdp-disabled-opacity: 1;
          --rdp-outside-opacity: 0.4;
          --rdp-weekday-opacity: 1;
          margin: 0;
          width: 100%;
        }
        .rdp-months { width: 100%; }
        .rdp-month { width: 100%; }
        .rdp-month_grid { width: 100%; }
        .rdp-weekday {
          font-size: 11px;
          font-weight: 700;
          color: #374151;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-bottom: 8px;
        }
        .rdp-day_button {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          border-radius: 9999px;
          transition: all 0.15s;
        }
        .rdp-day:not(.rdp-disabled):not(.rdp-selected) .rdp-day_button:hover {
          background: #f3f4f6;
        }
        .rdp-selected .rdp-day_button {
          background: #111827;
          color: #fff;
          font-weight: 600;
          transform: scale(1.08);
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
        }
        .rdp-today:not(.rdp-selected) .rdp-day_button {
          border: 2px solid #d1d5db;
          color: #111827;
          font-weight: 600;
        }
        .rdp-disabled:not(.rdp-selected) .rdp-day_button {
          color: #d1d5db;
          cursor: not-allowed;
        }
        .rdp-button_previous,
        .rdp-button_next {
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          color: #6b7280;
          transition: background 0.15s;
        }
        .rdp-button_previous:hover,
        .rdp-button_next:hover { background: #f3f4f6; }
        .rdp-caption_label {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          letter-spacing: 0.01em;
        }
        .rdp-month_caption { margin-bottom: 12px; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-backdrop { animation: fadeIn 0.2s ease both; }
        .modal-box { animation: slideUp 0.3s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

   <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-12 relative">

  {/* Back Button - fixed to left side */}
  <button
    onClick={() => window.history.back()}
    className="hidden md:flex fixed top-12 left-8 items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
    Back
  </button>

  {/* Back Button - mobile, above card */}
  <button
    onClick={() => window.history.back()}
    className="flex md:hidden items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-1 absolute top-6 left-4"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
    Back
  </button>

  <div className="w-full max-w-md space-y-4">

    {/* Profile Card */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <Image src="/logo.png" alt="Pahadi Bhula" width={1584} height={518} className="h-24 w-auto object-contain invert" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Pahadi Bhula Team</h1>
          <p className="text-sm text-gray-500 mt-0.5">Creative Director · Pahadi Bhula Production</p>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              Select a date below to book your discovery call.
            </p>
          </div>

          {/* Calendar Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={handleDayClick}
              startMonth={today}
              disabled={[
                { before: today },
                { dayOfWeek: [0] }, // disable Sundays
              ]}
              showOutsideDays={false}
            />

            {/* Legend */}
            <div className="flex items-center gap-5 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300" />
                Today
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
                Unavailable
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {showModal && selected && (
        <div
          className="modal-backdrop fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="modal-box bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Selected date</p>
                <p className="text-sm font-semibold text-gray-900">📅 {formatDate(selected)}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all"
              >✕</button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              {!submitted ? (
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Pick a time slot</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {TIME_SLOTS.map((time) => {
                      const disabled = isPastTimeSlot(time);
                      const active = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={disabled}
                          onClick={() => setSelectedTime(time)}
                          className={`text-xs font-medium py-2.5 rounded-xl border transition-all ${
                            disabled
                              ? "border-gray-100 text-gray-300 cursor-not-allowed"
                              : active
                              ? "bg-gray-900 border-gray-900 text-white"
                              : "border-gray-200 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-sm font-medium text-gray-700 mb-1">Fill in your details to confirm</p>
                  <input
                    type="text" placeholder="Your Name *" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                  <input
                    type="email" placeholder="Email Address *" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                  <input
                    type="tel" placeholder="WhatsApp / Call No. *" value={form.whatsapp}
                    onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                  <select
                    value={form.videoType}
                    onChange={e => setForm({ ...form, videoType: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white transition-all"
                  >
                    <option value="">Type of Video *</option>
                    {VIDEO_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <input
                    type="text" placeholder="Budget (e.g. ₹50,000 – ₹1,00,000)" value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                  <textarea
                    placeholder="Tell us about your project..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  />
                <button
  onClick={handleSubmit}
  disabled={!form.name || !form.email || !form.whatsapp || !form.videoType || !selectedTime || isSubmitting}
  className="w-full bg-gray-900 text-white text-sm font-semibold py-3.5 rounded-full hover:bg-black active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Sending..." : "Confirm Booking →"}
</button>
{error && <p className="text-xs text-red-500 mt-2 text-center">{error}</p>}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="text-base font-semibold text-gray-900 mb-2">Booking Confirmed!</h2>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Thank you, <span className="font-semibold text-gray-800">{form.name}</span>!<br />
                    We'll reach out on WhatsApp or email to confirm your call on{" "}
                    <span className="font-semibold text-gray-800">{formatDate(selected)}</span> at{" "}
                    <span className="font-semibold text-gray-800">{selectedTime}</span>.
                  </p>
                  <button
                    onClick={() => { closeModal(); setSubmitted(false); setSelected(undefined); setSelectedTime(""); setForm({ name:"",email:"",whatsapp:"",budget:"",videoType:"",message:"" }); }}
                    className="mt-5 text-xs text-gray-400 underline underline-offset-4 hover:text-gray-600 transition-colors"
                  >
                    Book another date
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
