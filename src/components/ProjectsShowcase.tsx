import React from 'react';
import { PROJECTS_SHOWCASE } from '../data/servicesData';
import { MapPin, Shield, Sun, Building2, CheckCircle2 } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenQuoteModal: (defaultService?: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Solar &amp; CCTV Installation Projects
          </h2>
          <p className="text-base text-slate-600">
            A glance at some of our successfully commissioned solar plants and HD CCTV surveillance deployments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_SHOWCASE.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 min-h-[200px] h-48 sm:h-auto relative overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {project.clientType} Project
                </div>
              </div>

              <div className="sm:w-1/2 p-5 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {project.location}
                  </span>
                  <button
                    onClick={() => onOpenQuoteModal(project.category)}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Similar Quote →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
