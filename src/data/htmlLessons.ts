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
    title: 'Basic Text Elements',
    titleAr: 'عناصر النص الأساسية',
    description: 'Learn about headings, paragraphs, and text formatting',
    descriptionAr: 'تعلم عن العناوين والفقرات وتنسيق النصوص',
    content: `
      <h2>Headings</h2>
      <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. <code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading:</p>
      <code>&lt;h1&gt;This is heading 1&lt;/h1&gt;</code>
      <code>&lt;h2&gt;This is heading 2&lt;/h2&gt;</code>
      <code>&lt;h3&gt;This is heading 3&lt;/h3&gt;</code>
      
      <h2>Paragraphs</h2>
      <p>HTML paragraphs are defined with the <code>&lt;p&gt;</code> tag:</p>
      <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>

      <h2>Text Formatting</h2>
      <p>HTML contains several elements for defining text with a special meaning:</p>
      <ul>
        <li><code>&lt;b&gt;</code> - Bold text</li>
        <li><code>&lt;strong&gt;</code> - Important text</li>
        <li><code>&lt;i&gt;</code> - Italic text</li>
        <li><code>&lt;em&gt;</code> - Emphasized text</li>
        <li><code>&lt;mark&gt;</code> - Marked text</li>
        <li><code>&lt;small&gt;</code> - Smaller text</li>
        <li><code>&lt;del&gt;</code> - Deleted text</li>
        <li><code>&lt;ins&gt;</code> - Inserted text</li>
        <li><code>&lt;sub&gt;</code> - Subscript text</li>
        <li><code>&lt;sup&gt;</code> - Superscript text</li>
      </ul>`,
    contentAr: `
      <h2>العناوين</h2>
      <p>يتم تعريف عناوين HTML باستخدام العلامات <code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code>. تحدد <code>&lt;h1&gt;</code> العنوان الأكثر أهمية. تحدد <code>&lt;h6&gt;</code> العنوان الأقل أهمية:</p>
      <code>&lt;h1&gt;هذا هو العنوان 1&lt;/h1&gt;</code>
      <code>&lt;h2&gt;هذا هو العنوان 2&lt;/h2&gt;</code>
      <code>&lt;h3&gt;هذا هو العنوان 3&lt;/h3&gt;</code>
      
      <h2>الفقرات</h2>
      <p>يتم تعريف فقرات HTML باستخدام العلامة <code>&lt;p&gt;</code>:</p>
      <code>&lt;p&gt;هذه فقرة.&lt;/p&gt;</code>

      <h2>تنسيق النصوص</h2>
      <p>يحتوي HTML على عدة عناصر لتعريف النصوص بمعاني خاصة:</p>
      <ul>
        <li><code>&lt;b&gt;</code> - نص عريض</li>
        <li><code>&lt;strong&gt;</code> - نص مهم</li>
        <li><code>&lt;i&gt;</code> - نص مائل</li>
        <li><code>&lt;em&gt;</code> - نص مُشدَّد</li>
        <li><code>&lt;mark&gt;</code> - نص مُعلَّم</li>
        <li><code>&lt;small&gt;</code> - نص أصغر</li>
        <li><code>&lt;del&gt;</code> - نص محذوف</li>
        <li><code>&lt;ins&gt;</code> - نص مُدرَج</li>
        <li><code>&lt;sub&gt;</code> - نص منخفض</li>
        <li><code>&lt;sup&gt;</code> - نص مرتفع</li>
      </ul>`,
    examples: [
      {
        id: 'headings-example',
        title: 'Headings Example',
        code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
        explanation: 'Example of using different heading tags.',
        explanationAr: 'مثال على استخدام علامات العناوين المختلفة.'
      },
      {
        id: 'text-formatting-example',
        title: 'Text Formatting Example',
        code: `<p>This is <b>bold</b> text.</p>
<p>This is <strong>important</strong> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>`,
        explanation: 'Example of using text formatting tags.',
        explanationAr: 'مثال على استخدام علامات تنسيق النصوص.'
      }
    ]
  },
  {
    id: 'links-images',
    number: 3,
    title: 'Links and Images',
    titleAr: 'الروابط والصور',
    description: 'Learn how to add links and images to your web pages',
    descriptionAr: 'تعلم كيفية إضافة الروابط والصور إلى صفحات الويب الخاصة بك',
    content: `
      <h2>Links</h2>
      <p>HTML links are defined with the <code>&lt;a&gt;</code> tag:</p>
      <code>&lt;a href="https://www.example.com"&gt;This is a link&lt;/a&gt;</code>

      <h2>Images</h2>
      <p>HTML images are defined with the <code>&lt;img&gt;</code> tag. The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code>, and <code>height</code> are provided as attributes:</p>
      <code>&lt;img src="image.jpg" alt="My Image" width="500" height="300"&gt;</code>`,
    contentAr: `
      <h2>الروابط</h2>
      <p>يتم تعريف روابط HTML باستخدام العلامة <code>&lt;a&gt;</code>:</p>
      <code>&lt;a href="https://www.example.com"&gt;هذا رابط&lt;/a&gt;</code>

      <h2>الصور</h2>
      <p>يتم تعريف صور HTML باستخدام العلامة <code>&lt;img&gt;</code>. يتم توفير ملف المصدر (<code>src</code>) والنص البديل (<code>alt</code>) والعرض (<code>width</code>) والارتفاع (<code>height</code>) كصفات:</p>
      <code>&lt;img src="image.jpg" alt="صورتي" width="500" height="300"&gt;</code>`,
    examples: [
      {
        id: 'link-example',
        title: 'Link Example',
        code: `<a href="https://www.example.com">Visit Example.com</a>`,
        explanation: 'Example of creating a link to another website.',
        explanationAr: 'مثال على إنشاء رابط لموقع آخر.'
      },
      {
        id: 'image-example',
        title: 'Image Example',
        code: `<img src="https://via.placeholder.com/300" alt="Placeholder Image" width="300" height="200">`,
        explanation: 'Example of embedding an image in HTML.',
        explanationAr: 'مثال على تضمين صورة في HTML.'
      }
    ]
  },
  {
    id: 'lists-tables',
    number: 4,
    title: 'Lists and Tables',
    titleAr: 'القوائم والجداول',
    description: 'Learn how to create lists and tables to organize content',
    descriptionAr: 'تعلم كيفية إنشاء القوائم والجداول لتنظيم المحتوى',
    content: `
      <h2>Lists</h2>
      <p>HTML supports ordered (<code>&lt;ol&gt;</code>), unordered (<code>&lt;ul&gt;</code>), and description (<code>&lt;dl&gt;</code>) lists.</p>

      <h3>Unordered Lists</h3>
      <p>An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag:</p>
      <code>
        &lt;ul&gt;<br/>
        &lt;li&gt;Coffee&lt;/li&gt;<br/>
        &lt;li&gt;Tea&lt;/li&gt;<br/>
        &lt;li&gt;Milk&lt;/li&gt;<br/>
        &lt;/ul&gt;
      </code>

      <h3>Ordered Lists</h3>
      <p>An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag:</p>
      <code>
        &lt;ol&gt;<br/>
        &lt;li&gt;First item&lt;/li&gt;<br/>
        &lt;li&gt;Second item&lt;/li&gt;<br/>
        &lt;li&gt;Third item&lt;/li&gt;<br/>
        &lt;/ol&gt;
      </code>

      <h2>Tables</h2>
      <p>HTML tables are defined with the <code>&lt;table&gt;</code> tag. Table rows are defined with the <code>&lt;tr&gt;</code> tag, table headers with the <code>&lt;th&gt;</code> tag, and table data/cells with the <code>&lt;td&gt;</code> tag:</p>
      <code>
        &lt;table&gt;<br/>
        &lt;tr&gt;<br/>
        &lt;th&gt;Header 1&lt;/th&gt;<br/>
        &lt;th&gt;Header 2&lt;/th&gt;<br/>
        &lt;/tr&gt;<br/>
        &lt;tr&gt;<br/>
        &lt;td&gt;Row 1, Cell 1&lt;/td&gt;<br/>
        &lt;td&gt;Row 1, Cell 2&lt;/td&gt;<br/>
        &lt;/tr&gt;<br/>
        &lt;/table&gt;
      </code>
    `,
    contentAr: `
      <h2>القوائم</h2>
      <p>يدعم HTML القوائم المرتبة (<code>&lt;ol&gt;</code>) وغير المرتبة (<code>&lt;ul&gt;</code>) وقوائم الوصف (<code>&lt;dl&gt;</code>).</p>

      <h3>القوائم غير المرتبة</h3>
      <p>تبدأ القائمة غير المرتبة بالعلامة <code>&lt;ul&gt;</code>. تبدأ كل فقرة في القائمة بالعلامة <code>&lt;li&gt;</code>:</p>
      <code>
        &lt;ul&gt;<br/>
        &lt;li&gt;قهوة&lt;/li&gt;<br/>
        &lt;li&gt;شاي&lt;/li&gt;<br/>
        &lt;li&gt;حليب&lt;/li&gt;<br/>
        &lt;/ul&gt;
      </code>

      <h3>القوائم المرتبة</h3>
      <p>تبدأ القائمة المرتبة بالعلامة <code>&lt;ol&gt;</code>. تبدأ كل فقرة في القائمة بالعلامة <code>&lt;li&gt;</code>:</p>
      <code>
        &lt;ol&gt;<br/>
        &lt;li&gt;العنصر الأول&lt;/li&gt;<br/>
        &lt;li&gt;العنصر الثاني&lt;/li&gt;<br/>
        &lt;li&gt;العنصر الثالث&lt;/li&gt;<br/>
        &lt;/ol&gt;
      </code>

      <h2>الجداول</h2>
      <p>يتم تعريف جداول HTML باستخدام العلامة <code>&lt;table&gt;</code>. يتم تعريف صفوف الجدول باستخدام العلامة <code>&lt;tr&gt;</code>، وعناوين الجدول باستخدام العلامة <code>&lt;th&gt;</code>، وبيانات/خلايا الجدول باستخدام العلامة <code>&lt;td&gt;</code>:</p>
      <code>
        &lt;table&gt;<br/>
        &lt;tr&gt;<br/>
        &lt;th&gt;عنوان 1&lt;/th&gt;<br/>
        &lt;th&gt;عنوان 2&lt;/th&gt;<br/>
        &lt;/tr&gt;<br/>
        &lt;tr&gt;<br/>
        &lt;td&gt;الصف 1، الخلية 1&lt;/td&gt;<br/>
        &lt;td&gt;الصف 1، الخلية 2&lt;/td&gt;<br/>
        &lt;/tr&gt;<br/>
        &lt;/table&gt;
      </code>
    `,
    examples: [
      {
        id: 'unordered-list-example',
        title: 'Unordered List Example',
        code: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`,
        explanation: 'Example of creating an unordered list.',
        explanationAr: 'مثال على إنشاء قائمة غير مرتبة.'
      },
      {
        id: 'ordered-list-example',
        title: 'Ordered List Example',
        code: `<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>`,
        explanation: 'Example of creating an ordered list.',
        explanationAr: 'مثال على إنشاء قائمة مرتبة.'
      },
      {
        id: 'table-example',
        title: 'Table Example',
        code: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>30</td>
  </tr>
</table>`,
        explanation: 'Example of creating a simple table.',
        explanationAr: 'مثال على إنشاء جدول بسيط.'
      }
    ]
  },
  {
    id: 'forms-input',
    number: 5,
    title: 'Forms and Input',
    titleAr: 'النماذج والإدخال',
    description: 'Learn how to create forms and handle user input',
    descriptionAr: 'تعلم كيفية إنشاء النماذج والتعامل مع مدخلات المستخدم',
    content: `
      <h2>Forms</h2>
      <p>The HTML <code>&lt;form&gt;</code> element defines an HTML form that is used to collect user input:</p>
      <code>&lt;form&gt;...input elements...&lt;/form&gt;</code>

      <h2>Input Elements</h2>
      <p>The most important form element is the <code>&lt;input&gt;</code> element. The <code>&lt;input&gt;</code> element can be displayed in several ways, depending on the <code>type</code> attribute:</p>
      <ul>
        <li><code>&lt;input type="text"&gt;</code> - Defines a single-line text input field</li>
        <li><code>&lt;input type="password"&gt;</code> - Defines a password field</li>
        <li><code>&lt;input type="submit"&gt;</code> - Defines a submit button</li>
        <li><code>&lt;input type="radio"&gt;</code> - Defines a radio button</li>
        <li><code>&lt;input type="checkbox"&gt;</code> - Defines a checkbox</li>
      </ul>
    `,
    contentAr: `
      <h2>النماذج</h2>
      <p>يحدد عنصر HTML <code>&lt;form&gt;</code> نموذج HTML يستخدم لجمع مدخلات المستخدم:</p>
      <code>&lt;form&gt;...عناصر الإدخال...&lt;/form&gt;</code>

      <h2>عناصر الإدخال</h2>
      <p>أهم عنصر في النموذج هو العنصر <code>&lt;input&gt;</code>. يمكن عرض العنصر <code>&lt;input&gt;</code> بعدة طرق، اعتمادًا على السمة <code>type</code>:</p>
      <ul>
        <li><code>&lt;input type="text"&gt;</code> - يحدد حقل إدخال نصي بسطر واحد</li>
        <li><code>&lt;input type="password"&gt;</code> - يحدد حقل كلمة مرور</li>
        <li><code>&lt;input type="submit"&gt;</code> - يحدد زر إرسال</li>
        <li><code>&lt;input type="radio"&gt;</code> - يحدد زر اختيار</li>
        <li><code>&lt;input type="checkbox"&gt;</code> - يحدد مربع اختيار</li>
      </ul>
    `,
    examples: [
      {
        id: 'form-example',
        title: 'Basic Form Example',
        code: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`,
        explanation: 'Example of a basic form with text input fields.',
        explanationAr: 'مثال على نموذج أساسي مع حقول إدخال نصية.'
      },
      {
        id: 'input-types-example',
        title: 'Input Types Example',
        code: `<form>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="submit" value="Submit">
</form>`,
        explanation: 'Example of using different input types in a form.',
        explanationAr: 'مثال على استخدام أنواع إدخال مختلفة في نموذج.'
      }
    ]
  },
  {
    id: 'semantic-structure',
    number: 6,
    title: 'Semantic HTML',
    titleAr: 'HTML الدلالي',
    description: 'Learn how to use semantic HTML5 elements to improve page structure',
    descriptionAr: 'تعلم كيفية استخدام عناصر HTML5 الدلالية لتحسين هيكل الصفحة',
    content: `
      <h2>Semantic Elements</h2>
      <p>Semantic HTML elements clearly describe their meaning to both the browser and the developer. Examples include:</p>
      <ul>
        <li><code>&lt;article&gt;</code> - Defines an article</li>
        <li><code>&lt;aside&gt;</code> - Defines content aside from the page content</li>
        <li><code>&lt;details&gt;</code> - Defines additional details that the user can view or hide</li>
        <li><code>&lt;figcaption&gt;</code> - Defines a caption for a <code>&lt;figure&gt;</code> element</li>
        <li><code>&lt;figure&gt;</code> - Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.</li>
        <li><code>&lt;footer&gt;</code> - Defines a footer for a document or section</li>
        <li><code>&lt;header&gt;</code> - Defines a header for a document or section</li>
        <li><code>&lt;main&gt;</code> - Specifies the main content of a document</li>
        <li><code>&lt;nav&gt;</code> - Defines navigation links</li>
        <li><code>&lt;section&gt;</code> - Defines a section in a document</li>
      </ul>
    `,
    contentAr: `
      <h2>العناصر الدلالية</h2>
      <p>تصف عناصر HTML الدلالية بوضوح معناها لكل من المتصفح والمطور. تتضمن الأمثلة:</p>
      <ul>
        <li><code>&lt;article&gt;</code> - يحدد مقال</li>
        <li><code>&lt;aside&gt;</code> - يحدد محتوى جانبيًا عن محتوى الصفحة</li>
        <li><code>&lt;details&gt;</code> - يحدد تفاصيل إضافية يمكن للمستخدم عرضها أو إخفاؤها</li>
        <li><code>&lt;figcaption&gt;</code> - يحدد تسمية توضيحية لعنصر <code>&lt;figure&gt;</code></li>
        <li><code>&lt;figure&gt;</code> - يحدد محتوى مستقلاً بذاته، مثل الرسوم التوضيحية والمخططات والصور وقوائم التعليمات البرمجية وما إلى ذلك.</li>
        <li><code>&lt;footer&gt;</code> - يحدد تذييل لمستند أو قسم</li>
        <li><code>&lt;header&gt;</code> - يحدد رأس لمستند أو قسم</li>
        <li><code>&lt;main&gt;</code> - يحدد المحتوى الرئيسي للمستند</li>
        <li><code>&lt;nav&gt;</code> - يحدد روابط التنقل</li>
        <li><code>&lt;section&gt;</code> - يحدد قسمًا في مستند</li>
      </ul>
    `,
    examples: [
      {
        id: 'semantic-example',
        title: 'Semantic HTML Example',
        code: `<article>
  <header>
    <h1>Article Title</h1>
    <p>Published: <time datetime="2024-07-15">July 15, 2024</time></p>
  </header>
  <section>
    <p>This is the main content of the article.</p>
  </section>
  <footer>
    <p>Author: John Doe</p>
  </footer>
</article>`,
        explanation: 'Example of using semantic elements to structure an article.',
        explanationAr: 'مثال على استخدام العناصر الدلالية لهيكلة مقال.'
      },
      {
        id: 'nav-example',
        title: 'Navigation Example',
        code: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
        explanation: 'Example of using the nav element for navigation links.',
        explanationAr: 'مثال على استخدام عنصر nav لروابط التنقل.'
      }
    ]
  },
  {
    id: 'multimedia',
    number: 7,
    title: 'Multimedia',
    titleAr: 'الوسائط المتعددة',
    description: 'Learn how to embed images, audio, and video in HTML',
    descriptionAr: 'تعلم كيفية تضمين الصور والصوت والفيديو في HTML',
    content: `
      <h2>Images</h2>
      <p>The HTML <code>&lt;img&gt;</code> element is used to embed images in an HTML page:</p>
      <code>&lt;img src="image.jpg" alt="My Image" width="500" height="300"&gt;</code>

      <h2>Audio</h2>
      <p>The HTML <code>&lt;audio&gt;</code> element is used to embed sound content in an HTML document:</p>
      <code>
        &lt;audio controls&gt;<br/>
        &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br/>
        Your browser does not support the audio element.<br/>
        &lt;/audio&gt;
      </code>

      <h2>Video</h2>
      <p>The HTML <code>&lt;video&gt;</code> element is used to embed video content in an HTML document:</p>
      <code>
        &lt;video width="500" controls&gt;<br/>
        &lt;source src="video.mp4" type="video/mp4"&gt;<br/>
        Your browser does not support the video element.<br/>
        &lt;/video&gt;
      </code>
    `,
    contentAr: `
      <h2>الصور</h2>
      <p>يستخدم عنصر HTML <code>&lt;img&gt;</code> لتضمين الصور في صفحة HTML:</p>
      <code>&lt;img src="image.jpg" alt="صورتي" width="500" height="300"&gt;</code>

      <h2>الصوت</h2>
      <p>يستخدم عنصر HTML <code>&lt;audio&gt;</code> لتضمين محتوى صوتي في مستند HTML:</p>
      <code>
        &lt;audio controls&gt;<br/>
        &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br/>
        متصفحك لا يدعم عنصر الصوت.<br/>
        &lt;/audio&gt;
      </code>

      <h2>الفيديو</h2>
      <p>يستخدم عنصر HTML <code>&lt;video&gt;</code> لتضمين محتوى الفيديو في مستند HTML:</p>
      <code>
        &lt;video width="500" controls&gt;<br/>
        &lt;source src="video.mp4" type="video/mp4"&gt;<br/>
        متصفحك لا يدعم عنصر الفيديو.<br/>
        &lt;/video&gt;
      </code>
    `,
    examples: [
      {
        id: 'audio-example',
        title: 'Audio Example',
        code: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
        explanation: 'Example of embedding an audio file with controls.',
        explanationAr: 'مثال على تضمين ملف صوتي مع عناصر التحكم.'
      },
      {
        id: 'video-example',
        title: 'Video Example',
        code: `<video width="500" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`,
        explanation: 'Example of embedding a video file with controls.',
        explanationAr: 'مثال على تضمين ملف فيديو مع عناصر التحكم.'
      }
    ]
  },
  {
    id: 'layout-division',
    number: 8,
    title: 'Layout and Division',
    titleAr: 'التخطيط والتقسيم',
    description: 'Learn how to use div and span elements for layout and content division',
    descriptionAr: 'تعلم كيفية استخدام عناصر div و span للتخطيط وتقسيم المحتوى',
    content: `
      <h2>&lt;div&gt; Element</h2>
      <p>The <code>&lt;div&gt;</code> element is a block-level element that is often used as a container for other HTML elements. It has no required attributes, but <code>style</code> and <code>class</code> are common.</p>

      <h2>&lt;span&gt; Element</h2>
      <p>The <code>&lt;span&gt;</code> element is an inline element used to group inline elements. It has no required attributes, but <code>style</code> and <code>class</code> are common.</p>

      <h2>Example Use Cases</h2>
      <ul>
        <li>Creating sections in a webpage</li>
        <li>Grouping elements for styling</li>
        <li>Adding specific styles to parts of a text</li>
      </ul>
    `,
    contentAr: `
      <h2>عنصر &lt;div&gt;</h2>
      <p>العنصر <code>&lt;div&gt;</code> هو عنصر ذو مستوى كتلة يستخدم غالبًا كحاوية لعناصر HTML الأخرى. ليس له سمات مطلوبة، ولكن <code>style</code> و <code>class</code> شائعة.</p>

      <h2>عنصر &lt;span&gt;</h2>
      <p>العنصر <code>&lt;span&gt;</code> هو عنصر مضمن يستخدم لتجميع العناصر المضمنة. ليس له سمات مطلوبة، ولكن <code>style</code> و <code>class</code> شائعة.</p>

      <h2>أمثلة على حالات الاستخدام</h2>
      <ul>
        <li>إنشاء أقسام في صفحة ويب</li>
        <li>تجميع العناصر للتصميم</li>
        <li>إضافة أنماط محددة لأجزاء من النص</li>
      </ul>
    `,
    examples: [
      {
        id: 'div-example',
        title: 'Div Example',
        code: `<div style="background-color:lightblue;padding:20px;">
  <h2>This is a heading inside a div</h2>
  <p>This is a paragraph inside a div.</p>
</div>`,
        explanation: 'Example of using a div to create a styled container.',
        explanationAr: 'مثال على استخدام div لإنشاء حاوية ذات نمط.'
      },
      {
        id: 'span-example',
        title: 'Span Example',
        code: `<p>My favorite color is <span style="color:blue;">blue</span>.</p>`,
        explanation: 'Example of using a span to style a part of a text.',
        explanationAr: 'مثال على استخدام span لتصميم جزء من النص.'
      }
    ]
  },
  {
    id: 'best-practices-validation',
    number: 9,
    title: 'Best Practices and Validation',
    titleAr: 'أفضل الممارسات والتحقق من الصحة',
    description: 'Learn about best practices for writing HTML and validating your code',
    descriptionAr: 'تعلم عن أفضل الممارسات لكتابة HTML والتحقق من صحة التعليمات البرمجية الخاصة بك',
    content: `
      <h2>Best Practices</h2>
      <ul>
        <li>Use proper document structure</li>
        <li>Use semantic HTML elements</li>
        <li>Keep your code clean and readable</li>
        <li>Use comments to explain your code</li>
        <li>Validate your HTML to ensure it is error-free</li>
      </ul>

      <h2>HTML Validation</h2>
      <p>Validating your HTML ensures that your code is correct and follows the standards. You can use online validators like the <a href="https://validator.w3.org/">W3C Markup Validation Service</a>.</p>
    `,
    contentAr: `
      <h2>أفضل الممارسات</h2>
      <ul>
        <li>استخدم هيكل مستند مناسب</li>
        <li>استخدم عناصر HTML الدلالية</li>
        <li>حافظ على التعليمات البرمجية الخاصة بك نظيفة وقابلة للقراءة</li>
        <li>استخدم التعليقات لشرح التعليمات البرمجية الخاصة بك</li>
        <li>تحقق من صحة HTML الخاص بك للتأكد من خلوه من الأخطاء</li>
      </ul>

      <h2>التحقق من صحة HTML</h2>
      <p>يضمن التحقق من صحة HTML الخاص بك أن التعليمات البرمجية الخاصة بك صحيحة وتتبع المعايير. يمكنك استخدام أدوات التحقق عبر الإنترنت مثل <a href="https://validator.w3.org/">W3C Markup Validation Service</a>.</p>
    `,
    examples: [
      {
        id: 'validation-example',
        title: 'HTML Validation Example',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valid HTML</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is valid HTML.</p>
</body>
</html>`,
        explanation: 'This example shows a valid HTML document that passes validation.',
        explanationAr: 'يوضح هذا المثال مستند HTML صالح يجتاز التحقق.'
      }
    ]
  }
];