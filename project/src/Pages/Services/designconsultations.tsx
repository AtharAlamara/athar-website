import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate';

export default function DesignConsultationsPage() {
  return (
    <ServiceTemplate
      serviceSlug="designconsultations"
      heroSrc="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQFLMqgKseYRaG4HqyPtcznBgDI6LvCrZ2wTx"
      heroAlt="Design Consultations"
      heroObjectPosition="center"
      fallbackEn={{
        // H1 + H2
        title: 'Design Consultations',
        subtitle: 'Design Consultations at Athar Alamara',

        // Paragraphs (exact English copy)
        p1: `Our design consultation service offers clients the opportunity to tap into our expertise through focused, collaborative sessions that bring clarity and direction to their projects. Whether you're at the early stages of planning, refining an existing concept, or seeking solutions for a specific design challenge, we provide professional guidance tailored to your goals, style, and budget.`,
        p2: `During consultations, we discuss your vision, assess your space, and offer creative ideas, practical recommendations, and expert insights to help you make informed decisions. These sessions can cover a wide range of topics — from architectural concepts and interior layouts to material selections, color schemes, furnishings, or landscape strategies — depending on your needs.`,
        p3: `Ideal for clients who want professional input without committing to a full design service, our consultations are flexible, insightful, and designed to give you confidence moving forward. Whether it's a one-time meeting or part of a longer collaboration, we're here to help you bring your ideas to life with clarity, creativity, and purpose.`,

        // SEO (from your original page)
        seoTitle: 'Athar Architecture | Design Consultations Services',
        seoDescription:
          'Professional design consultation services in Riyadh, Saudi Arabia. Expert guidance through focused, collaborative sessions that bring clarity and direction to your projects.',
        seoKeywords:
          'design consultation Riyadh, architecture consultation Saudi Arabia, interior design advice, design guidance, architectural consultation, design planning',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQFLMqgKseYRaG4HqyPtcznBgDI6LvCrZ2wTx',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQFLMqgKseYRaG4HqyPtcznBgDI6LvCrZ2wTx',

        // Used by the template to build og:url (adds /sa prefix on Arabic routes)
        ogUrlPath: '/services/designconsultations',
      }}
      fallbackAr={{
        // H1 + H2
        title: 'الاستشارات',
        subtitle: 'الاستشارات في أثر العمارة',

        // Paragraphs (Arabic from your CSV)
        p1: `توفر خدمة الاستشارات الهندسية للعملاء فرصة للاستفادة من خبراتنا من خلال جلسة تفاعلية تُركّز على فهم احتياجك، والإجابة على تساؤلاتك، وصياغة رؤية واضحة للمشروع وتحديد مساره بدقة. سواء كنت في المراحل الأولى من التخطيط، أو تعمل على تطوير فكرة قائمة، أو تبحث عن حلول هندسية معينة، نقدّم لك إرشادًا احترافيًا يتوافق مع أهدافك، وذوقك، وميزانيتك.`,
        p2: `خلال جلسة الاستشارة، نناقش رؤيتك، ونقيّم المشروع من مختلف الجوانب، ونقدّم أفكارًا هندسية وإبداعية، وتوصيات عملية، ووجهات نظر خبيرة تساعدك على اتخاذ قرارات واثقة ومدروسة. تغطي هذه الجلسة مجموعة واسعة من الجوانب، مثل المفاهيم المعمارية، توزيع المساحات، اختيار المواد، تنسيق الألوان، الأثاث، أو حلول التصميم الداخلي، وذلك وفقًا لاحتياجك.`,
        p3: `تُعد هذه الخدمة مثالية للعملاء الراغبين بالحصول على رأي مهني دون الارتباط بخدمة تصميم كاملة؛ حيث تتميّز الجلسة بالمرونة والعمق، وتهدف إلى تمكينك من التقدّم بثقة في مشروعك. سواء كانت استشارة لمرة واحدة أو كمرحلة أولى من تعاون مستمر، نحن هنا لنساعدك على تحويل أفكارك إلى واقع واضح، متوازن، ومُتقن.`,

        // Minimal, natural Arabic SEO
        seoTitle: 'Athar Architecture | خدمات الاستشارات',
        seoDescription: 'خدمات الاستشارات التصميمية في الرياض، المملكة العربية السعودية.',
        seoKeywords: 'الاستشارات التصميمية الرياض, استشارات تصميم السعودية',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQFLMqgKseYRaG4HqyPtcznBgDI6LvCrZ2wTx',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQFLMqgKseYRaG4HqyPtcznBgDI6LvCrZ2wTx',

        // Will be prefixed with /sa on Arabic routes
        ogUrlPath: '/services/designconsultations',
      }}
    />
  );
}
