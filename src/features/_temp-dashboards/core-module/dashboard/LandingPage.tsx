import { motion } from 'motion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';
import Tile from 'shared/components/Tiles/Tile';

const CoreDashboard: React.FC = () => {
  const navigate = useNavigate();
  const sections = [
    {
      title: 'Information',
      description:
        'University profile, establishment details, address, and recognition linkages.',
      icon: 'pi pi-university',
      colorScheme: 'blue',
      path: 'information',
      action: 'Edit Profile',
    },
    {
      title: 'Organizational Unit Types',
      description:
        'Manage unit categories like Campus, Faculty, Department, and Library.',
      icon: 'pi pi-list',
      colorScheme: 'purple',
      path: 'ou-types',
      action: 'Manage Types',
    },
    {
      title: 'Organizational Units',
      description:
        'Handle the hierarchy of campuses, faculties, and departments.',
      icon: 'pi pi-sitemap',
      colorScheme: 'green',
      path: 'ou-units',
      action: 'View List',
    },
    {
      title: 'Designations',
      description:
        'Define posts and assignments like Professor, Registrar, or HOD.',
      icon: 'pi pi-id-card',
      colorScheme: 'orange',
      path: 'designations',
      action: 'Manage Designations',
    },
    {
      title: 'Email Templates',
      description:
        'Customize and manage system-wide email notifications and templates.',
      icon: 'pi pi-envelope',
      colorScheme: 'teal',
      path: 'email-templates',
      action: 'View Templates',
    },
    {
      title: 'Settings',
      description: 'General core-module configuration and visibility rules.',
      icon: 'pi pi-cog',
      colorScheme: 'gray',
      path: 'settings',
      action: 'Configuration',
    },
  ];

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title="Core Module Overview" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Core Module</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => navigate(section.path)}
          >
            <Tile
              title={section.title}
              description={section.description}
              icon={<i className={`${section.icon} text-xl`} />}
              colorScheme={section.colorScheme as any}
              badge={section.action}
              badgeColor={section.colorScheme as any}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreDashboard;
