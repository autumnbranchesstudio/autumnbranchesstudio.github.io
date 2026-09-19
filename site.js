
(()=>{
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t;
 const header=document.querySelector('.site-header');
 const entrySection=document.querySelector('.entry-scroll');
 // No strip over the Frame entrance. After entry, the strip matches the exact section background beneath it.
 function usableBg(el){let node=el;while(node&&node!==document.documentElement){const c=getComputedStyle(node).backgroundColor;if(c&&c!=='transparent'){const m=c.match(/rgba?\(([^)]+)\)/);if(m){const parts=m[1].split(',').map(v=>v.trim());const alpha=parts.length>3?Number(parts[3]):1;if(alpha>.04)return c}}node=node.parentElement}return '#050505'}
 function tickHeader(){if(header){const headerH=header.offsetHeight||78,er=entrySection?.getBoundingClientRect();const inEntry=!!(er&&er.bottom>headerH&&er.top<innerHeight);header.classList.toggle('entry-overlay',inEntry);if(!inEntry){const probeY=Math.min(innerHeight-1,headerH+4);const under=document.elementFromPoint(Math.max(1,innerWidth/2),probeY);const bg=usableBg(under);header.style.setProperty('--header-bg',bg);const nums=(bg.match(/[\d.]+/g)||[]).map(Number);const blue=nums.length>=3&&Math.abs(nums[0]-1)<8&&Math.abs(nums[1]-59)<10&&Math.abs(nums[2]-254)<10;header.classList.toggle('on-blue',blue)}else{header.classList.remove('on-blue')}}requestAnimationFrame(tickHeader)}requestAnimationFrame(tickHeader);
 // Full screen menu.
 const trig=document.querySelector('.menu-trigger'),plane=document.querySelector('.menu-plane'),links=[...document.querySelectorAll('.menu-link')],copy=document.querySelector('.menu-copy');
 const current=document.body.dataset.page||'home';
 const texts={home:['Home','Start at the threshold.'],studio:['Studio','Cinema / Literature / Architecture'],expertise:['Expertise','Personal branding / Content / Social'],work:['Work','Selected concept studies'],thinking:['Thinking','Notes published on Substack'],contact:['Contact','Start a conversation.']};
 function setPreview(k){if(!copy)return;copy.classList.add('swap');setTimeout(()=>{const t=texts[k]||texts[current]||texts.home;copy.innerHTML=`<strong>${t[0]}</strong>${t[1]}`;copy.classList.remove('swap')},120)}
 if(trig&&plane){trig.addEventListener('click',()=>{const o=!plane.classList.contains('is-open');plane.classList.toggle('is-open',o);trig.setAttribute('aria-expanded',String(o));document.body.style.overflow=o?'hidden':'';setPreview(current)});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&plane.classList.contains('is-open'))trig.click()});links.forEach(l=>{l.addEventListener('mouseenter',()=>{links.forEach(x=>x.classList.remove('is-preview'));l.classList.add('is-preview');setPreview(l.dataset.page)});l.addEventListener('mouseleave',()=>{l.classList.remove('is-preview');setPreview(current)});l.addEventListener('focus',()=>{l.classList.add('is-preview');setPreview(l.dataset.page)});l.addEventListener('blur',()=>{l.classList.remove('is-preview');setPreview(current)})})}
 // Entry: crisp SVG viewBox camera move aimed at the blue plane.
 const entry=document.querySelector('.entry-scroll'),svg=document.querySelector('.entry-svg'),fill=document.querySelector('.entry-fill'),cap=document.querySelector('.entry-caption'),intro=document.querySelector('.intro-blue');let smoothP=0,settleTimer=0,settled=!!(document.body.dataset.page==='home'&&((location.hash&&location.hash!=='#intro')||new URLSearchParams(location.search).has('section')));
 const start={x:-300,y:-300,w:1854,h:1854},end={x:606,y:638,w:145,h:240};const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
 function entryProgress(){if(!entry)return 1;const r=entry.getBoundingClientRect(),max=entry.offsetHeight-innerHeight;return clamp(-r.top/Math.max(1,max),0,1)}
 function tickEntry(){if(entry&&svg){const target=entryProgress();smoothP+=(target-smoothP)*.17;const e=ease(smoothP);svg.setAttribute('viewBox',`${lerp(start.x,end.x,e)} ${lerp(start.y,end.y,e)} ${lerp(start.w,end.w,e)} ${lerp(start.h,end.h,e)}`);fill.style.opacity=String(clamp((smoothP-.72)/.22,0,1));if(cap)cap.style.opacity=String(1-clamp(smoothP*3.2,0,1))}requestAnimationFrame(tickEntry)}requestAnimationFrame(tickEntry);
 function maybeSettle(){clearTimeout(settleTimer);if(settled||!intro||(location.hash&&location.hash!=='#intro')||new URLSearchParams(location.search).has('section'))return;settleTimer=setTimeout(()=>{if(entryProgress()>.86){settled=true;intro.scrollIntoView({behavior:'smooth',block:'start'})}},100)}addEventListener('scroll',()=>{if(scrollY<8&&!location.hash)settled=false;maybeSettle()},{passive:true});
 // Home Studio lenses. Desktop keeps hover support; mobile is driven by scroll position.
 const studio=document.querySelector('.studio-home'),words=[...document.querySelectorAll('.studio-word')],scopy=document.querySelector('.studio-copy');const studioText=[
  {meta:'Framing / pacing / sequence / emotion',copy:'We use cinema as a way to think about attention: what enters the frame, what stays out, and when the audience is ready for the next beat.'},
  {meta:'Voice / character / narrative / point of view',copy:'Literature keeps the work human. It asks who is speaking, what they believe, and why someone should keep listening.'},
  {meta:'Structure / hierarchy / rhythm / space',copy:'Architecture teaches us to organise information so people can move through it clearly, with hierarchy, rhythm and room to breathe.'}
 ];let hoverIndex=null,last=-1,studioSwapTimer=0;
 const mobileStudio=matchMedia('(max-width:760px)');
 function renderStudio(i,immediate=false){if(i===last&&hoverIndex===null)return;last=i;words.forEach((w,j)=>w.classList.toggle('is-active',j===i));if(!scopy)return;const d=studioText[i],paint=()=>{scopy.innerHTML=`<p>${d.copy}</p><div class="studio-meta">${d.meta}</div>`;requestAnimationFrame(()=>scopy.classList.remove('is-switching'))};clearTimeout(studioSwapTimer);if(immediate){paint();return}scopy.classList.add('is-switching');studioSwapTimer=setTimeout(paint,100)}
 function pinStudioFocus(i){words.forEach((w,j)=>{const on=j===i;w.style.opacity=on?'1':'.24';w.style.transform=on?'translateX(14px)':'translateX(0px)'})}
 words.forEach((w,i)=>{w.addEventListener('mouseenter',()=>{if(mobileStudio.matches)return;hoverIndex=i;pinStudioFocus(i);renderStudio(i)});w.addEventListener('mouseleave',()=>{if(mobileStudio.matches)return;hoverIndex=null;last=-1});w.addEventListener('focus',()=>{if(mobileStudio.matches)return;hoverIndex=i;pinStudioFocus(i);renderStudio(i)});w.addEventListener('blur',()=>{if(mobileStudio.matches)return;hoverIndex=null;last=-1})});
 function tickStudio(){if(studio&&hoverIndex===null){const r=studio.getBoundingClientRect(),max=Math.max(1,studio.offsetHeight-innerHeight),p=clamp(-r.top/max,0,1),centers=[0,.5,1];if(innerWidth>760){words.forEach((w,j)=>{const focus=clamp(1-Math.abs(p-centers[j])*2.25,0,1);w.style.opacity=(.3+.7*focus).toFixed(3);w.style.transform=`translateX(${(11*focus).toFixed(1)}px)`});const idx=p<.25?0:(p<.75?1:2);renderStudio(idx)}else{const visible=r.bottom>0&&r.top<innerHeight;if(visible){words.forEach((w,j)=>{const focus=clamp(1-Math.abs(p-centers[j])*2.05,0,1);w.style.opacity=(.34+.66*focus).toFixed(3);w.style.transform=`translateX(${(8*focus).toFixed(1)}px)`});const idx=p<1/3?0:(p<2/3?1:2);renderStudio(idx)}}}requestAnimationFrame(tickStudio)}if(words.length){renderStudio(0,true);requestAnimationFrame(tickStudio)}
 // Expertise strips: desktop uses hover/focus; mobile reveals automatically as each row crosses the reading zone.
 const serviceRows=[...document.querySelectorAll('.service-strip')];
 const mobileServices=matchMedia('(max-width:760px)');
 const setService=index=>serviceRows.forEach((r,j)=>r.classList.toggle('active',j===index));
 serviceRows.forEach((row,i)=>{row.addEventListener('mouseenter',()=>{if(!mobileServices.matches)setService(i)});row.addEventListener('mouseleave',()=>{if(!mobileServices.matches)setService(-1)});row.addEventListener('focus',()=>{if(!mobileServices.matches)setService(i)});row.addEventListener('blur',()=>{if(!mobileServices.matches)setService(-1)});row.addEventListener('click',()=>{if(mobileServices.matches)setService(i)})});
 let serviceRevealRaf=0;
 function updateMobileServices(){serviceRevealRaf=0;if(!mobileServices.matches||!serviceRows.length)return;const targetY=innerHeight*.56;let best=-1,bestDistance=Infinity;serviceRows.forEach((row,i)=>{const rr=row.getBoundingClientRect();const inReadingZone=rr.bottom>innerHeight*.18&&rr.top<innerHeight*.84;if(!inReadingZone)return;const center=(rr.top+rr.bottom)/2,d=Math.abs(center-targetY);if(d<bestDistance){bestDistance=d;best=i}});setService(best)}
 function queueMobileServices(){if(serviceRevealRaf)return;serviceRevealRaf=requestAnimationFrame(updateMobileServices)}
 addEventListener('scroll',queueMobileServices,{passive:true});addEventListener('resize',queueMobileServices,{passive:true});addEventListener('pageshow',queueMobileServices);
 if(mobileServices.addEventListener)mobileServices.addEventListener('change',()=>{setService(-1);queueMobileServices()});else if(mobileServices.addListener)mobileServices.addListener(()=>{setService(-1);queueMobileServices()});
 queueMobileServices();
 // Contact form -> Formspree inbox delivery with an in-page success state.
 const form=document.getElementById('callForm');
 if(form)form.addEventListener('submit',async e=>{
   e.preventDefault();
   const button=form.querySelector('.call-submit'),status=document.getElementById('formStatus'),original=button?.innerHTML||'Request a call <span>→</span>';
   if(button){button.disabled=true;button.setAttribute('aria-busy','true');button.innerHTML='Sending <span>…</span>'}
   if(status){status.classList.remove('is-success','is-error');status.textContent='Sending your note…'}
   try{
     const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
     if(!response.ok)throw new Error('Form submission failed');
     form.reset();
     if(status){status.classList.add('is-success');status.textContent='Message received. We’ll be in touch.'}
     if(button)button.innerHTML='Sent <span>✓</span>';
   }catch(err){
     if(status){status.classList.add('is-error');status.textContent='Couldn’t send that just now. Email us at reachautumnbranches@gmail.com.'}
     if(button)button.innerHTML=original;
   }finally{
     if(button){button.disabled=false;button.removeAttribute('aria-busy')}
   }
 });
})();

