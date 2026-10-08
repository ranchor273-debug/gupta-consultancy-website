const menu=document.querySelector('.menu');
const nav=document.querySelector('.site-header nav');
if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const phone=document.getElementById('phone').value.trim();const service=document.getElementById('service').value;const message=document.getElementById('message').value.trim();const text=`Hello Gupta Consultancy,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nRequirement: ${message||'Please contact me regarding this service.'}`;window.open(`https://wa.me/919579597030?text=${encodeURIComponent(text)}`,'_blank')})}
document.getElementById('year').textContent=new Date().getFullYear();


// Dynamic hero service cards: the floating callouts rotate through Gupta Consultancy services.
const heroFloatA=document.getElementById('heroFloatA');
const heroFloatB=document.getElementById('heroFloatB');
if(heroFloatA && heroFloatB){
  const floatSets=[
    [{label:'GST',text:'Compliance support'},{label:'ITR',text:'Tax support'}],
    [{label:'TDS',text:'Timely compliance'},{label:'MIS',text:'Business reporting'}],
    [{label:'Accounts',text:'Books organised'},{label:'Payroll',text:'Salary support'}],
    [{label:'GST',text:'Return filing support'},{label:'Accounts',text:'Bookkeeping support'}],
    [{label:'ITR',text:'Income tax support'},{label:'TDS',text:'Documentation support'}]
  ];
  let floatIndex=0;
  const updateFloat=(el,item)=>{
    el.classList.add('is-changing');
    setTimeout(()=>{
      el.querySelector('b').textContent=item.label;
      el.querySelector('span').textContent=item.text;
      el.querySelector('em').textContent='✓';
      el.classList.remove('is-changing');
    },350);
  };
  setInterval(()=>{
    floatIndex=(floatIndex+1)%floatSets.length;
    updateFloat(heroFloatA,floatSets[floatIndex][0]);
    updateFloat(heroFloatB,floatSets[floatIndex][1]);
  },3200);
}
