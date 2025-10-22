// ====== 可編輯資料（研究主題 / 成員 / 圖庫） ======
const areas = [
  { id:'dl', title:'深度學習在產業的應用', 
    desc:`參與科技部數位經濟多年期計畫以整合深度學習、大數據分析、聊天機器人與客戶關係管理系統進行以客戶為中心之精準行銷」主題已經協助多種產業導入人工智慧技術，提供行銷策略方案設計與優化客戶服務` ,
    //photo:'image/114/114AB8003_吳姿穎.jpg'
    },
  { id:'Financial', 
    title:'金融數據研究', 
    desc:`金融數據可以區分為量化的股價資料，以及質化的新聞與各類產業報告本研究室致力於不同領域問題透過深度學習技術，提出不同的解決方案目前有科技部產學，與產業合作開發創新的技術也有大專生科技部計畫 透過各種金融研究方法，分析公司與產業狀況前景例如:強化式學習建構適性化理財機器人模型。` },
  { id:'ai', 
    title:'AI 應用在電子商務產業', 
    desc:`隨著電子商務平台成為顧客消費的主要管道，各公司擁有大量的使用者行為資料包含網頁端各類瀏覽行為的收集、購買產品的消費紀錄，甚至廣告投放的成效這些大量且多樣化的消費者資訊，無法用傳統行銷分析手段分析客戶以提出行銷策略協助產業依照不同行銷需求導入AI技術，目前已有多家廠商合作與成果。`},
  /*{ id:'edge', title:'邊緣運算', desc:`量化、蒸餾與硬體加速，在 Jetson/ARM 上即時推論。` },
  { id:'analog', title:'類比/混合訊號', desc:`CTLE/VGA/SAR-ADC 等電路設計與後模擬整合。` }*/
];

