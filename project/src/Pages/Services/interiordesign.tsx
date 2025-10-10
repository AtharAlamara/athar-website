import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate';

export default function InteriorDesignPage() {
  return (
    <ServiceTemplate
      serviceSlug="interiordesign"
      heroSrc="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRfMgUIbasyJRoDmA4vpVjN1HYUn52CWOQPgq"
      heroAlt="Interior Design"
      heroObjectPosition="bottom"
      fallbackEn={{
        // H1 + H2
        title: 'Interior Design',
        subtitle: 'Interior Design at Athar Alamara',

        // Paragraphs (exact English copy)
        p1: `Our interior design service is all about bringing spaces to life through thoughtful, intentional design that reflects both personality and purpose. We believe that interiors should not only be visually compelling but also enhance the way people live, work, and interact within them. From concept development to final styling, our team works collaboratively with clients to create environments that are both functional and emotionally resonant.`,
        p2: `Whether it's a cozy home, a dynamic office, or a welcoming commercial space, we pay close attention to every detail — including layout, lighting, materials, textures, and furnishings — to craft interiors that feel cohesive and meaningful. We approach each project with a balance of creativity and practicality, ensuring that the design complements the architectural framework while meeting the needs of daily life.`,
        p3: `Our goal is to design interiors that tell a story, elevate everyday experiences, and create a lasting impression. By blending timeless style with innovative design solutions, we transform ordinary spaces into places people truly love to be in.`,

        // SEO (from your original page)
        seoTitle: 'Athar Architecture | Interior Design Services',
        seoDescription:
          'Premium interior design services in Riyadh, Saudi Arabia. Bringing spaces to life through thoughtful, intentional design that reflects both personality and purpose.',
        seoKeywords:
          'interior design Riyadh, interior design services Saudi Arabia, luxury interior design, residential interior design, commercial interior design, contemporary design',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRfMgUIbasyJRoDmA4vpVjN1HYUn52CWOQPgq',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRfMgUIbasyJRoDmA4vpVjN1HYUn52CWOQPgq',

        // Used by the template to build og:url (adds /sa prefix on Arabic routes)
        ogUrlPath: '/services/interiordesign',
      }}
      fallbackAr={{
        title: 'التصميم الداخلي',
        subtitle: 'التصميم الداخلي في أثر العمارة',
        p1: `في أثر العمارة، نؤمن أن التصميم الداخلي ليس مجرد تنسيقٍ للأثاث أو الألوان، بل هو فن تشكيل الحياة داخل المساحات، وترجمة لمشاعر الفرد وتفاصيل يومه، في تصميم يُشبهه ويخدم أسلوب حياته. فالتصميم الداخلي لدينا يبدأ من الإنسان، ويُترجم إلى بيئة تنسجم مع إيقاع الحياة وتُثري التجربة اليومية.`,
        p2: `سواءً كان منزلاً يعكس خصوصية ساكنيه، أو مكتبًا يعزز الإنتاجية والتفاعل، أو محلًا تجاريًا يعبّر عن تجربة العميل ويجذب الزوار، نبدأ كل مشروع داخلي بفهم عميق لاحتياجات المشروع وطبيعة الاستخدام اليومي للمكان، ونولي اهتمامًا خاصًا بتوزيع المساحات، الإضاءة، الخامات، والأثاث، لنخلق بيئة متكاملة تنسجم بصريًا ووظيفيًا. كما نحرص على أن يكون التصميم الداخلي مكمّلًا للإطار المعماري العام، بحيث ينسجم معه في اللغة والأسلوب، ويُحافظ على وحدة التجربة البصرية والوظيفية من الخارج إلى الداخل.`,
        p3: `نهدف في كل مشروع إلى خلق مساحات تُلهم وتحتضن من يستخدمها، ولا تُرضي الذوق فحسب، بل تُعزز جودة العيش، وتترك أثرًا دائمًا — لأننا نؤمن أن المكان المصمم جيدًا لا يُرى فقط، بل يُشعر ويُعاش.`,
        seoTitle: 'Athar Architecture | خدمات التصميم الداخلي',
        seoDescription: 'خدمات تصميم داخلي متميزة في الرياض، المملكة العربية السعودية.',
        seoKeywords: 'التصميم الداخلي الرياض, تصميم داخلي السعودية',
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRfMgUIbasyJRoDmA4vpVjN1HYUn52CWOQPgq',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRfMgUIbasyJRoDmA4vpVjN1HYUn52CWOQPgq',
        ogUrlPath: '/services/interiordesign',
      }}
    />
  );
}
