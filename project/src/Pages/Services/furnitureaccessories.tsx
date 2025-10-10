import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate';

export default function FurnitureAccessoriesPage() {
  return (
    <ServiceTemplate
      serviceSlug="furnitureaccessories"
      heroSrc="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCXRhJpYUxyJWIcq1kSK9o6mvLgniXlMQZrpe"
      heroAlt="Furniture & Accessories"
      heroObjectPosition="center"
      fallbackEn={{
        // H1 + H2
        title: 'Furniture & Accessories',
        subtitle: 'Furniture & Accessories at Athar Alamara',

        // Paragraphs (exact English copy from your page)
        p1: `Our furniture and accessories service is designed to complete your space with carefully curated pieces that enhance both style and functionality. We believe that the right furnishings and decorative elements are essential to bringing a design to life — adding character, comfort, and a sense of identity. Whether you're furnishing a newly designed space or refreshing an existing one, we work with you to select or design items that reflect your taste and support the way you live or work.`,
        p2: `Our team sources high-quality furniture, lighting, artwork, textiles, and décor from trusted brands, artisans, and custom makers to ensure every piece contributes to a cohesive and timeless look. We consider scale, proportion, materials, and color to create balanced, layered environments that feel both intentional and inviting.`,
        p3: `From statement pieces to subtle finishing touches, our goal is to transform your space into one that feels complete, refined, and truly personal — where every detail works together to elevate the overall design experience.`,

        // SEO (English from your original page)
        seoTitle: 'Athar Architecture | Furniture & Accessories Services',
        seoDescription:
          'Curated furniture and accessories selection in Riyadh, Saudi Arabia. Complete your space with carefully selected pieces that enhance both style and functionality.',
        seoKeywords:
          'furniture selection Riyadh, interior accessories Saudi Arabia, luxury furniture, custom furniture, home furnishing, commercial furniture, design accessories',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCXRhJpYUxyJWIcq1kSK9o6mvLgniXlMQZrpe',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCXRhJpYUxyJWIcq1kSK9o6mvLgniXlMQZrpe',

        // Used by the template to build og:url (adds /sa prefix on Arabic routes)
        ogUrlPath: '/services/furnitureaccessories',
      }}
      fallbackAr={{
        // H1 + H2
        title: 'الأثاث والإكسسوارات',
        subtitle: 'الأثاث والإكسسوارات في أثر العمارة',

        // Paragraphs (Arabic you provided)
        p1: `نُقدّم في أثر العمارة أكثر من مجرد تأثيث، بل نمنح كل مساحة روحًا تعبّر عنها، وتفاصيل تعكس هويتها. من خلال خدمة متكاملة في التأثيث وتنسيق الإكسسوارات، نرافقك في رحلة اختيار قطع تعبّر عنك وتحاكي ذوقك في كل زاوية، لتجعل من مساحتك امتدادًا حقيقيًا لهويتك.`,
        p2: `نستمد اختياراتنا من علامات تجارية موثوقة، لنضمن أن كل عنصر — من الأثاث والإضاءة إلى الأعمال الفنية والمنسوجات — يقدّم أداءً ثابتًا وتصميمًا متينًا. نؤمن أن الجودة لا تُساوَم، بل هي أساس في كل ما نختاره ليبقى جميلاً رغم تغيّر الفصول.`,
        p3: `سواء كنت تؤثث مساحة جديدة أو تعيد إحياء مساحة عزيزة، نؤمن أن التأثيث الحقيقي لا يقتصر على اختيار القطع الجميلة، بل يكمن في خلق شعور؛ فلا يكون مجرد مكان، بل ذاكرة تُبنى، وراحة تُعاش، ومساحة تنتمي إليها كما تنتمي إليك.`,

        // Minimal, natural Arabic SEO
        seoTitle: 'Athar Architecture | خدمات الأثاث والإكسسوارات',
        seoDescription: 'خدمات الأثاث والإكسسوارات في الرياض، المملكة العربية السعودية.',
        seoKeywords: 'أثاث الرياض, إكسسوارات داخلية السعودية',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCXRhJpYUxyJWIcq1kSK9o6mvLgniXlMQZrpe',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtCXRhJpYUxyJWIcq1kSK9o6mvLgniXlMQZrpe',

        // Will be prefixed with /sa on Arabic routes
        ogUrlPath: '/services/furnitureaccessories',
      }}
    />
  );
}
