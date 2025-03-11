import { Lesson } from '../types';

export const htmlLessons: Lesson[] = [
  {
    id: 'intro',
    number: 1,
    title: 'Introduction to HTML',
    titleAr: 'مقدمة إلى HTML',
    description: 'Learn the basics of HTML and its role in web development',
    descriptionAr: 'تعلم أساسيات HTML ودورها في تطوير الويب',
    content: `
      <h2>What is HTML?</h2>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using various elements and tags.</p>
      
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Elements:</strong> The building blocks of web pages</li>
        <li><strong>Tags:</strong> Used to define elements, usually come in pairs (opening and closing tags)</li>
        <li><strong>Attributes:</strong> Provide additional information about elements</li>
      </ul>

      <h3>Why Learn HTML?</h3>
      <ul>
        <li>Foundation of web development</li>
        <li>Required for any web-based project</li>
        <li>Easy to learn and use</li>
        <li>Supported by all browsers</li>
      </ul>

      <h3>HTML Document Structure</h3>
      <p>Every HTML document follows a basic structure:</p>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> - Declares the document type</li>
        <li><code>&lt;html&gt;</code> - The root element</li>
        <li><code>&lt;head&gt;</code> - Contains metadata about the document</li>
        <li><code>&lt;body&gt;</code> - Contains the visible content</li>
      </ul>
    `,
    contentAr: `
      <h2>ما هو HTML؟</h2>
      <p>HTML (لغة ترميز النص التشعبي) هي لغة الترميز القياسية لإنشاء صفحات الويب. تصف هيكل صفحة الويب باستخدام العناصر والعلامات المختلفة.</p>
      
      <h3>المفاهيم الرئيسية</h3>
      <ul>
        <li><strong>العناصر:</strong> اللبنات الأساسية لصفحات الويب</li>
        <li><strong>العلامات:</strong> تستخدم لتعريف العناصر، عادة ما تأتي في أزواج (علامات الفتح والإغلاق)</li>
        <li><strong>السمات:</strong> توفر معلومات إضافية عن العناصر</li>
      </ul>

      <h3>لماذا نتعلم HTML؟</h3>
      <ul>
        <li>أساس تطوير الويب</li>
        <li>مطلوب لأي مشروع ويب</li>
        <li>سهل التعلم والاستخدام</li>
        <li>مدعوم من جميع المتصفحات</li>
      </ul>

      <h3>هيكل مستند HTML</h3>
      <p>يتبع كل مستند HTML هيكلاً أساسياً:</p>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> - يعلن نوع المستند</li>
        <li><code>&lt;html&gt;</code> - العنصر الجذر</li>
        <li><code>&lt;head&gt;</code> - يحتوي على البيانات الوصفية للمستند</li>
        <li><code>&lt;body&gt;</code> - يحتوي على المحتوى المرئي</li>
      </ul>
    `,
    examples: [
      {
        id: 'basic-structure',
        title: 'Basic HTML Structure',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,
        explanation: 'This example shows the basic structure of an HTML document with essential meta tags and content.',
        explanationAr: 'يوضح هذا المثال الهيكل الأساسي لمستند HTML مع العلامات الوصفية الأساسية والمحتوى.'
      },
      {
        id: 'meta-tags',
        title: 'Meta Tags Example',
        code: `<head>
    <meta charset="UTF-8">
    <meta name="description" content="Learn HTML basics">
    <meta name="keywords" content="HTML, web development, coding">
    <meta name="author" content="Your Name">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Tutorial</title>
</head>`,
        explanation: 'Meta tags provide important information about your webpage to browsers and search engines.',
        explanationAr: 'توفر العلامات الوصفية معلومات مهمة عن صفحة الويب للمتصفحات ومحركات البحث.'
      }
    ]
  },
  {
    id: 'text-elements',
    number: 2,
    title: 'Text Elements',
    titleAr: 'عناصر النص',
    description: 'Master HTML text elements and formatting',
    descriptionAr: 'إتقان عناصر النص والتنسيق في HTML',
    content: `
      <h2>Text Elements in HTML</h2>
      <p>HTML provides various elements for structuring and formatting text content. Understanding these elements is crucial for creating well-organized web pages.</p>

      <h3>Headings</h3>
      <p>HTML offers six levels of headings:</p>
      <ul>
        <li><code>&lt;h1&gt;</code> - Main heading (most important)</li>
        <li><code>&lt;h2&gt;</code> - Subheading</li>
        <li><code>&lt;h3&gt;</code> to <code>&lt;h6&gt;</code> - Lower-level headings</li>
      </ul>

      <h3>Paragraphs and Line Breaks</h3>
      <ul>
        <li><code>&lt;p&gt;</code> - Creates a paragraph</li>
        <li><code>&lt;br&gt;</code> - Adds a line break</li>
        <li><code>&lt;hr&gt;</code> - Creates a horizontal line</li>
      </ul>

      <h3>Text Formatting</h3>
      <ul>
        <li><code>&lt;strong&gt;</code> or <code>&lt;b&gt;</code> - Bold text</li>
        <li><code>&lt;em&gt;</code> or <code>&lt;i&gt;</code> - Italic text</li>
        <li><code>&lt;mark&gt;</code> - Highlighted text</li>
        <li><code>&lt;sub&gt;</code> - Subscript text</li>
        <li><code>&lt;sup&gt;</code> - Superscript text</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Use semantic elements that describe their content</li>
        <li>Maintain a clear heading hierarchy</li>
        <li>Keep paragraphs focused and concise</li>
        <li>Use appropriate formatting for emphasis</li>
      </ul>
    `,
    contentAr: `
      <h2>عناصر النص في HTML</h2>
      <p>يوفر HTML عناصر متنوعة لهيكلة وتنسيق محتوى النص. فهم هذه العناصر أمر بالغ الأهمية لإنشاء صفحات ويب منظمة جيداً.</p>

      <h3>العناوين</h3>
      <p>يقدم HTML ستة مستويات من العناوين:</p>
      <ul>
        <li><code>&lt;h1&gt;</code> - العنوان الرئيسي (الأكثر أهمية)</li>
        <li><code>&lt;h2&gt;</code> - العنوان الفرعي</li>
        <li><code>&lt;h3&gt;</code> إلى <code>&lt;h6&gt;</code> - العناوين الأقل مستوى</li>
      </ul>

      <h3>الفقرات وفواصل الأسطر</h3>
      <ul>
        <li><code>&lt;p&gt;</code> - ينشئ فقرة</li>
        <li><code>&lt;br&gt;</code> - يضيف فاصل سطر</li>
        <li><code>&lt;hr&gt;</code> - ينشئ خطاً أفقياً</li>
      </ul>

      <h3>تنسيق النص</h3>
      <ul>
        <li><code>&lt;strong&gt;</code> أو <code>&lt;b&gt;</code> - نص عريض</li>
        <li><code>&lt;em&gt;</code> أو <code>&lt;i&gt;</code> - نص مائل</li>
        <li><code>&lt;mark&gt;</code> - نص مميز</li>
        <li><code>&lt;sub&gt;</code> - نص منخفض</li>
        <li><code>&lt;sup&gt;</code> - نص مرتفع</li>
      </ul>

      <h3>أفضل الممارسات</h3>
      <ul>
        <li>استخدم العناصر الدلالية التي تصف محتواها</li>
        <li>حافظ على تسلسل هرمي واضح للعناوين</li>
        <li>اجعل الفقرات مركزة ومختصرة</li>
        <li>استخدم التنسيق المناسب للتأكيد</li>
      </ul>
    `,
    examples: [
      {
        id: 'headings-example',
        title: 'Heading Hierarchy',
        code: `<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<p>This is a paragraph under the subsection.</p>
<h2>Another Section</h2>
<p>Another paragraph here.</p>`,
        explanation: 'Proper heading hierarchy helps organize content and improves accessibility.',
        explanationAr: 'يساعد التسلسل الهرمي المناسب للعناوين في تنظيم المحتوى وتحسين إمكانية الوصول.'
      },
      {
        id: 'text-formatting-example',
        title: 'Text Formatting',
        code: `<p>This is a <strong>very important</strong> point.</p>
<p>The word "<em>emphasis</em>" is italicized.</p>
<p>You can use <mark>highlighting</mark> for emphasis.</p>
<p>Chemical formula: H<sub>2</sub>O</p>
<p>Mathematical expression: x<sup>2</sup></p>`,
        explanation: 'Different text formatting elements serve different semantic purposes.',
        explanationAr: 'تخدم عناصر تنسيق النص المختلفة أغراضاً دلالية مختلفة.'
      }
    ]
  }
];