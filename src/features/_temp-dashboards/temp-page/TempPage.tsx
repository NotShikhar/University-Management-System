import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageNav from 'shared/new-components/PageNav';
import { menuConfig } from '../../../config/menu-routes';
import { pageConfigs } from './mockData';
import {
  TableLayout,
  DashboardLayout,
  FormLayout,
  WorkflowLayout,
  GridLayout,
  InfoLayout,
  SkeletonPage,
} from './layouts';

function findItemBySlug(
  items: Menu.MenuItem[],
  slug: string
): Menu.MenuItem | undefined {
  for (const item of items) {
    if (item.slug === slug) return item;
    if (item.children) {
      const found = findItemBySlug(item.children, slug);
      if (found) return found;
    }
  }
  return undefined;
}

const layoutNames: Record<string, string> = {
  table: 'Data Management',
  dashboard: 'Dashboard Overview',
  form: 'Application Form',
  workflow: 'Workflow Tracking',
  grid: 'Category View',
  info: 'Information Guide',
};

const TempPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const item = slug ? findItemBySlug(menuConfig, slug) : undefined;
  const pageTitle = item?.label?.replace(/\n/g, ' ') ?? 'Page';
  const category = item?.category ?? 'Module';
  const config = slug ? pageConfigs[slug] : undefined;
  const layoutType = config?.layout ?? 'info';

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600 + Math.random() * 400);
    return () => clearTimeout(t);
  }, [slug]);

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-8">
      <PageNav title={pageTitle} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10"
      >
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Modules &gt; {category} &gt; {pageTitle}
          </p>
          <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
          <p className="text-gray-500 text-sm font-medium italic mt-1">
            {item?.description ?? 'Manage and configure module settings'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest rounded-full">
            {layoutNames[layoutType]}
          </span>
          <span className="px-4 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
            Demo Preview
          </span>
        </div>
      </motion.div>

      {loading ? (
        <SkeletonPage layout={layoutType} config={config} />
      ) : config ? (
        <>
          {layoutType === 'table' && <TableLayout config={config} />}
          {layoutType === 'dashboard' && (
            <DashboardLayout config={config} title={pageTitle} />
          )}
          {layoutType === 'form' && <FormLayout config={config} />}
          {layoutType === 'workflow' && <WorkflowLayout config={config} />}
          {layoutType === 'grid' && <GridLayout config={config} />}
          {layoutType === 'info' && <InfoLayout config={config} />}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <i className="pi pi-folder-open text-5xl text-gray-200 mb-4" />
          <h2 className="text-xl font-bold text-gray-300 mb-2">
            Page Content Coming Soon
          </h2>
          <p className="text-sm text-gray-300">
            This module is under development and will be available soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default TempPage;