/* v25 Stage 2.1 — contextual navigation, route motion, v24 Studio lens, section reveals */
(()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 // Route curtain makes page-to-page movement feel continuous. Same-page section links close the menu and scroll directly.
 const curtain=document.createElement('div');curtain.className='route-curtain entering';document.body.appendChild(curtain);if(reduce)curtain.remove();
 // Browser back/forward can restore a page from the BFCache with the departure curtain still covering it.
 // Always park the curtain off-screen before a page is cached and whenever history restores the page.
 const resetRouteCurtain=()=>{
   if(!curtain?.isConnected)return;
   curtain.classList.remove('entering','leaving');
   curtain.style.animation='none';
   curtain.style.transform='translateY(100%)';
   document.body.style.overflow='';
   requestAnimationFrame(()=>{if(!curtain?.isConnected)return;curtain.style.animation='';curtain.style.transform=''});
 };
 curtain?.addEventListener('animationend',e=>{if(e.animationName==='routeReveal')curtain.classList.remove('entering')});
 addEventListener('pagehide',resetRouteCurtain);
 addEventListener('pageshow',e=>{const nav=performance.getEntriesByType?.('navigation')?.[0];if(e.persisted||nav?.type==='back_forward')resetRouteCurtain()});
 addEventListener('popstate',resetRouteCurtain);
 const closeMenu=()=>{const p=document.querySelector('.menu-plane'),t=document.querySelector('.menu-trigger');if(p?.classList.contains('is-open')){p.classList.remove('is-open');t?.setAttribute('aria-expanded','false');document.body.style.overflow=''}};
 const homeIds=new Set(['intro','studio','expertise','thinking','contact']);
 const sectionFromUrl=u=>{try{const x=u instanceof URL?u:new URL(u,location.href);const q=x.searchParams.get('section');const h=x.hash.slice(1);return homeIds.has(q)?q:(homeIds.has(h)?h:null)}catch{return null}};
 const rememberHomeTarget=u=>{const id=sectionFromUrl(u);if(id)sessionStorage.setItem('ab:home-target',id);return id};
 const absoluteReturn=raw=>{const u=new URL(raw,location.href),id=sectionFromUrl(u);if(id){u.searchParams.set('section',id);u.hash=id;sessionStorage.setItem('ab:home-target',id)}return u.href};
 document.querySelectorAll('a[href]').forEach(a=>{
   const raw=a.getAttribute('href')||'';
   if(a.classList.contains('js-smart-back')||a.closest('.project-card')||raw.startsWith('mailto:')||raw.startsWith('http'))return;
   a.addEventListener('click',e=>{
     if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank')return;
     const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
     rememberHomeTarget(u);
     if(u.pathname===location.pathname&&u.hash){const target=document.querySelector(u.hash);if(target){e.preventDefault();closeMenu();history.replaceState(null,'',u.hash);const hh=document.querySelector('.site-header')?.offsetHeight||78;const y=target.getBoundingClientRect().top+scrollY-hh;window.scrollTo({top:Math.max(0,y),behavior:reduce?'auto':'smooth'})}return}
     if(reduce)return;
     e.preventDefault();curtain.classList.remove('entering');curtain.classList.add('leaving');setTimeout(()=>location.href=u.href,410);
   });
 });
 // Smart back always resolves an explicit destination and remembers the exact Home chapter when applicable.
 document.querySelectorAll('.js-smart-back').forEach(a=>a.addEventListener('click',e=>{
   e.preventDefault();
   const param=new URLSearchParams(location.search).get('return');
   const fallback=param||a.dataset.fallback||a.getAttribute('href');
   const destination=absoluteReturn(fallback);
   const go=()=>{location.href=destination};
   if(reduce){go();return}curtain.classList.remove('entering');curtain.classList.add('leaving');setTimeout(go,390);
 }));
 // On Home, land deterministically on the requested chapter. Re-run after layout settles and on BFCache restores.
 if(document.body.dataset.page==='home'){
   if('scrollRestoration' in history)history.scrollRestoration='manual';
   const params=new URLSearchParams(location.search),hash=location.hash.slice(1),stored=sessionStorage.getItem('ab:home-target');
   const requested=homeIds.has(params.get('section'))?params.get('section'):(homeIds.has(hash)?hash:(homeIds.has(stored)?stored:null));
   if(requested){
     sessionStorage.removeItem('ab:home-target');
     const place=()=>{const target=document.getElementById(requested);if(!target)return;const hh=document.querySelector('.site-header')?.offsetHeight||78;const y=target.getBoundingClientRect().top+scrollY-hh;window.scrollTo({top:Math.max(0,y),behavior:'auto'})};
     requestAnimationFrame(()=>requestAnimationFrame(place));[80,220,520].forEach(ms=>setTimeout(place,ms));addEventListener('pageshow',place,{once:true});
   }
 }
 // Section reveal rhythm for project pages.
 const reveals=[...document.querySelectorAll('.reveal')];if('IntersectionObserver'in window&&!reduce){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8%'});reveals.forEach(el=>io.observe(el))}else reveals.forEach(el=>el.classList.add('in-view'));

 // Restore the approved v24 interactive Studio lens.
 const tabs=[...document.querySelectorAll('.lens-tab')],panels=[...document.querySelectorAll('.lens-panel')];
 function scrollLensIntoPlace(behavior='smooth'){const lens=document.querySelector('.legacy-lens');if(!lens)return;const headerH=document.querySelector('.site-header')?.offsetHeight||78;const y=lens.getBoundingClientRect().top+window.scrollY-headerH-12;window.scrollTo({top:Math.max(0,y),behavior:reduce?'auto':behavior})}
 function activateLens(name,scroll=false){if(!tabs.length)return;tabs.forEach(t=>{const on=t.dataset.lens===name;t.classList.toggle('active',on);t.setAttribute('aria-selected',on?'true':'false')});panels.forEach(p=>p.classList.toggle('active',p.dataset.panel===name));if(scroll)scrollLensIntoPlace('smooth')}
 tabs.forEach(t=>{t.addEventListener('mouseenter',()=>activateLens(t.dataset.lens));t.addEventListener('focus',()=>activateLens(t.dataset.lens));t.addEventListener('click',()=>activateLens(t.dataset.lens))});
 if(tabs.length){
   if('scrollRestoration' in history)history.scrollRestoration='manual';
   const params=new URLSearchParams(location.search),q=params.get('lens'),h=location.hash.slice(1);
   const requested=['cinema','literature','architecture'].includes(q)?q:(['cinema','literature','architecture'].includes(h)?h:null);
   if(requested){activateLens(requested,false);const place=()=>scrollLensIntoPlace('auto');requestAnimationFrame(()=>requestAnimationFrame(place));setTimeout(place,120);setTimeout(place,360)}
 }
 const cinema=document.querySelector('.cinema'),cropMeaning=document.getElementById('cropMeaning'),cropBtns=[...document.querySelectorAll('.crop-btn')];const cropCopy={wide:'The frame begins with place. Architecture, distance and context shape how the moment is read.',medium:'Move closer and the environment recedes. The conversation becomes the story.',detail:'Closer still, the story collapses into a gesture: a hand, a bite, a reaction.'};
 function crop(btn){cropBtns.forEach(b=>{const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});if(cinema)cinema.dataset.crop=btn.dataset.crop;if(cropMeaning)cropMeaning.textContent=cropCopy[btn.dataset.crop]}
 cropBtns.forEach(b=>{b.setAttribute('aria-pressed',b.classList.contains('active')?'true':'false');b.addEventListener('mouseenter',()=>crop(b));b.addEventListener('focus',()=>crop(b));b.addEventListener('click',()=>crop(b))});
 const literature=document.querySelector('.literature'),litBtns=[...document.querySelectorAll('.lit-btn')];function lit(btn){litBtns.forEach(b=>{const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});if(literature)literature.dataset.focus=btn.dataset.focus}litBtns.forEach(b=>{b.setAttribute('aria-pressed',b.classList.contains('active')?'true':'false');b.addEventListener('mouseenter',()=>lit(b));b.addEventListener('focus',()=>lit(b));b.addEventListener('click',()=>lit(b))});
 const arch=document.getElementById('archCanvas'),archBtns=[...document.querySelectorAll('.arch-mode')],archLabel=document.getElementById('archStateLabel'),archText=document.getElementById('archStateCopy');const archCopy={structure:['structure / 01','Before an idea can communicate, its parts need a relationship.','The same ten modules arranged to demonstrate structure.'],hierarchy:['hierarchy / 02','Not everything should speak at the same volume.','The same ten modules arranged to demonstrate hierarchy, with one dominant module.'],rhythm:['rhythm / 03','Repetition gives a system consistency without making it repetitive.','The same ten modules arranged in a repeating visual rhythm.'],space:['space / 04','What you leave open can be as important as what you fill.','The same ten modules arranged around a large area of negative space.']};
 function archMode(btn){const k=btn.dataset.archState;archBtns.forEach(b=>{const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});if(arch){arch.dataset.state=k;arch.setAttribute('aria-label',archCopy[k][2])}if(archLabel)archLabel.textContent=archCopy[k][0];if(archText)archText.textContent=archCopy[k][1]}
 const hover=matchMedia('(hover:hover) and (pointer:fine)').matches;archBtns.forEach(b=>{if(hover)b.addEventListener('mouseenter',()=>archMode(b));b.addEventListener('focus',()=>archMode(b));b.addEventListener('click',()=>archMode(b))});
})();