// 提供一組範例（請依需要替換/擴充）
const members = [
  {
    name:'鄭麗珍', role:'faculty', roleLabel:'教授',
    tags:['Machine learning', 'FinTech',' AI in E marketing','Opinion mining','Business Intelligence', 'Social Computing'],
    photo:'image/老師.jpg', 
    thumb:'LC',
    bio:`目前是管理學院 學術副院長與IMBA 主任
    目前的研究主要致力於將各種深度學習或是人工智慧的技術應用於解決產業實務的問題，包含知識圖譜、LLM 於產業應用、異常行為偵測(虛假資訊、網路攻擊)、數位行銷分析、數位金融的研究、輿情與社群分析等。
    近年致力於老年促進健康相關議題，陸續跟長庚醫院、萬芳醫院醫生共同合作相關研究，將人工智慧相關創新技術協助改善老年健康生活。`,
    works:[
      'Decision Support Systems(SCI)、 Information Processing & Manageme (SSCI)、Decision Sciences(SSCI) 、Electronic Commerce Research and Applications (SSCI) 、Electronic Commerce Research(SSCI) 、Journal of Medical Internet Research (SCI)等知名期刊，其他還有TSSCI與EI',
      '學術服務部分，擔任國科會計畫審查委員，國際上是資管重要期刊Electronic Commerce Research and Applications (SSCI) 的Associate Editor。此外，也擔任多個SSCI/SCI/TSSCI/EI 學術期刊的論文審查委員，或是研討位的議程委員跟主席。',
      '目前教授課程為 金融服務創新、網路行銷與資料分析、系統分析與設計、研究方法、行銷管理、金融科技與人工智慧應用等。'
    ]
  },
  {
    name:'吳姿穎', role:'ms', roleLabel:'碩一生',
    tags:['資料庫','財務分析'],
    photo:'image/114/114AB8003_吳姿穎.jpg', 
    thumb:'YT',
    bio:'我畢業於北科大資訊與財金管理系，因實習接觸資料庫而培養了資料處理能力。平時熱衷於研究股票、關注市場趨勢，也喜歡透過旅遊拓展視野。期望在研究所期間精進資料分析並結合財務應用，持續培養跨域整合能力。',
    works:['MAIL：t114ab8003@ntut.org.tw']
  },
  {
    name:'林千惠', role:'ms', roleLabel:'碩一生',
    tags:['前端(Vue.js)','後端(Spring Boot)'],
    photo:'image/114/114AB8041_林千惠.jpg', 
    thumb:'YT',
    bio:'我畢業於北科資財，高中時是網頁選手，大學在精誠實習，對於系統開發比較了解。喜歡出國旅遊、追星、投資，人生目標是財富自由，歡迎跟我討論投資相關議題。',
    works:['MAIL：t114ab8041@ntut.org.tw']
  },
  {
    name:'李泓泯', role:'ms', roleLabel:'碩一生',
    tags:['Python','Java','React','Vue.js','Spring Boot','Django','Flask','CNN','IoT','Linux 系統'],
    photo:'image/114/114AB8042_李泓泯.png', 
    thumb:'YT',
    bio:`我畢業於北商大資管系，大家都叫我「李董」（這個綽號是高中時隨便取的）。
    我的興趣是打羽球、打遊戲，還有「打程式」——程式就是我的武器。從高中當選手就一路寫到現在，我都用它來做各種有趣甚至有點奇怪的事。
    有時候做事的時候，我會偷偷在「卷」，你永遠想不到我下一步會出什麼招。
    我現在最大的願望，就是希望能把英文學好。`,
    works:['MAIL：t114ab8042@ntut.org.tw']
  },
  {
    name:'林承玄', role:'ms', roleLabel:'碩一生',
    tags:['程式設計'],
    photo:'image/114/114ab8048_林承玄.jpg', 
    thumb:'YT',
    bio:`我畢業於聯合大學資管系。我對人工智慧、資料分析以及人機互動相關的應用很有興趣，特別喜歡嘗試新技術與應用。課餘時間喜歡打遊戲、看小說。`,
    works:['MAIL：t114ab8048@ntut.org.tw']
  },
  {
    name:'葉千熏', role:'ms', roleLabel:'碩一生',
    tags:['前端設計','前端工程'],
    photo:'image/114/114AB8050_葉千熏.jpg', 
    thumb:'YT',
    bio:`我的名字念很快發音會很像煙燻，所以可以叫我煙燻或燻雞。對AI領域很有興趣，曾在國家實驗研究院科政中心做資料處理與分析。興趣是唱歌、運動(但不喜歡跑步)、去海邊看夕陽、旅遊、看有關醫學的懸疑小說。`,
    works:['MAIL：t114ab8050@ntut.org.tw']
  },
  {
    name:'呂芯穎', role:'ms', roleLabel:'碩一生',
    tags:['前端設計','Python','系統分析'],
    photo:'image/114/114EP8002_呂芯穎.jpg', 
    thumb:'YT',
    bio:`我畢業於中原大學資管系，對大數據和人工智慧有興趣，也有做過相關專題。
大學時比較擅長系統分析，平常的興趣是攝影、運動、拼樂高、看貓咪吃飯。
如果找不到人去寵物展可以找我一起去！！`,
    works:['MAIL：t114EP8002@ntut.org.tw']
  },
  {
    name:'賴泓瑋', role:'ms', roleLabel:'碩一生',
    tags:['Python','Flask框架應用','XGBoost','Adaboost','資料結構'],
    photo:'image/114/114EP8012_賴泓瑋.jpg', 
    thumb:'YT',
    bio:`我畢業於中科大商經系，對人工智慧與數據分析感興趣
大學也做過相關領域之專題，平常的興趣是聽音樂、追劇，烹飪、
烘培。是個想聊天但不敢先開口的I人。`,
    works:['MAIL：t114EP8012@ntut.org.tw']
  },
  {
    name:'黃聖瑋', role:'ms', roleLabel:'碩一生',
    tags:['C++','Java','Android'],
    photo:'image/114/114EP8012_賴泓瑋.jpg', 
    thumb:'YT',
    bio:`我畢業於聯合大學資訊管理學系，對深度學習的應用有興趣，大學專題是做系統開發和人工智慧相關，興趣是打電動，彈吉他，鋼琴。是個活網仔，很愛講屁話，什麼都可以聊，最近想學習投資和coding，目標是趕快財富自由`,
    works:['MAIL：t114ep8024@ntut.org.tw']
  },
  {
    name:'鄭淮源', role:'ms', roleLabel:'碩一生',
    tags:['C++程式設計','資料結構','英文'],
    photo:'image/114/114EP8023_鄭淮源.JPG', 
    thumb:'YT',
    bio:'我畢業於中正大學資工系,雖然是資工系不過因為考研的關係其實coding並不強,大學的專題是做關於RNN的油畫模型輔助工具,平常的興趣是健身,看英文小說跟外國人文化交流,投資小白,最近也參加了北科的投資理財社哈哈哈',
    works:['MAIL：t114EP8023@ntut.org.tw']
  }
  /*
  {
    name:'博士', role:'phd', roleLabel:'博士生',
    tags:['多模態','視覺語言','C++'],
    photo:'image/114/114AB8003_吳姿穎.jpg', 
    thumb:'YT',
    bio:'多模態檢索與臨床語意對齊，著重於報告生成與視覺問答。',
    works:['ReportGrounder (TMI 2024)','RAG for PACS (2025, under review)']
  }*/
];

