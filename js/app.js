// ====== 可編輯資料（研究主題 / 成員 / 圖庫） ======
const areas = [
  { id:'cv', title:'電腦視覺', desc:'自監督學習、目標檢測、追蹤與多模態理解。' , photo:'image/114/114AB8003_吳姿穎.jpg'},
  { id:'med', title:'醫學影像', desc:'核醫/CT/MRI 影像處理、輔助診斷、模型壓縮與部署。' },
  { id:'robot', title:'機器人/自駕', desc:'感測器融合、SLAM、路徑規劃與行為決策。' },
  { id:'edge', title:'邊緣運算', desc:'量化、蒸餾與硬體加速，在 Jetson/ARM 上即時推論。' },
  { id:'analog', title:'類比/混合訊號', desc:'CTLE/VGA/SAR-ADC 等電路設計與後模擬整合。' }
];

// 提供一組範例（請依需要替換/擴充）
const members = [
  {
    name:'林柏蒼', role:'faculty', roleLabel:'助理教授',
    tags:['醫學影像','自監督','Python'],
    // photo:'image/members/lin.jpg', // 有照片時打開這行
    thumb:'LC',
    bio:`伊利諾大學香檳分校電腦科學博士。研究興趣包含醫學影像 AI、弱標註學習與系統化實驗框架。課程：深度學習、影像處理。`,
    works:[
      'Med-Track: End-to-end Medical Imaging Toolkit (2025)',
      'Self-supervised Lesion Representation (MICCAI 2024)'
    ]
  },
  {
    name:'張語庭', role:'phd', roleLabel:'博士生',
    tags:['多模態','視覺語言','C++'],
    photo:'image/114/114AB8003_吳姿穎.jpg', // 建議使用英數路徑
    thumb:'YT',
    bio:'多模態檢索與臨床語意對齊，著重於報告生成與視覺問答。',
    works:['ReportGrounder (TMI 2024)','RAG for PACS (2025, under review)']
  }
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
