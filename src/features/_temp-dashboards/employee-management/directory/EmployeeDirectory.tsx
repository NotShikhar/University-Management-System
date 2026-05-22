import { motion } from 'motion/react';
import { useState } from 'react';
import PageNav from 'shared/new-components/PageNav';

const EMPLOYEES = [
  {
    id: 'EMP001',
    name: 'Dr. John Watson',
    dept: 'Computer Science',
    designation: 'Professor',
    status: 'Active',
    joining: '2020-06-15',
    email: 'john.watson@university.edu',
    phone: '+91 98765 43210',
  },
  {
    id: 'EMP002',
    name: 'Prof. Sherlock Holmes',
    dept: 'Mathematics',
    designation: 'Professor',
    status: 'Active',
    joining: '2018-03-01',
    email: 'sherlock.holmes@university.edu',
    phone: '+91 98765 43211',
  },
  {
    id: 'EMP003',
    name: 'Ms. Irene Adler',
    dept: 'Library Sciences',
    designation: 'Librarian',
    status: 'Active',
    joining: '2021-09-12',
    email: 'irene.adler@university.edu',
    phone: '+91 98765 43212',
  },
  {
    id: 'EMP004',
    name: 'Dr. James Moriarty',
    dept: 'Physics',
    designation: 'Professor',
    status: 'On Leave',
    joining: '2019-01-20',
    email: 'james.moriarty@university.edu',
    phone: '+91 98765 43213',
  },
  {
    id: 'EMP005',
    name: 'Dr. Mary Morstan',
    dept: 'Chemistry',
    designation: 'Associate Professor',
    status: 'Active',
    joining: '2022-07-04',
    email: 'mary.morstan@university.edu',
    phone: '+91 98765 43214',
  },
  {
    id: 'EMP006',
    name: 'Prof. Mycroft Holmes',
    dept: 'Administration',
    designation: 'Registrar',
    status: 'Active',
    joining: '2015-11-30',
    email: 'mycroft.holmes@university.edu',
    phone: '+91 98765 43215',
  },
  {
    id: 'EMP007',
    name: 'Dr. Molly Hooper',
    dept: 'Chemistry',
    designation: 'Assistant Professor',
    status: 'Active',
    joining: '2023-01-10',
    email: 'molly.hooper@university.edu',
    phone: '+91 98765 43216',
  },
  {
    id: 'EMP008',
    name: 'Mr. Greg Lestrade',
    dept: 'Administration',
    designation: 'Administrative Officer',
    status: 'Active',
    joining: '2020-04-18',
    email: 'greg.lestrade@university.edu',
    phone: '+91 98765 43217',
  },
  {
    id: 'EMP009',
    name: 'Mrs. Martha Hudson',
    dept: 'Administration',
    designation: 'Office Assistant',
    status: 'Inactive',
    joining: '2017-08-22',
    email: 'martha.hudson@university.edu',
    phone: '+91 98765 43218',
  },
  {
    id: 'EMP010',
    name: 'Dr. Sarah Smith',
    dept: 'Computer Science',
    designation: 'Assistant Professor',
    status: 'Probation',
    joining: '2024-02-01',
    email: 'sarah.smith@university.edu',
    phone: '+91 98765 43219',
  },
  {
    id: 'EMP011',
    name: 'Prof. Alan Turing',
    dept: 'Computer Science',
    designation: 'Dean',
    status: 'Active',
    joining: '2014-05-10',
    email: 'alan.turing@university.edu',
    phone: '+91 98765 43220',
  },
  {
    id: 'EMP012',
    name: 'Dr. Rosalind Franklin',
    dept: 'Physics',
    designation: 'Associate Professor',
    status: 'Active',
    joining: '2021-11-15',
    email: 'rosalind.franklin@university.edu',
    phone: '+91 98765 43221',
  },
];

export default function EmployeeDirectory() {
  const [search, setSearch] = useState('');

  const filtered = EMPLOYEES.filter(
    e =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.id.toLowerCase().includes(search.toLowerCase()) ||
      e.dept.toLowerCase().includes(search.toLowerCase()) ||
      e.designation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Employee Directory" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10"
      >
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Employee Services &gt; Directory
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            Employee Directory
          </h1>
          <p className="text-gray-500 text-sm font-medium mt-1">
            {EMPLOYEES.length} employees found
          </p>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <div className="relative flex-1 lg:flex-initial">
            <i className="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full lg:w-72 h-11 pl-10 pr-4 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-gray-300 focus:bg-white transition-all text-gray-700 placeholder:text-gray-300"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50 bg-gray-50/50">
                <th className="text-left px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  ID
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Designation
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Joining
                </th>
                <th className="text-right px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp, i) => (
                <motion.tr
                  key={emp.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i }}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                        {emp.name
                          .split(' ')
                          .map(n => n[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          {emp.name}
                        </p>
                        <p className="text-[10px] text-gray-400">{emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-blue-600">
                    {emp.id}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-600">
                    {emp.dept}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-gray-700">
                    {emp.designation}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full ${
                        emp.status === 'Active'
                          ? 'bg-green-50 text-green-700'
                          : emp.status === 'On Leave'
                            ? 'bg-amber-50 text-amber-700'
                            : emp.status === 'Probation'
                              ? 'bg-blue-50 text-blue-700'
                              : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-400">
                    {emp.joining}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1.5 text-[10px] font-bold text-gray-500 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <i className="pi pi-search text-3xl text-gray-200 mb-3" />
            <p className="text-sm text-gray-300 font-medium">
              No employees match your search
            </p>
          </div>
        )}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-50 flex justify-between items-center">
          <p className="text-[10px] text-gray-400 font-medium">
            Showing {filtered.length} of {EMPLOYEES.length} employees
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-[10px] font-bold text-gray-500 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1.5 text-[10px] font-bold text-white bg-gray-900 border border-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              1
            </button>
            <button className="px-3 py-1.5 text-[10px] font-bold text-gray-500 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