const gallery = [
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091012184-7c54cfe22320?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop'
];

// ====== 小工具 ======
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const initials = (name='') => (name.trim().slice(0,2) || '').toUpperCase();

// ====== 研究主題卡片 ======
const areaGrid = () => document.getElementById('areaGrid');
function renderAreas(filter='all'){
  const grid = areaGrid();
  if(!grid) return;
  grid.innerHTML = '';

  const pool = filter==='all' ? areas : areas.filter(a => a.id === filter);
  pool.forEach(a => {
    const card = document.createElement('article');
    card.className = 'member-card reveal area-card';

    const thumbHtml = a.photo
      ? `<img src="${a.photo}" alt="${a.title} 示意圖" loading="lazy" decoding="async">`
      : `<div class="area-fallback">${a.title}</div>`;

    card.innerHTML = `
      <div class="member-thumb area-thumb">
        ${thumbHtml}
      </div>
      <div class="member-body area-body">
        <h3 class="area-title">${a.title}</h3>
        <div class="role">#${a.id}</div>
        <p class="area-desc">${a.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  observeReveal();
}



// ====== 成員渲染 / Modal ======
const memberGrid = () => document.getElementById('memberGrid');
const search = () => document.getElementById('search');
const modal = () => document.getElementById('memberModal');
const modalClose = () => document.getElementById('modalClose');
const modalFields = {
  avatar: () => $('#modalAvatar'),
  name: () => $('#modalName'),
  role: () => $('#modalRole'),
  tags: () => $('#modalTags'),
  bio: () => $('#modalBio'),
  works: () => $('#modalWorks')
};

let roleFilter = 'all';

function makeMemberCard(m, i){
  const card = document.createElement('article');
  card.className = 'member-card reveal';
  card.setAttribute('tabindex','0');
  card.setAttribute('role','button');
  card.dataset.index = i;

  // 縮圖容器
  const thumb = document.createElement('div');
  thumb.className = 'member-thumb';

  if(m.photo){
    const img = new Image();
    img.src = m.photo;
    img.alt = `${m.name || ''} 的照片`;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => {
      thumb.textContent = m.thumb || initials(m.name);
    });
    thumb.appendChild(img);
  }else{
    thumb.textContent = m.thumb || initials(m.name);
  }

  // 文字內容
  const body = document.createElement('div');
  body.className = 'member-body';
  body.innerHTML = `
    <div class="role">${m.roleLabel || ''}</div>
    <h3 style="margin:.2rem 0 .4rem">${m.name || ''}</h3>
    <div class="tags">${(m.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
  `;

  // 互動
  card.addEventListener('click', ()=> openModal(m));
  card.addEventListener('keypress', (e)=>{ if(e.key==='Enter') openModal(m); });
  card.addEventListener('mousemove', (e)=> tiltCard(e, card));
  card.addEventListener('mouseleave', ()=> card.style.transform = 'translateY(-0px)');

  card.appendChild(thumb);
  card.appendChild(body);
  return card;
}

function renderMembers(){
  const q = (search() && search().value ? search().value.trim().toLowerCase() : '');
  const grid = memberGrid();
  if(!grid) return;
  grid.innerHTML = '';

  members
    .filter(m=>{
      const rolePass = roleFilter==='all' || m.role===roleFilter;
      const text = `${m.name||''} ${m.roleLabel||''} ${(m.tags||[]).join(' ')} ${m.bio||''}`.toLowerCase();
      const searchPass = !q || text.includes(q);
      return rolePass && searchPass;
    })
    .forEach((m,i)=> grid.appendChild(makeMemberCard(m,i)));

  observeReveal();
}

function openModal(m){
  const ava = modalFields.avatar();
  if(ava){
    ava.innerHTML = m.photo
      ? `<img src="${m.photo}" alt="${m.name||''} 的照片" decoding="async">`
      : '';
  }
  modalFields.name().textContent = m.name || '';
  modalFields.role().textContent = m.roleLabel || '';
  modalFields.tags().innerHTML = (m.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('');
  modalFields.bio().textContent = m.bio || '';
  modalFields.works().innerHTML = (m.works||[]).map(w=>`<li>${w}</li>`).join('');
  modal().classList.add('open');
  modal().setAttribute('aria-hidden','false');
}
function closeModal(){ modal().classList.remove('open'); modal().setAttribute('aria-hidden','true'); }

function tiltCard(e, el){
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5;
  const y = (e.clientY - r.top) / r.height - .5;
  const rx = (y * -6).toFixed(2);
  const ry = (x * 6).toFixed(2);
  el.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
}

// ====== 圖庫 ======
function renderGallery(){
  const g = document.getElementById('galleryGrid');
  if(!g) return;
  g.innerHTML = '';
  gallery.forEach(src=>{
    const a = document.createElement('a'); a.href = src; a.target = '_blank'; a.rel='noopener';
    const img = document.createElement('img'); img.src = src; img.alt = 'Lab gallery photo'; img.loading='lazy'; img.decoding='async';
    a.appendChild(img); g.appendChild(a);
  });
}

// ====== 統計數字動畫 ======
function countUp(el){
  const end = +el.dataset.count || 0; let cur = 0; const dur = 850; const t0 = performance.now();
  function step(t){
    const p = Math.min(1, (t - t0)/dur);
    cur = Math.floor(end * (0.2 + 0.8*p*p));
    el.textContent = cur.toLocaleString();
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ====== Intersection Observer：reveal / counter ======
let io;
function observeReveal(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(el=> el.classList.add('on')); return;
  }
  if(io) io.disconnect();
  io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: .1 });
  $$('.reveal').forEach(el=> io.observe(el));

  const io2 = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ countUp(e.target); io2.unobserve(e.target);} });
  }, { threshold: .5 });
  $$('.stat .num').forEach(el=> io2.observe(el));
}

// ====== 導覽列：active / 平滑捲動 ======
function initNav(){
  const links = $$('.menu a');
  links.forEach(a=> a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){ e.preventDefault(); document.querySelector(href).scrollIntoView({ behavior:'smooth', block:'start' }); }
  }));
  const sections = ['#about','#research','#members','#gallery','#contact'].map(id=> $(id));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(a=> a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id));
      }
    })
  }, { rootMargin: '-40% 0px -50% 0px', threshold:.01 });
  sections.forEach(s=> s && io.observe(s));
}

// ====== 主題切換 ======
function initTheme(){
  const key = 'lab-theme';
  const saved = localStorage.getItem(key);
  if(saved==='light') document.documentElement.classList.add('theme-light');
  const btn = $('#toggleTheme');
  if(btn){
    btn.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('theme-light');
      localStorage.setItem(key, document.documentElement.classList.contains('theme-light')? 'light':'dark');
    });
  }
}

// ====== 角色/主題 篩選按鈕 ======
function initFilters(){
  // 研究主題
  $$('#research .filter-btn').forEach(btn=> btn.addEventListener('click', ()=>{
    $$('#research .filter-btn').forEach(b=> b.classList.remove('active'));
    btn.classList.add('active');
    renderAreas(btn.dataset.area);
  }));
  // 成員
  $$('#members .filter-btn').forEach(btn=> btn.addEventListener('click', ()=>{
    $$('#members .filter-btn').forEach(b=> b.classList.remove('active'));
    btn.classList.add('active');
    roleFilter = btn.dataset.role; renderMembers();
  }));
}

// ====== Hero Canvas 金色線條 ======
function initHeroCanvas(){
  const c = document.getElementById('heroCanvas');
  if(!c) return;
  const ctx = c.getContext('2d');
  let w, h, raf; const DPR = Math.min(2, window.devicePixelRatio || 1);
  const lines = [];
  function resize(){ w = c.width = innerWidth * DPR; h = c.height = innerHeight * DPR; c.style.width = innerWidth+'px'; c.style.height = innerHeight+'px'; }
  window.addEventListener('resize', resize, { passive:true }); resize();
  const N = 36;
  for(let i=0;i<N;i++){
    lines.push({
      x: Math.random()*w,
      y: Math.random()*h,
      len: 120 + Math.random()*260,
      ang: Math.random()*Math.PI*2,
      sp: .25 + Math.random()*1.1,
      w: 1 + Math.random()*2
    });
  }
  function loop(){
    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation = 'lighter';
    for(const L of lines){
      const gx = Math.cos(L.ang)*L.len, gy = Math.sin(L.ang)*L.len;
      const x2 = L.x + gx, y2 = L.y + gy;
      const grad = ctx.createLinearGradient(L.x, L.y, x2, y2);
      grad.addColorStop(0, 'rgba(156,121,69,0)');
      grad.addColorStop(.5, 'rgba(156,121,69,.22)');
      grad.addColorStop(1, 'rgba(194,165,114,.0)');
      ctx.strokeStyle = grad; ctx.lineWidth = L.w * DPR; ctx.beginPath(); ctx.moveTo(L.x, L.y); ctx.lineTo(x2, y2); ctx.stroke();
      L.x += Math.cos(L.ang)*L.sp; L.y += Math.sin(L.ang)*L.sp;
      if(L.x< -50 || L.x> w+50 || L.y< -50 || L.y> h+50){ L.x = (L.x + w + 100) % (w+100); L.y = (L.y + h + 100) % (h+100); }
      L.ang += (Math.random()-.5)*.02;
    }
    raf = requestAnimationFrame(loop);
  }
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){ loop(); }
  return ()=> cancelAnimationFrame(raf);
}

// ====== 初始化 ======
(function main(){
  const yearEl = document.getElementById('y');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  initTheme();
  initNav();
  initFilters();
  renderAreas();
  renderMembers();
  renderGallery();
  observeReveal();
  initHeroCanvas();
  // modal close events
  const mClose = modalClose();
  if(mClose) mClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
  const m = modal();
  if(m) m.addEventListener('click', (e)=>{ if(e.target===m) closeModal(); });
  // search events
  const s = search();
  if(s) s.addEventListener('input', ()=> renderMembers());
})();
