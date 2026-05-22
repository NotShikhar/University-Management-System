import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';

const CATEGORIES = [
  { value: 'exam', label: 'Exam', icon: 'pi pi-pencil' },
  { value: 'event', label: 'Event', icon: 'pi pi-star' },
  { value: 'holiday', label: 'Holiday', icon: 'pi pi-sun' },
  { value: 'deadline', label: 'Deadline', icon: 'pi pi-clock' },
  { value: 'meeting', label: 'Meeting', icon: 'pi pi-users' },
];

export default function AddEvent() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/get-involved/view-events'), 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-[1700px] mx-auto px-6 py-8 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
            <i className="pi pi-check text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Event Added!
          </h2>
          <p className="text-sm text-gray-400">
            Your event has been added to the calendar
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Add Event" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Get Involved &gt; Add Event
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Add New Event</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Create a campus event, exam, deadline or meeting
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Event Title */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Event Title
            </label>
            <input
              type="text"
              placeholder="e.g. Annual Cultural Fest"
              required
              className="w-full h-12 px-5 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Category
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {CATEGORIES.map(cat => (
                <label
                  key={cat.value}
                  className="flex flex-col items-center gap-2 p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900"
                >
                  <input
                    type="radio"
                    name="category"
                    defaultChecked={cat.value === 'event'}
                    value={cat.value}
                    className="sr-only"
                  />
                  <i className={`${cat.icon} text-base`} />
                  <span className="text-[10px] font-bold text-center">
                    {cat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Date
              </label>
              <input
                type="date"
                required
                className="w-full h-12 px-5 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Time
              </label>
              <input
                type="time"
                className="w-full h-12 px-5 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Main Auditorium"
                className="w-full h-12 px-5 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Organizer
              </label>
              <input
                type="text"
                placeholder="e.g. Cultural Committee"
                className="w-full h-12 px-5 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe the event, including key details, requirements, and instructions..."
              className="w-full px-5 py-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300 resize-none"
            />
          </div>
        </div>

        {/* Additional Options */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-sm font-bold text-gray-900 mb-5">
            Additional Options
          </h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-200 text-gray-900 focus:ring-0"
              />
              <span className="text-xs text-gray-500 font-medium">
                Make this a recurring event
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-200 text-gray-900 focus:ring-0"
              />
              <span className="text-xs text-gray-500 font-medium">
                Send notification to all users
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-200 text-gray-900 focus:ring-0"
              />
              <span className="text-xs text-gray-500 font-medium">
                Require RSVP / registration
              </span>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 text-xs font-bold text-gray-500 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <div className="flex gap-3">
            <button
              type="button"
              className="px-6 py-2.5 text-xs font-bold text-gray-500 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 text-xs font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <i className="pi pi-calendar-plus text-xs" />
              Add to Calendar
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
}
