// =============== 元素与布局（周期表） ===============
const ELEMENTS = [
  {sym:'H', name:'Hydrogen', row:1, col:1},{sym:'He', name:'Helium', row:1, col:18},
  {sym:'Li', name:'Lithium', row:2, col:1},{sym:'Be', name:'Beryllium', row:2, col:2},
  {sym:'B', name:'Boron', row:2, col:13},{sym:'C', name:'Carbon', row:2, col:14},
  {sym:'N', name:'Nitrogen', row:2, col:15},{sym:'O', name:'Oxygen', row:2, col:16},
  {sym:'F', name:'Fluorine', row:2, col:17},{sym:'Ne', name:'Neon', row:2, col:18},
  {sym:'Na', name:'Sodium', row:3, col:1},{sym:'Mg', name:'Magnesium', row:3, col:2},
  {sym:'Al', name:'Aluminium', row:3, col:13},{sym:'Si', name:'Silicon', row:3, col:14},
  {sym:'P', name:'Phosphorus', row:3, col:15},{sym:'S', name:'Sulfur', row:3, col:16},
  {sym:'Cl', name:'Chlorine', row:3, col:17},{sym:'Ar', name:'Argon', row:3, col:18},
  {sym:'K', name:'Potassium', row:4, col:1},{sym:'Ca', name:'Calcium', row:4, col:2},
  {sym:'Sc', name:'Scandium', row:4, col:3},{sym:'Ti', name:'Titanium', row:4, col:4},
  {sym:'V', name:'Vanadium', row:4, col:5},{sym:'Cr', name:'Chromium', row:4, col:6},
  {sym:'Mn', name:'Manganese', row:4, col:7},{sym:'Fe', name:'Iron', row:4, col:8},
  {sym:'Co', name:'Cobalt', row:4, col:9},{sym:'Ni', name:'Nickel', row:4, col:10},
  {sym:'Cu', name:'Copper', row:4, col:11},{sym:'Zn', name:'Zinc', row:4, col:12},
  {sym:'Ga', name:'Gallium', row:4, col:13},{sym:'Ge', name:'Germanium', row:4, col:14},
  {sym:'As', name:'Arsenic', row:4, col:15},{sym:'Se', name:'Selenium', row:4, col:16},
  {sym:'Br', name:'Bromine', row:4, col:17},{sym:'Kr', name:'Krypton', row:4, col:18},
  {sym:'Rb', name:'Rubidium', row:5, col:1},{sym:'Sr', name:'Strontium', row:5, col:2},
  {sym:'Y', name:'Yttrium', row:5, col:3},{sym:'Zr', name:'Zirconium', row:5, col:4},
  {sym:'Nb', name:'Niobium', row:5, col:5},{sym:'Mo', name:'Molybdenum', row:5, col:6},
  {sym:'Tc', name:'Technetium', row:5, col:7},{sym:'Ru', name:'Ruthenium', row:5, col:8},
  {sym:'Rh', name:'Rhodium', row:5, col:9},{sym:'Pd', name:'Palladium', row:5, col:10},
  {sym:'Ag', name:'Silver', row:5, col:11},{sym:'Cd', name:'Cadmium', row:5, col:12},
  {sym:'In', name:'Indium', row:5, col:13},{sym:'Sn', name:'Tin', row:5, col:14},
  {sym:'Sb', name:'Antimony', row:5, col:15},{sym:'Te', name:'Tellurium', row:5, col:16},
  {sym:'I', name:'Iodine', row:5, col:17},{sym:'Xe', name:'Xenon', row:5, col:18},
  {sym:'Cs', name:'Cesium', row:6, col:1},{sym:'Ba', name:'Barium', row:6, col:2},
  {sym:'La*', name:'Lanthanides', row:6, col:3, placeholder:true, lnmark:true},
  {sym:'Hf', name:'Hafnium', row:6, col:4},{sym:'Ta', name:'Tantalum', row:6, col:5},
  {sym:'W', name:'Tungsten', row:6, col:6},{sym:'Re', name:'Rhenium', row:6, col:7},
  {sym:'Os', name:'Osmium', row:6, col:8},{sym:'Ir', name:'Iridium', row:6, col:9},
  {sym:'Pt', name:'Platinum', row:6, col:10},{sym:'Au', name:'Gold', row:6, col:11},
  {sym:'Hg', name:'Mercury', row:6, col:12},{sym:'Tl', name:'Thallium', row:6, col:13},
  {sym:'Pb', name:'Lead', row:6, col:14},{sym:'Bi', name:'Bismuth', row:6, col:15},
  {sym:'Po', name:'Polonium', row:6, col:16},{sym:'At', name:'Astatine', row:6, col:17},
  {sym:'Rn', name:'Radon', row:6, col:18},
  {sym:'Fr', name:'Francium', row:7, col:1},{sym:'Ra', name:'Radium', row:7, col:2},
  {sym:'Ac**', name:'Actinides', row:7, col:3, placeholder:true, anmark:true},
  {sym:'Rf', name:'Rutherfordium', row:7, col:4},{sym:'Db', name:'Dubnium', row:7, col:5},
  {sym:'Sg', name:'Seaborgium', row:7, col:6},{sym:'Bh', name:'Bohrium', row:7, col:7},
  {sym:'Hs', name:'Hassium', row:7, col:8},{sym:'Mt', name:'Meitnerium', row:7, col:9},
  {sym:'Ds', name:'Darmstadtium', row:7, col:10},{sym:'Rg', name:'Roentgenium', row:7, col:11},
  {sym:'Cn', name:'Copernicium', row:7, col:12},{sym:'Nh', name:'Nihonium', row:7, col:13},
  {sym:'Fl', name:'Flerovium', row:7, col:14},{sym:'Mc', name:'Moscovium', row:7, col:15},
  {sym:'Lv', name:'Livermorium', row:7, col:16},{sym:'Ts', name:'Tennessine', row:7, col:17},
  {sym:'Og', name:'Oganesson', row:7, col:18},
  {sym:'La', name:'Lanthanum', row:9, col:4},{sym:'Ce', name:'Cerium', row:9, col:5},
  {sym:'Pr', name:'Praseodymium', row:9, col:6},{sym:'Nd', name:'Neodymium', row:9, col:7},
  {sym:'Pm', name:'Promethium', row:9, col:8},{sym:'Sm', name:'Samarium', row:9, col:9},
  {sym:'Eu', name:'Europium', row:9, col:10},{sym:'Gd', name:'Gadolinium', row:9, col:11},
  {sym:'Tb', name:'Terbium', row:9, col:12},{sym:'Dy', name:'Dysprosium', row:9, col:13},
  {sym:'Ho', name:'Holmium', row:9, col:14},{sym:'Er', name:'Erbium', row:9, col:15},
  {sym:'Tm', name:'Thulium', row:9, col:16},{sym:'Yb', name:'Ytterbium', row:9, col:17},
  {sym:'Lu', name:'Lutetium', row:9, col:18},
  {sym:'Ac', name:'Actinium', row:10, col:4},{sym:'Th', name:'Thorium', row:10, col:5},
  {sym:'Pa', name:'Protactinium', row:10, col:6},{sym:'U', name:'Uranium', row:10, col:7},
  {sym:'Np', name:'Neptunium', row:10, col:8},{sym:'Pu', name:'Plutonium', row:10, col:9},
  {sym:'Am', name:'Americium', row:10, col:10},{sym:'Cm', name:'Curium', row:10, col:11},
  {sym:'Bk', name:'Berkelium', row:10, col:12},{sym:'Cf', name:'Californium', row:10, col:13},
  {sym:'Es', name:'Einsteinium', row:10, col:14},{sym:'Fm', name:'Fermium', row:10, col:15},
  {sym:'Md', name:'Mendelevium', row:10, col:16},{sym:'No', name:'Nobelium', row:10, col:17},
  {sym:'Lr', name:'Lawrencium', row:10, col:18},
];
const VALID_SYMBOLS = new Set(ELEMENTS.map(e => e.sym).filter(s => /^[A-Z][a-z]?$/.test(s)));

