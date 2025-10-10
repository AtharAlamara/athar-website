import React, { PropsWithChildren, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleLink as Link } from '@/lib/LocaleLink';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabaseClient';
import PageWrapper from './PageWrapper';
import GlobalHeader from './GlobalHeader';
import SiteFooter from './SiteFooter';
import ScrollToTop from './ScrollToTop';

interface Project {
  hero_image: string;
  name: string;
  subtitle: string;
  category: string;
  status: string;
  description: string;
  seo_title: string;
  seo_desc: string;
}

interface Props {
  projectSlug: string;
  nextSlug: string;
  heroObjectPosition?: string; // NEW optional
  heroHeight?: string;         // NEW optional (e.g. "80vh")
}

export default function ProjectTemplate({
  projectSlug,
  nextSlug,
  heroObjectPosition,
  heroHeight,
  children,
}: PropsWithChildren<Props>) {
  const path = useLocation().pathname;
  const isAr = path.startsWith('/sa/');
  const locale = isAr ? 'ar' : 'en';

  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    supabase
      .from<Project>('Projects')
      .select('*')
      .eq('slug', projectSlug)
      .eq('locale', locale)
      .single()
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setProject(data);
      });
  }, [projectSlug, locale]);

  if (!project) return <div>Loading…</div>;

  const label = locale === 'en' ? 'Next Project' : 'المشروع التالي';
  const nextUrl = `${isAr ? '/sa' : ''}/projects/${nextSlug}`;

  return (
    <PageWrapper>
      <Helmet>
        <title>{project.seo_title}</title>
        <meta name="description" content={project.seo_desc} />
        {/* …other meta tags */}
      </Helmet>

      <ScrollToTop />
      <GlobalHeader />

      <main className="pt-20 bg-white">
        {/* Hero */}
        <div
          className="w-full relative -mt-20"
          style={{ height: heroHeight ?? '100vh' }} // default full screen
        >
          <img
            src={project.hero_image} // always Supabase
            alt={project.name}
            className="w-full h-full object-cover"
            style={heroObjectPosition ? { objectPosition: heroObjectPosition } : undefined}
          />
        </div>

        <section className="max-w-4xl mx-auto px-4 py-16">
          {/* Top copy */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-normal">{project.name}</h1>
            <p className="text-lg font-light mb-4">{project.subtitle}</p>
            <p className="text-lg font-light">{project.category}</p>
            <p className="text-lg font-light mb-8">{project.status}</p>
          </div>

          {/* Description (narrower) */}
          <div className="mx-auto mb-16 px-4 md:px-0 max-w-4xl">
            <p className="text-lg font-light leading-relaxed text-center">
              {project.description}
            </p>
          </div>

          {/* Your project images */}
          {children}

          {/* Always-visible Next button */}
          <div className="mt-32 text-center">
            <Link
              to={nextUrl}
              className="inline-flex items-center gap-2 px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 font-medium"
            >
              <span className="text-sm tracking-wide">{label}</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </PageWrapper>
  );
}
