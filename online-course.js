/* Online course content. Confirmed case studies can be added to courseCases. */
const courseCases = [];
const courseTiers = [
  {id:'self',name:'Я сама',price:'14 990 ₽',duration:'Самостоятельно',description:'Самостоятельное изучение материалов курса.',items:['Без сопровождения и проверки заданий.','Самостоятельное изучение.','Методички и документы.','Готовая программа и онлайн-теория.','Диплом педагога ногтевого сервиса.']},
  {id:'together',name:'Вместе',price:'58 000 ₽',duration:'2 месяца с поддержкой',description:'Два месяца обучения с моей поддержкой.',items:['Проверка домашних заданий и разборы.','Групповые видеосозвоны.','Готовая программа и онлайн-теория.','Комплект документов для обучения.','Оформление документов выпускникам через лицензированный центр.','Контент-план на 6 месяцев и нейросети.','Подготовка первого обучения.','Диплом педагога ногтевого сервиса.'],practice:'Итоговая практика — провести обучение ученика.'},
  {id:'school',name:'Школа под ключ',price:'200 000 ₽',duration:'3 месяца индивидуально',description:'Три месяца на запуск своей школы.',items:['Всё, что входит в тариф «Вместе».','Индивидуальные созвоны.','Финансовая модель и план оснащения.','Организация и продвижение школы.','Создание собственного сайта.','Подключение чат-ботов.','Настройка воронки продаж.','Подключение оплаты.','Диплом педагога ногтевого сервиса.']}
];
const escapeCourse = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const courseMessage = () => 'https://t.me/Olion_Art_Instructor_bot';
const courseLink = (label,tier='',classes='') => `<a class="btn ${classes}" href="${courseMessage(tier)}" target="_self" rel="noopener" data-course-contact="${escapeCourse(tier||'question')}">${escapeCourse(label)}</a>`;
const renderCourseCases = () => courseCases.length ? `<section class="wrap course-cases" id="cases"><div class="course-heading"><span class="eyebrow">ОПЫТ УЧЕНИЦ</span><h2>Результаты учениц</h2></div><div class="course-case-grid">${courseCases.map(c=>`<article><h3>${escapeCourse(c.name)}</h3><dl><dt>С чем пришла</dt><dd>${escapeCourse(c.before)}</dd><dt>Что сделала</dt><dd>${escapeCourse(c.action)}</dd><dt>Результат</dt><dd>${escapeCourse(c.result)}</dd></dl>${c.image?`<img src="${escapeCourse(c.image)}" loading="lazy" alt="${escapeCourse(c.alt)}">`:''}</article>`).join('')}</div></section>` : '';
window.renderOnlineCourse = () => `<div class="online-landing">
<section class="wrap course-hero">
  <div class="course-hero-copy"><span class="eyebrow">OLION ART PROFESSIONAL · ОНЛАЙН</span><h1>Ты умеешь делать.<br><em>Научись преподавать.</em></h1><p class="course-subtitle">Онлайн-курс для практикующих мастеров маникюра.</p><p class="course-intro">Собери программу, подготовь документы и обучи своего ученика.</p><div class="actions"><a class="btn" href="#packages" data-course-scroll="hero">Выбрать тариф</a>${courseLink('Задать вопрос','','outline')}</div><div class="course-starts"><span>Даты старта</span><div><time datetime="2026-11-01">1 ноября 2026</time><time datetime="2027-01-10">10 января 2027</time></div></div><p class="course-access">Доступ к материалам каждого тарифа — без ограничения по времени.</p></div>
  <figure class="course-hero-photo"><img src="./olga-portrait.jpg" width="864" height="1536" alt="Ольга Богданова — преподаватель Olion Art Professional"><figcaption><strong>Ольга Богданова</strong><span>Мастер · преподаватель · основатель бренда</span></figcaption></figure>
</section>
<section class="course-program-surface" id="program"><div class="wrap course-program"><div class="course-heading"><span class="eyebrow">ОТ ОПЫТА К ПРЕПОДАВАНИЮ</span><h2>Что нужно,<br><em>чтобы начать обучать</em></h2></div><div><ol class="course-program-list">${['Составить программу занятий.','Объяснять технику и вести практику.','Подготовить документы.','Рассчитать расходы и оснащение.','Привлекать учеников.'].map((x,i)=>`<li><span>0${i+1}</span><p>${x}</p></li>`).join('')}</ol><p class="course-note">Объём поддержки и дополнительные услуги зависят от выбранного тарифа.</p></div></div></section>
<section class="wrap course-packages" id="packages"><div class="course-heading course-packages-heading"><div><span class="eyebrow">ТРИ ТАРИФА ОБУЧЕНИЯ</span><h2>Выбери, с какой<br><em>поддержкой идти.</em></h2></div><p>Выбери свой уровень поддержки.</p></div><div class="course-tier-grid">${courseTiers.map(t=>`<article class="course-tier ${t.id==='together'?'course-tier-focus':''}" data-tier-card="${t.id}">${t.id==='together'?'<span class="course-tier-marker">С ПОДДЕРЖКОЙ ОЛЬГИ</span>':''}<span class="course-tier-duration">${t.duration}</span><h3>${t.name}</h3><p class="course-tier-price">${t.price}</p><p class="course-tier-description">${t.description}</p><ul>${t.items.map(x=>`<li>${x}</li>`).join('')}</ul>${t.practice?`<p class="course-practice">${t.practice}</p>`:''}<div class="course-tier-bottom"><p class="course-tier-access">Бессрочный доступ к материалам</p>${courseLink(`Выбрать «${t.name}»`,t.name,t.id==='together'?'':'outline')}</div></article>`).join('')}</div><p class="course-note course-package-note">Диплом — после аттестации. Доступ к материалам всех тарифов бессрочный.</p><p class="course-contact-note">Запись и оплата — через Telegram.</p></section>
<section class="course-about-surface" id="teacher"><div class="wrap course-about"><figure><img src="./olga-portrait.jpg" width="1152" height="2048" loading="lazy" alt="Портрет Ольги Богдановой"></figure><div><span class="eyebrow">О ПРЕПОДАВАТЕЛЕ</span><h2>Ольга Богданова</h2><p class="course-about-role">Мастер, преподаватель и основатель Olion Art Professional.</p><p>От мастера — к преподаванию и своему бренду.</p><p>Помогаю собрать курс и начать обучать.</p></div></div></section>
${renderCourseCases()}
<section class="wrap"><div class="course-final"><span class="eyebrow">ТВОЙ СЛЕДУЮЩИЙ ШАГ</span><h2>Преподавание —<br>отдельный навык.<br><em>Освой его.</em></h2><p>Преврати свой опыт в программу для учеников.</p><div class="actions"><a class="btn" href="#packages" data-course-scroll="final">Выбрать тариф</a>${courseLink('Обсудить подходящий тариф','','outline')}</div><div class="course-final-starts"><time datetime="2026-11-01">Старт 1 ноября 2026</time><span>или</span><time datetime="2027-01-10">10 января 2027</time></div></div></section>
</div>`;
/* Analytics integration: only real clicks are emitted. A Telegram click is NOT a sent application.
   Configure your analytics tag separately to collect these events across visitors.
   tariff_select: chosen tariff; messenger_open: outbound contact link; tariff_section_open: anchor CTA.
   request_sent must only be emitted by a future confirmed form/bot integration. */
function trackCourseEvent(event,details={}) {
  window.dataLayer=window.dataLayer||[];
  const payload={event,...details};
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent('olion:analytics',{detail:payload}));
  if(typeof window.gtag==='function') window.gtag('event',event,details);
}
document.addEventListener('click',e=>{
  const contact=e.target.closest('[data-course-contact]');
  if(contact){const tariff=contact.dataset.courseContact; if(tariff!=='question')trackCourseEvent('tariff_select',{tariff});trackCourseEvent('messenger_open',{tariff:tariff==='question'?'':tariff,channel:'telegram'});}
  const anchor=e.target.closest('[data-course-scroll]');
  if(anchor)trackCourseEvent('tariff_section_open',{placement:anchor.dataset.courseScroll});
});
