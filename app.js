const translations = {
  fr:{tagline:'Grillades • Burgers • Soirées',book:'Réserver sur WhatsApp',install:'Installer l’app',menu:'Carte',events:'Événements',find:'Nous trouver',follow:'Nous suivre',featured:'À l’affiche',ribsText:'Travers de porc à volonté. Première assiette avec garniture, puis réassort de ribs.',ask:'Demander les disponibilités →',ourMenu:'Notre carte',grillTitle:'Le feu au centre de l’assiette',flame:'Grillé à la flamme',menuNote:'La carte complète sera ajoutée progressivement à l’application.',visit:'Nous rendre visite',hours:'Horaires :',hoursText:'mardi à dimanche • 18:00–23:00',route:'Itinéraire Google Maps',socialTitle:'Suivez-nous',coming:'Prochaine étape',loyalty:'Fidélité Black Horn',loyaltyText:'La carte de fidélité numérique sera ajoutée après validation de la règle de récompense.',home:'Accueil',bookShort:'Réserver'},
  es:{tagline:'Parrilla • Hamburguesas • Eventos',book:'Reservar por WhatsApp',install:'Instalar la app',menu:'Carta',events:'Eventos',find:'Cómo llegar',follow:'Síguenos',featured:'Destacado',ribsText:'Costillas de cerdo ilimitadas. Primer plato con guarnición y después reposición de costillas.',ask:'Consultar disponibilidad →',ourMenu:'Nuestra carta',grillTitle:'El fuego en el centro del plato',flame:'A la parrilla',menuNote:'La carta completa se añadirá progresivamente a la aplicación.',visit:'Visítanos',hours:'Horario:',hoursText:'martes a domingo • 18:00–23:00',route:'Ruta en Google Maps',socialTitle:'Síguenos',coming:'Próximo paso',loyalty:'Fidelidad Black Horn',loyaltyText:'La tarjeta de fidelidad digital se añadirá después de validar la recompensa.',home:'Inicio',bookShort:'Reservar'},
  en:{tagline:'Grill • Burgers • Events',book:'Book on WhatsApp',install:'Install app',menu:'Menu',events:'Events',find:'Find us',follow:'Follow us',featured:'Featured',ribsText:'Unlimited pork ribs. First plate with side dish, then rib refills.',ask:'Ask about availability →',ourMenu:'Our menu',grillTitle:'Fire at the heart of the plate',flame:'Flame grilled',menuNote:'The full menu will be added progressively to the app.',visit:'Visit us',hours:'Hours:',hoursText:'Tuesday to Sunday • 18:00–23:00',route:'Google Maps directions',socialTitle:'Follow us',coming:'Next step',loyalty:'Black Horn Loyalty',loyaltyText:'The digital loyalty card will be added after the reward rule is approved.',home:'Home',bookShort:'Book'}
};
function setLang(lang){
  document.documentElement.lang=lang;
  localStorage.setItem('bh-lang',lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(translations[lang][k]) el.textContent=translations[lang][k]});
  document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
}
document.querySelectorAll('.lang').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem('bh-lang') || 'fr');
document.getElementById('year').textContent=new Date().getFullYear();
let deferredPrompt;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.style.display='block'});
installBtn.addEventListener('click',async()=>{
  if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;return;}
  alert('Sur iPhone : Partager → Ajouter à l’écran d’accueil. Sur Android : menu du navigateur → Installer l’application.');
});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));}
