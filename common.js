const DEFAULT={loggedIn:false,plan:'FREE',casts:10,castsTotal:10,name:'John Kamau',phone:''};
function user(){try{return JSON.parse(localStorage.getItem('clipcast_user'))||DEFAULT}catch(e){return DEFAULT}}
function save(u){localStorage.setItem('clipcast_user',JSON.stringify(u));updateCastsDisplay()}
function updateCastsDisplay(){document.querySelectorAll('.casts-balance').forEach(e=>e.textContent='🔥 '+user().casts+' Casts Left')}
function toast(m){const t=document.getElementById('toast');if(!t)return;t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function mustLogin(){if(!user().loggedIn){location.href='login.html';return false}return true}
function downloadDemo(n='clipcast-clip.mp4'){const b=new Blob(['ClipCast demo download'],{type:'video/mp4'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=n;a.click();toast('Sawa! Download started.')}
document.addEventListener('DOMContentLoaded',updateCastsDisplay)
