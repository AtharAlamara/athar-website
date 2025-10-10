import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate';

export default function ProjectSupervisionPage() {
  return (
    <ServiceTemplate
      serviceSlug="projectsupervision"
      heroSrc="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtoGZE6UgQM4ObdcC3ln1UzqD9si0WALVgpZvr"
      heroAlt="Project Supervision"
      heroObjectPosition="center"
      fallbackEn={{
        // Headings
        title: 'Project Supervision',
        subtitle: 'Project Supervision at Athar Alamara',

        // Body
        p1: `Our project supervision service ensures that every phase of the design and construction process is executed to the highest standards, on time and within budget. We act as the client's trusted representative on site, overseeing all aspects of the project from start to finish to maintain design integrity, construction quality, and overall efficiency. With clear communication and close attention to detail, we bridge the gap between the design vision and the built result.`,
        p2: `Our team works hand-in-hand with contractors, consultants, and suppliers to monitor progress, resolve issues, and make informed decisions that keep the project aligned with the original goals. We conduct regular site visits, quality control checks, and timeline reviews to ensure that each element is delivered according to plan and to the expected standard.`,
        p3: `By offering hands-on supervision and proactive management, we provide peace of mind for our clients — knowing that their project is in capable hands every step of the way. Our commitment is not just to completion, but to excellence in execution.`,

        // SEO (EN)
        seoTitle: 'Athar Architecture | Project Supervision Services',
        seoDescription:
          'Professional project supervision services in Riyadh, Saudi Arabia.',
        seoKeywords:
          'project supervision Riyadh, construction management Saudi Arabia',

        // Social
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtoGZE6UgQM4ObdcC3ln1UzqD9si0WALVgpZvr',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtoGZE6UgQM4ObdcC3ln1UzqD9si0WALVgpZvr',
        ogUrlPath: '/services/projectsupervision',

        // Buttons
        btnBack: 'Back to Services',
        btnProjects: 'View Our Projects',
        btnContact: 'Contact Us',
      }}
      fallbackAr={{
        // Headings
        title: 'الإشراف',
        subtitle: 'الإشراف في أثر العمارة',

        // Body (AR)
        p1: `نقدّم خدمة الإشراف على المشاريع لضمان تنفيذ جميع مراحل التصميم والبناء وفق أعلى المعايير، وفي الوقت المحدد وضمن الميزانية. نعمل كممثل معتمد للعميل في الموقع، ونشرف على كافة جوانب المشروع من البداية وحتى التسليم للحفاظ على سلامة التصميم وجودة التنفيذ والكفاءة العامة. ومن خلال التواصل الواضح والانتباه الدقيق للتفاصيل، نقرّب المسافة بين الرؤية التصميمية والنتيجة النهائية.`,
        p2: `يعمل فريقنا بشكل متواصل مع المقاولين والاستشاريين والموردين لمتابعة التقدّم، وحل المشكلات، واتخاذ قرارات مدروسة تُبقي المشروع ملتزمًا بأهدافه الأساسية. نقوم بزيارات ميدانية منتظمة، وفحوصات دقيقة لضبط الجودة، ومراجعات مستمرة للجدول الزمني لضمان تنفيذ كل عنصر بدقة ووفق المعايير المتوقعة.`,
        p3: `من خلال إشراف فعّال وإدارة دقيقة، نمنح عملاءنا راحة البال والثقة بأن مشاريعهم تُدار بكفاءة في كل مرحلة. دورنا لا يقتصر على الإنجاز، بل يركّز على تنفيذ يعكس الرؤية بأعلى درجات الاحتراف.`,

        // SEO (AR minimal, natural)
        seoTitle: 'Athar Architecture | خدمات الإشراف',
        seoDescription:
          'خدمات الإشراف على المشاريع في الرياض، المملكة العربية السعودية.',
        seoKeywords: 'إشراف المشاريع الرياض, إدارة البناء السعودية',

        // Social
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtoGZE6UgQM4ObdcC3ln1UzqD9si0WALVgpZvr',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtoGZE6UgQM4ObdcC3ln1UzqD9si0WALVgpZvr',
        ogUrlPath: '/services/projectsupervision',

        // Buttons
        btnBack: 'الخدمات',
        btnProjects: 'المشاريع',
        btnContact: 'اتصل بنا',
      }}
    />
  );
}
