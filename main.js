const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const lb=document.querySelector('.lb'),li=lb.querySelector('img');
document.querySelectorAll('.g figure').forEach(f=>f.onclick=()=>{li.src=f.querySelector('img').src;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();alert('Ukážka: formulár sa odosiela až v hotovej verzii.')});
