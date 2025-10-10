import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate';

export default function ArchitecturePage() {
  return (
    <ServiceTemplate
      serviceSlug="architecture"
      heroSrc="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtZf8QmT1IwQ42fTitNUoEO7HnMs6muXZFWAgq"
      heroAlt="Architecture"
      heroObjectPosition="center"
      fallbackEn={{
        // H1 + H2
        title: 'Architecture',
        subtitle: 'Architecture at Athar Alamara',

        // Paragraphs (exact English copy)
        p1: `Our architecture service is at the heart of what we do, combining creativity, technical expertise, and a deep understanding of space to design environments that are both beautiful and functional. We work closely with each client to transform their vision into a built reality, taking into account every detail — from the surrounding landscape and local context to the intended use and long-term sustainability of the structure.`,
        p2: `Whether you're planning a new home, a commercial development, or a public building, our team is committed to delivering thoughtful, innovative solutions tailored to your goals. We guide projects through every stage of the design process, including concept development, planning approvals, construction documentation, and site coordination. Our approach balances aesthetic appeal with practicality, ensuring that each design not only looks great but also works effortlessly for the people who use it.`,
        p3: `By blending timeless design principles with modern techniques and sustainable practices, we aim to create architecture that stands the test of time — spaces that inspire, support, and enrich everyday life.`,

        // SEO (from your original page)
        seoTitle: 'Athar Architecture | Architecture Services',
        seoDescription:
          'Professional architecture services in Riyadh, Saudi Arabia. We combine creativity, technical expertise, and deep understanding of space to design beautiful and functional environments.',
        seoKeywords:
          'architecture services Riyadh, architectural design Saudi Arabia, residential architecture, commercial architecture, sustainable design, LEED architecture, villa design',

        // OG/Twitter images
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrazoYwMye0fMipAwBazW7nTb3VuFLlOCNx4J',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrazoYwMye0fMipAwBazW7nTb3VuFLlOCNx4J',

        // Will be prefixed with /sa automatically on Arabic routes
        ogUrlPath: '/services/architecture',
      }}
      fallbackAr={{
        title: 'التصميم المعماري',
        subtitle: 'التصميم المعماري في أثر العمارة',
        p1: `تُعد خدمة التصميم المعماري جوهر عملنا في أثر العمارة، حيث نبدأ من فهم عميق للسياق المحلي والاحتياجات الإنسانية لصياغة حلول تصميمية تُوازن بدقة بين الجمال والوظيفة، وتُراعي في تفاصيلها أسلوب حياة المستخدم واحتياجاته اليومية، لتُصبح التجربة المعمارية جزءًا من حياته، بل امتدادًا لطريقة عيشه وتعبيرًا عن هويته`,
        p2: `نحن نعمل عن قرب مع عملائنا في جميع مراحل المشروع، من تطوير الفكرة سواء كنت تخطط لبناء منزل جديد أو تطوير مشروع تجاري، فإن فريقنا ملتزم بتقديم حلول مدروسة ومبتكرة، مصممة بعناية لتتناسب مع أهدافك. نؤمن بأن كل مشروع يحمل فرصة لإعادة تعريف العلاقة بين الإنسان والمكان، مما يدفعنا إلى ابتكار تصاميم تعبّر عن روح البيئة التي تنشأ فيها، وتواكب في الوقت ذاته أنماط الحياة المتجددة والحديثة`,
        p3: `نسعى في أثر العمارة إلى خلق تصاميم تتجذّر في المكان، وتخدم الإنسان، وتُعزز جودة الحياة من خلال تجربة معمارية متكاملة تجمع بين الجمال، والوظيفة، والوعي البيئي؛ فغايتنا ليست فقط أن نُنشئ مبانٍ، بل أن نُصمم أماكن تُلهم من يعيشها، وتترك أثرًا يبقى حيًا في الذاكرة والشعور`,
        seoTitle: 'Athar Architecture | الخدمات المعمارية',
        seoDescription: 'خدمات التصميم المعماري الاحترافية في الرياض، المملكة العربية السعودية.',
        seoKeywords: 'التصميم المعماري الرياض, تصميم معماري السعودية',
        ogImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrazoYwMye0fMipAwBazW7nTb3VuFLlOCNx4J',
        twitterImage:
          'https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrazoYwMye0fMipAwBazW7nTb3VuFLlOCNx4J',
        ogUrlPath: '/services/architecture',
      }}
    />
  );
}