let selected = [];
let pairToData = {};   // { "Al-Cu": {tdb:[], pdf:[], diagram:[]}, ... }
let indexByElement = {};

// ---------------- 工具函数 ----------------
const normalizeSym = s => (s || '').trim();
const pairKey = (a,b) => {
  const [x,y] = [normalizeSym(a), normalizeSym(b)].sort();
  return `${x}-${y}`;
};
const baseName = (p) => p.split('/').slice(-1)[0];
const stem = (fname) => fname.replace(/\.[^/.]+$/, '');

// 兼容旧版 systems.json（仅数组）
function normalizeSystems(raw){
  const out = {};
  for(const [k, v] of Object.entries(raw)){
    if(Array.isArray(v)){
      out[k] = { tdb: v, pdf: [], diagram: [] };
    }else{
      out[k] = {
        tdb: Array.isArray(v.tdb)? v.tdb : [],
        pdf: Array.isArray(v.pdf)? v.pdf : [],
        diagram: Array.isArray(v.diagram)? v.diagram : []
      };
    }
  }
  return out;
}

function buildIndex(){
  indexByElement = {};
  for(const pair of Object.keys(pairToData)){
    const [a,b] = pair.split('-');
    if(!indexByElement[a]) indexByElement[a] = new Set();
    if(!indexByElement[b]) indexByElement[b] = new Set();
    indexByElement[a].add(pair);
    indexByElement[b].add(pair);
  }
}

