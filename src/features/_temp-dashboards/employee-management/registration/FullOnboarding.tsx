import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';

export default function FullOnboarding() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/employee-management'), 1500);
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
            Employee Onboarded Successfully!
          </h2>
          <p className="text-sm text-gray-400">
            Redirecting to registration page...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Full Onboarding" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Employee Services &gt; Registration &gt; Full Onboarding
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Full Onboarding</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Complete employee registration with all details
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* Personal Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
            <i className="pi pi-user text-gray-300" />
            Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Middle Name
              </label>
              <input
                type="text"
                placeholder="(optional)"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Gender
              </label>
              <select
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Marital Status
              </label>
              <select className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700">
                <option value="">Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
            <i className="pi pi-phone text-gray-300" />
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Personal Email
              </label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Official Email
              </label>
              <input
                type="email"
                placeholder="john@university.edu"
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 99999 88888"
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Address
              </label>
              <textarea
                rows={2}
                placeholder="Full residential address"
                className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Employment Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
            <i className="pi pi-briefcase text-gray-300" />
            Employment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Department
              </label>
              <select
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              >
                <option value="">Select department</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Mathematics</option>
                <option>Administration</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Designation
              </label>
              <select
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              >
                <option value="">Select designation</option>
                <option>Professor</option>
                <option>Associate Professor</option>
                <option>Assistant Professor</option>
                <option>Lecturer</option>
                <option>Administrative Officer</option>
                <option>Lab Assistant</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Nature of Employment
              </label>
              <select
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              >
                <option value="">Select nature</option>
                <option>Permanent</option>
                <option>Contractual</option>
                <option>Probation</option>
                <option>Guest Faculty</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Joining Date
              </label>
              <input
                type="date"
                required
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Employee Type
              </label>
              <select className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700">
                <option value="">Select type</option>
                <option>Teaching</option>
                <option>Non-Teaching</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Reporting To
              </label>
              <input
                type="text"
                placeholder="Supervisor name"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
            <i className="pi pi-book text-gray-300" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Highest Degree
              </label>
              <select className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700">
                <option value="">Select degree</option>
                <option>Ph.D.</option>
                <option>M.Tech</option>
                <option>M.Sc.</option>
                <option>M.A.</option>
                <option>B.Tech</option>
                <option>B.Sc.</option>
                <option>Diploma</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Specialization
              </label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Year of Passing
              </label>
              <input
                type="text"
                placeholder="e.g. 2020"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
            <i className="pi pi-clock text-gray-300" />
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                placeholder="e.g. 5"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Previous Organization
              </label>
              <input
                type="text"
                placeholder="(optional)"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Previous Designation
              </label>
              <input
                type="text"
                placeholder="(optional)"
                className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Documents & Bank */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="pi pi-file text-gray-300" />
              Documents
            </h2>
            <div className="space-y-4">
              {['Photo', 'Resume/CV', 'Degree Certificate', 'ID Proof'].map(
                doc => (
                  <div
                    key={doc}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-50"
                  >
                    <span className="text-xs font-bold text-gray-600">
                      {doc}
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1.5 text-[10px] font-bold text-gray-500 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Upload
                    </button>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="pi pi-credit-card text-gray-300" />
              Bank Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  placeholder="As per bank records"
                  className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  placeholder="XXXXXXXXXXXX"
                  className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  IFSC Code
                </label>
                <input
                  type="text"
                  placeholder="XXXX0000000"
                  className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 text-xs font-bold text-gray-500 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-2.5 text-xs font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <i className="pi pi-check text-xs" />
            Complete Onboarding
          </button>
        </div>
      </motion.form>
    </div>
  );
}
