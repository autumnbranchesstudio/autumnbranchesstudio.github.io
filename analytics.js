(()=>{
  const c=window.AUTUMNBRANCHES_ANALYTICS||{};

  if(c.provider==='plausible'&&c.domain){
    const s=document.createElement('script');
    s.defer=true;
    s.dataset.domain=c.domain;
    s.src=c.src||'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  }else if(c.provider==='ga4'&&/^G-[A-Z0-9]+$/i.test(c.id||'')){
    const s=document.createElement('script');
    s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(c.id);
    document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments)};
    gtag('js',new Date());
    gtag('config',c.id,{anonymize_ip:true});
  }

  const clarityId='ykv9uyltu7';
  if(/^[a-z0-9]+$/i.test(clarityId)){
    window.clarity=window.clarity||function(){
      (window.clarity.q=window.clarity.q||[]).push(arguments);
    };
    const s=document.createElement('script');
    s.async=true;
    s.src='https://www.clarity.ms/tag/'+encodeURIComponent(clarityId);
    const firstScript=document.getElementsByTagName('script')[0];
    if(firstScript&&firstScript.parentNode){
      firstScript.parentNode.insertBefore(s,firstScript);
    }else{
      document.head.appendChild(s);
    }
  }
})();
