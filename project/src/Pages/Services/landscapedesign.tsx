import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate';

export default function LandscapeDesignPage() {
  return (
    <ServiceTemplate
      serviceSlug="landscapedesign"
      heroSrc="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtum7wCyEZPg9BSDseXGfwOamrp8LY37zxiHnQ"
      heroAlt="Landscape Design"
      heroObjectPosition="center"
      fallbackEn={{
        // H1 + H2
        title: 'Landscape Design',
        subtitle: 'Landscape Design at Athar Alamara',

        // Paragraphs (exact English copy from your page)
        p1: `Our landscape design service focuses on creating outdoor spaces that are not only visually stunning but also functional, sustainable, and deeply connected to their environment. We approach each project with the belief that outdoor areas should be an extension of the architecture and lifestyle they support. Whether it's a private garden, a residential yard, or a large-scale public space, we design with purpose — enhancing natural beauty while ensuring usability and long-term resilience.`,
        p2: `From the initial site analysis to planting plans and hardscape layouts, we take into consideration the unique characteristics of the land, climate conditions, and the way people will interact with the space. Our team blends natural elements with thoughtful design to craft outdoor environments that promote relaxation, connection, and well-being. We carefully select materials, vegetation, and layout strategies that not only complement the surrounding architecture but also thrive over time with minimal environmental impact.`,
        p3: `By integrating aesthetics with functionality, our landscape designs create harmonious outdoor experiences that enrich daily life and foster a deeper connection to nature.`,

        // SEO (from your original page)
        seoTitle: 'Athar Architecture | Landscape Design Services',
        seoDescription:
          'Professional landscape design services in Riyadh, Saudi Arabia. Creating outdoor spaces that are visually stunning, functional, sustainable, and deeply connected to their environment.',
        seoKeywords:
          'landscape design Riyadh, landscape architecture Saudi Arabia, garden design, outdoor spaces, sustainable landscaping, residential landscaping, commercial landscaping',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtum7wCyEZPg9BSDseXGfwOamrp8LY37zxiHnQ',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtum7wCyEZPg9BSDseXGfwOamrp8LY37zxiHnQ',

        // Used by the template to build og:url (adds /sa prefix on Arabic routes)
        ogUrlPath: '/services/landscapedesign',
      }}
      fallbackAr={{
        // H1 + H2
        title: 'تصميم الحدائق',
        subtitle: 'تصميم الحدائق في أثر العمارة',

        // Paragraphs (Arabic you provided)
        p1: `تركز خدمـتنا في تصميم الحدائق على تطوير مساحات خارجية تجمع بين الجمال البصري والعملية، مع ارتباط عميق بالبيئة المحيطة، لتكون جزءًا من حكاية المكان، وتكمّل فصوله المعمارية بلغة خضراء. سواء كانت حديقة خاصة، فناءً سكنيًا، أو ساحة عامة، فإننا نصمم بهدف واضح وهو تعزيز الجمال الطبيعي مع ضمان تجربة استخدام عملية ومستدامة على المدى الطويل.`,
        p2: `من تحليل الموقع الأولي إلى تجهيز المخططات والتشجير، نأخذ بعين الاعتبار وتفاعله اليومي معه، لنصنع بيئات خارجية تعزز الاسترخاء والتواصل والرفاهية. ولأن كل عنصر يُسهم في التجربة، ننتقي المواد والنباتات بعناية تامة، لتتماشى مع التصميم وتبقى نابضة بالحياة عامًا بعد عام.`,
        p3: `نصمم الحدائق لتكون لحظة هادئة في عالم مزدحم، ومساحة تنتمي إليك كما تنتمي للطبيعة؛ ليست مجرد فراغ جميل، بل مشهد يُعاش كل يوم بحواس مفتوحة وقلب مرتاح.`,

        // Minimal, natural Arabic SEO
        seoTitle: 'Athar Architecture | خدمات تصميم الحدائق',
        seoDescription: 'خدمات تصميم الحدائق في الرياض، المملكة العربية السعودية.',
        seoKeywords: 'تصميم حدائق الرياض, تنسيق حدائق السعودية',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtum7wCyEZPg9BSDseXGfwOamrp8LY37zxiHnQ',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtum7wCyEZPg9BSDseXGfwOamrp8LY37zxiHnQ',

        // Will be prefixed with /sa on Arabic routes
        ogUrlPath: '/services/landscapedesign',
      }}
    />
  );
}