// 生成给定元素对的常见前缀写法
function possiblePrefixes(pair){
  const [A,B] = pair.split('-');
  return [
    `${A}${B}`, `${B}${A}`,
    `${A}-${B}`, `${B}-${A}`,
    `${A}_${B}`, `${B}_${A}`,
  ];
}

// 从文件名中剥离元素对前缀，得到备注（如 09Wit / 2015Zhang_phase1）
function extractNoteFromFilename(fname, pair){
  const s = stem(fname); // 不含扩展名
  for(const pref of possiblePrefixes(pair)){
    if(s.startsWith(pref)){
      let note = s.slice(pref.length);
      note = note.replace(/^[-_()\s]+/, ''); // 去掉紧跟分隔符
      return note || "";
    }
  }
  // 兜底：忽略连字符/下划线等再比对
  const flat = s.replace(/[-_()\s]+/g,'');
  for(const pref of possiblePrefixes(pair)){
    const f2 = pref.replace(/[-_()\s]+/g,'');
    if(flat.startsWith(f2)){
      let note = s.slice(s.toLowerCase().indexOf(pref.toLowerCase()) + pref.length);
      note = note.replace(/^[-_()\s]+/, '');
      return note || "";
    }
  }
  return "";
}

// 在同体系下尝试用文件前缀/备注匹配对应 PDF
function findRelatedPdf(diagramPath, pair, pdfList){
  const dname = baseName(diagramPath);
  const note = extractNoteFromFilename(dname, pair);
  if(!pdfList || !pdfList.length) return null;

  // 1) stem 完全一致
  const dStem = stem(dname);
  for(const p of pdfList){
    if(stem(baseName(p)) === dStem) return p;
  }
  // 2) 备注一致（例如都叫 09Wit）
  if(note){
    for(const p of pdfList){
      if(extractNoteFromFilename(baseName(p), pair) === note) return p;
    }
  }
  return null;
}

// 简单的 HTML 转义
function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, s => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[s]));
}

// ---------------- 渲染：元素周期表 ----------------
function renderPT(){
  const root = document.getElementById('periodic-table');
  root.innerHTML = '';
  for(const e of ELEMENTS){
    const cell = document.createElement('div');
    cell.className = 'cell';
    if(e.placeholder){
      cell.classList.add('placeholder');
      if(e.lnmark) cell.classList.add('lnmark');
      if(e.anmark) cell.classList.add('anmark');
    }
    cell.textContent = e.sym;
    cell.title = e.name || e.sym;
    cell.style.gridRow = e.row;
    cell.style.gridColumn = e.col;

    if(!e.placeholder && VALID_SYMBOLS.has(e.sym)){
      cell.addEventListener('click', () => toggleSelect(e.sym));
    }
    root.appendChild(cell);
  }
}

function toggleSelect(sym){
  const i = selected.indexOf(sym);
  if(i >= 0) selected.splice(i,1);
  else{
    if(selected.length === 2) selected = [selected[1], sym];
    else selected.push(sym);
  }
  updateSelectionStyles();
  updateResults();
}

function updateSelectionStyles(){
  document.querySelectorAll('.pt .cell').forEach(el => el.classList.remove('selected'));
  const set = new Set(selected);
  document.querySelectorAll('.pt .cell').forEach(el=>{
    if(set.has(el.textContent)) el.classList.add('selected');
  });
  document.getElementById('selection-text').textContent = selected.length ? selected.join(' , ') : '未选择';
}

