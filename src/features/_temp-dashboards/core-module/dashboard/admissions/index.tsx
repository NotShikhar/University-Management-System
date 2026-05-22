import { motion } from 'motion/react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import React from 'react';
import PageNav from 'shared/new-components/PageNav';
import FeeConfigTable from './components/FeeConfigTable';
import QuickMetrics from './components/QuickMetrics';
import ReadinessCard from './components/ReadinessCard';
import { KNOWN_ISSUES, PORTAL_CHECKS } from './constants';
import { ADMISSIONS_STYLES } from './styles';

const checkTemplate = (val: string) => (
  <i
    className={`pi ${val === 'Yes' || val === 'Pass' ? 'pi-check-circle text-green-500' : 'pi-times-circle text-red-500'}`}
  />
);

const AdmissionsDashboard: React.FC = () => {
  return (
    <div className={ADMISSIONS_STYLES.container}>
      <PageNav title="Admissions Dashboard" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={ADMISSIONS_STYLES.header.wrapper}
      >
        <div>
          <p className={ADMISSIONS_STYLES.header.breadcrumb}>
            Core Module &gt; Admissions Management &gt; Dashboard
          </p>
          <div className={ADMISSIONS_STYLES.header.titleWrapper}>
            <h1 className={ADMISSIONS_STYLES.header.title}>
              Admissions Dashboard
            </h1>
            <Tag
              value="Pre-launch Phase"
              severity="info"
              className="rounded-md"
            />
          </div>
        </div>
        <div className={ADMISSIONS_STYLES.header.actions}>
          <Button
            label="Readiness Check"
            icon="pi pi-shield"
            className="p-button-outlined p-button-danger rounded-xl font-semibold"
          />
          <Button
            label="Go to Portal"
            icon="pi pi-external-link"
            className="p-button-dark rounded-xl font-bold"
          />
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className={ADMISSIONS_STYLES.mainGrid}>
        {/* Left Column (8 units) */}
        <div className={ADMISSIONS_STYLES.leftCol}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReadinessCard />
            <QuickMetrics />
          </div>

          <FeeConfigTable />

          {/* Portal Content Monitoring */}
          <section className={ADMISSIONS_STYLES.portalChecks.card}>
            <h2 className={ADMISSIONS_STYLES.portalChecks.title}>
              Portal Content & Student View Checks
            </h2>
            <div className={ADMISSIONS_STYLES.portalChecks.grid}>
              <div className={ADMISSIONS_STYLES.portalChecks.box}>
                <p className={ADMISSIONS_STYLES.portalChecks.boxTitle}>
                  Content Checks
                </p>
                <div className="space-y-2 text-sm">
                  {PORTAL_CHECKS.content.map(check => (
                    <div
                      key={check.label}
                      className={ADMISSIONS_STYLES.portalChecks.item}
                    >
                      <span>{check.label}</span> {checkTemplate(check.status)}
                    </div>
                  ))}
                </div>
              </div>
              <div className={ADMISSIONS_STYLES.portalChecks.box}>
                <p className={ADMISSIONS_STYLES.portalChecks.boxTitle}>
                  Visibility Checks
                </p>
                <div className="space-y-2 text-sm">
                  {PORTAL_CHECKS.visibility.map(check => (
                    <div
                      key={check.label}
                      className={ADMISSIONS_STYLES.portalChecks.item}
                    >
                      <span>{check.label}</span> {checkTemplate(check.status)}
                    </div>
                  ))}
                </div>
              </div>
              <div className={ADMISSIONS_STYLES.portalChecks.box}>
                <p className={ADMISSIONS_STYLES.portalChecks.boxTitle}>
                  Audit Logs
                </p>
                <div className="space-y-2 text-sm">
                  {PORTAL_CHECKS.audit.map(check => (
                    <div
                      key={check.label}
                      className={ADMISSIONS_STYLES.portalChecks.item}
                    >
                      <span>{check.label}</span>{' '}
                      {check.value ? (
                        <span className="font-bold">{check.value}</span>
                      ) : (
                        checkTemplate(check.status)
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (4 units) */}
        <div className={ADMISSIONS_STYLES.rightCol}>
          {/* Contact & Support Consistency */}
          <section className={ADMISSIONS_STYLES.support.card}>
            <h2 className={ADMISSIONS_STYLES.support.title}>
              Support & Contact Data
            </h2>
            <div className="space-y-4">
              <div className={ADMISSIONS_STYLES.support.item}>
                <div
                  className={`${ADMISSIONS_STYLES.support.iconWrapper} bg-blue-50`}
                >
                  <i className="pi pi-envelope text-blue-600" />
                </div>
                <div>
                  <p className={ADMISSIONS_STYLES.support.label}>
                    Primary Email
                  </p>
                  <p className={ADMISSIONS_STYLES.support.value}>
                    admissions@univerity.edu
                  </p>
                </div>
              </div>
              <div className={ADMISSIONS_STYLES.support.item}>
                <div
                  className={`${ADMISSIONS_STYLES.support.iconWrapper} bg-purple-50`}
                >
                  <i className="pi pi-phone text-purple-600" />
                </div>
                <div>
                  <p className={ADMISSIONS_STYLES.support.label}>
                    Primary Phone
                  </p>
                  <p className={ADMISSIONS_STYLES.support.value}>
                    +91 99999 88888
                  </p>
                </div>
              </div>
              <div className={ADMISSIONS_STYLES.support.footer}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">
                    Support Consistency Check
                  </span>
                  <Tag value="Passed" severity="success" />
                </div>
                <p className="text-[11px] text-gray-400">
                  Footer address matches support contact details correctly.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ & Help Center */}
          <section className={ADMISSIONS_STYLES.helpCenter.card}>
            <h2 className={ADMISSIONS_STYLES.helpCenter.title}>
              Help Center & FAQs
            </h2>
            <div className={ADMISSIONS_STYLES.helpCenter.metric}>
              <span className={ADMISSIONS_STYLES.helpCenter.value}>45</span>
              <span className={ADMISSIONS_STYLES.helpCenter.label}>
                Active FAQs
              </span>
            </div>
            <div className={ADMISSIONS_STYLES.helpCenter.progressWrapper}>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Common FAQs Coverage</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full">
                <div className="bg-green-400 h-1.5 rounded-full w-full" />
              </div>
              <p className="text-[10px] text-slate-400 mt-2 italic">
                “How to apply, documents, fees, eligibility” are all covered.
              </p>
            </div>
          </section>

          {/* Known Issues Widget */}
          <section className={ADMISSIONS_STYLES.knownIssues.card}>
            <div className={ADMISSIONS_STYLES.knownIssues.header}>
              <i className="pi pi-exclamation-triangle text-amber-600" />
              <h2 className={ADMISSIONS_STYLES.knownIssues.title}>
                Known Issues
              </h2>
            </div>
            <div className="space-y-4">
              {KNOWN_ISSUES.map(issue => (
                <div
                  key={issue.issue}
                  className={ADMISSIONS_STYLES.knownIssues.item}
                >
                  <p className={ADMISSIONS_STYLES.knownIssues.itemTitle}>
                    {issue.issue}
                  </p>
                  <p className={ADMISSIONS_STYLES.knownIssues.itemWorkaround}>
                    Workaround: {issue.workaround}
                  </p>
                  <Tag
                    value={issue.status}
                    severity="warning"
                    className="text-[10px]"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsDashboard;
