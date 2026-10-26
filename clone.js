(() => {
'use strict';
const root=document.documentElement;
const backdrop=document.getElementById('clone-backdrop');
const drawer=document.getElementById('clone-drawer');
const search=document.getElementById('clone-search');
const searchInput=document.getElementById('clone-search-input');
const suggestion=document.getElementById('clone-search-suggestions');
let stories=[];
fetch('articles.json').then(r=>r.json()).then(x=>stories=x).catch(()=>{});
function close(){[backdrop,drawer,search].forEach(n=>n?.classList.add('clone-hidden'));document.body.classList.remove('clone-overlay-open');}
function open(which){close();which.classList.remove('clone-hidden');backdrop.classList.remove('clone-hidden');document.body.classList.add('clone-overlay-open');setTimeout(()=>which.querySelector('input')?.focus(),0);}
backdrop?.addEventListener('click',close);
document.addEventListener('click',e=>{
 if(e.target.closest('[data-clone-close]')){e.preventDefault();close();return;}
 const btn=e.target.closest('button');
 if(btn){
  if(btn.dataset.cloneOpen){e.preventDefault();open(btn.dataset.cloneOpen==='drawer'?drawer:search);return;}
  const title=(btn.getAttribute('aria-label')||btn.getAttribute('title')||btn.textContent||'').trim().toLowerCase();
  if(title.includes('search & section navigation')||title.includes('sections navigation')||title==='menu') {e.preventDefault();e.stopPropagation();open(drawer);return;}
  if(title==='search'||title==='search articles'){e.preventDefault();open(search);return;}
 }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();open(search);}});
searchInput?.addEventListener('input',()=>{
 const q=searchInput.value.trim().toLocaleLowerCase();
 if(q.length<2){suggestion.innerHTML='';return;}
 const found=stories.filter(x=>(x.title+' '+x.summary).toLowerCase().includes(q)).slice(0,7);
 const make=x=>{const a=document.createElement('a');a.href=x.url;a.textContent=x.title;return a};
 suggestion.replaceChildren();
 const p=document.createElement('p');p.textContent=found.length?'Matching headlines':'No matching headlines';suggestion.append(p);
 found.forEach(x=>suggestion.append(make(x)));
});
})();