// ---------------- 渲染：右侧结果 ----------------
function updateResults(){
  const wrap = document.getElementById('results');
  wrap.innerHTML = '';
  const title = document.getElementById('results-title');

  if(selected.length === 0){
    title.textContent = '匹配结果';
    const p = document.createElement('div');
    p.className = 'badge';
    p.textContent = '提示：先选一个元素，右侧会即时列出可配对的二元系。';
    wrap.appendChild(p);
    return;
  }

  if(selected.length === 1){
    const a = selected[0];
    const pairs = Array.from(indexByElement[a] || []).sort((p1,p2)=> p1.localeCompare(p2));
    title.textContent = `包含 ${a} 的二元系（${pairs.length}）`;
    if(pairs.length === 0){
      const empty = document.createElement('div');
      empty.className = 'result-pair';
      empty.textContent = `没有找到包含 ${a} 的二元系。`;
      wrap.appendChild(empty);
      return;
    }
    for(const k of pairs){
      const data = pairToData[k] || {tdb:[], pdf:[], diagram:[]};
      const total = (data.tdb?.length||0) + (data.pdf?.length||0) + (data.diagram?.length||0);
      const row = document.createElement('div');
      row.className = 'result-pair';
      const left = document.createElement('div');
      left.textContent = k;
      const right = document.createElement('div');
      right.className = 'result-count';
      right.textContent = `${total} 项`;
      row.appendChild(left); row.appendChild(right);
      row.addEventListener('click', ()=>{
        const [x,y] = k.split('-'); selected=[x,y];
        updateSelectionStyles(); updateResults();
        document.querySelector('.panel').scrollTo({top:0, behavior:'smooth'});
      });
      wrap.appendChild(row);
    }
    return;
  }

  // 两个元素已选：渲染三类内容
  const k = pairKey(selected[0], selected[1]);
  const data = pairToData[k] || {tdb:[], pdf:[], diagram:[]};
  const total = (data.tdb?.length||0) + (data.pdf?.length||0) + (data.diagram?.length||0);
  title.textContent = `匹配结果：${k}（${total} 项）`;

  addSectionFiles(wrap, 'TDB 文件', data.tdb || [], true);
  addSectionFiles(wrap, 'PDF 文献', data.pdf || [], false);
  addSectionImages(wrap, '相图', data.diagram || [], k, data.pdf || []); // 带备注 + 关联 PDF
}

function addSectionFiles(root, caption, files, withDownload){
  const box = document.createElement('div');
  const h = document.createElement('h3'); h.textContent = caption; box.appendChild(h);
  if(!files.length){
    const none = document.createElement('div'); none.className='result-empty'; none.textContent='（无）';
    box.appendChild(none); root.appendChild(box); return;
  }
  for(const f of files){
    const row = document.createElement('div'); row.className='result-file';
    const name = document.createElement('div');
    const a = document.createElement('a'); a.href = f; a.textContent = baseName(f);
    if(withDownload) a.download = '';
    else a.target = '_blank';
    name.appendChild(a);

    const hint = document.createElement('div'); hint.className='result-count';
    hint.textContent = withDownload ? '点击下载' : '新窗口打开';
    row.appendChild(name); row.appendChild(hint);
    box.appendChild(row);
  }
  root.appendChild(box);
}

// ======= 相图缩略图：显示“备注（年份+作者）+ 文件名”，并自动关联 PDF =======
function addSectionImages(root, caption, imgs, pair, pdfList){
  const box = document.createElement('div');
  const h = document.createElement('h3'); h.textContent = caption; box.appendChild(h);
  if(!imgs.length){
    const none = document.createElement('div'); none.className='result-empty'; none.textContent='（无）';
    box.appendChild(none); root.appendChild(box); return;
  }

  const grid = document.createElement('div'); grid.className = 'thumb-grid';
  for(const f of imgs){
    const fname = baseName(f);                         // 如 AlZr-09Wit.png
    const note  = extractNoteFromFilename(fname, pair); // 如 09Wit（可能为空）
    const pdf   = findRelatedPdf(f, pair, pdfList);     // 可能为 null

    const a = document.createElement('a');
    a.href = f;
    a.target = '_blank';
    a.className = 'thumb';
    a.title = fname;

    const img = document.createElement('img');
    img.src = f;
    img.alt = fname;

    const cap = document.createElement('div');
    cap.className = 'cap';

    // 第一行：备注（优先显示），否则退回文件名
    const main = document.createElement('div');
    main.className = 'cap-main';
    main.innerHTML = escapeHTML(note || fname);

    // 如果找到关联 PDF，在备注后面追加链接
    if(pdf){
      const link = document.createElement('a');
      link.href = pdf; link.target = '_blank';
      link.textContent = '  ·  参见：' + baseName(pdf);
      link.style.marginLeft = '4px';
      main.appendChild(link);
    }

    // 第二行：始终显示完整文件名
    const sub = document.createElement('div');
    sub.className = 'cap-sub';
    sub.textContent = fname;

    cap.appendChild(main);
    cap.appendChild(sub);

    a.appendChild(img);
    a.appendChild(cap);
    grid.appendChild(a);
  }
  box.appendChild(grid);
  root.appendChild(box);
}

// ---------------- 初始化 ----------------
async function boot(){
  renderPT();
  document.getElementById('btn-reset').addEventListener('click', ()=>{
    selected = []; updateSelectionStyles(); updateResults();
  });
  try{
    const resp = await fetch('data/systems.json');
    const data = await resp.json();
    pairToData = normalizeSystems(data);
  }catch(e){
    console.error('载入 systems.json 失败：', e);
    pairToData = {};
  }
  buildIndex(); updateResults();
}
boot();
