const translations = {
  fr:{
    tagline:'Grillades • Burgers • Soirées',book:'Réserver sur WhatsApp',install:'Installer l’app',
    installed:'Application installée sur cet appareil',menu:'Carte',events:'Événements',photos:'Photos',
    find:'Nous trouver',featured:'À l’affiche',
    ribsText:'Travers de porc à volonté. Première assiette avec garniture, puis réassort de ribs. Boissons non comprises.',
    ask:'Réserver / demander les disponibilités →',belgianNight:'Soirée belge',
    belgianDesc:'Plat + dessert + un verre de vin • 24,90 € • 30 personnes maximum.',
    poolNight:'Tournoi de billard',poolDesc:'8-Ball américain • prochaine date annoncée dans l’application et sur nos réseaux.',
    steakDesc:'Une soirée steak à prix accessible est en préparation.',photoTitle:'Quelques assiettes Black Horn',
    photoSkewer:'Brochette Terre-Mer',photoSteak:'Bœuf grillé',ourMenu:'Notre carte',menuTitle:'La carte Black Horn',
    menuIntro:'Les prix indiqués ci-dessous sont ceux déjà validés. Les articles sans prix restent disponibles sur la carte du restaurant.',
    starters:'Entrées & finger food',burgers:'Burgers',grill:'Viandes grillées & plats',flame:'Grillé à la flamme',
    sides:'Accompagnements',sidesText:'Frites • pomme de terre au four • wedges',sauces:'Sauces',
    desserts:'Desserts & milkshakes',kids:'Menu enfant',kidsNuggets:'Nuggets • frites • boisson',
    kidsFish:'Fingers poisson • frites • boisson',drinks:'Boissons',wineGlass:'Verre',wineBottle:'Bouteille',
    bookingTitle:'Réservation',bookingHeadline:'Réservez directement avec nous',
    bookingText:'WhatsApp ouvre un message prérempli. Indiquez simplement le nombre de personnes, la date et l’heure.',
    visit:'Nous rendre visite',monday:'Lundi',closed:'Fermé',tueSun:'Mardi → dimanche',
    route:'Itinéraire Google Maps',socialTitle:'Suivez-nous',coming:'À venir',loyalty:'Fidélité Black Horn',
    loyaltyText:'La carte de fidélité numérique sera ajoutée dans une prochaine mise à jour.',
    home:'Accueil',findShort:'Adresse',bookShort:'Réserver'
  },
  es:{
    tagline:'Parrilla • Hamburguesas • Eventos',book:'Reservar por WhatsApp',install:'Instalar la app',
    installed:'Aplicación instalada en este dispositivo',menu:'Carta',events:'Eventos',photos:'Fotos',
    find:'Cómo llegar',featured:'Destacado',
    ribsText:'Costillas de cerdo ilimitadas. Primer plato con guarnición y después reposición de costillas. Bebidas no incluidas.',
    ask:'Reservar / consultar disponibilidad →',belgianNight:'Noche belga',
    belgianDesc:'Plato + postre + una copa de vino • 24,90 € • máximo 30 personas.',
    poolNight:'Torneo de billar',poolDesc:'8-Ball americano • la próxima fecha se anunciará en la app y en nuestras redes.',
    steakDesc:'Estamos preparando una Steak Night a un precio accesible.',photoTitle:'Algunos platos Black Horn',
    photoSkewer:'Brocheta Mar y Tierra',photoSteak:'Carne de vacuno a la parrilla',ourMenu:'Nuestra carta',menuTitle:'La carta Black Horn',
    menuIntro:'Los precios indicados son los ya validados. Los artículos sin precio siguen disponibles en la carta del restaurante.',
    starters:'Entrantes & finger food',burgers:'Hamburguesas',grill:'Carnes a la parrilla & platos',flame:'A la parrilla',
    sides:'Guarniciones',sidesText:'Patatas fritas • patata asada • wedges',sauces:'Salsas',
    desserts:'Postres & milkshakes',kids:'Menú infantil',kidsNuggets:'Nuggets • patatas fritas • bebida',
    kidsFish:'Fingers de pescado • patatas fritas • bebida',drinks:'Bebidas',wineGlass:'Copa',wineBottle:'Botella',
    bookingTitle:'Reserva',bookingHeadline:'Reserva directamente con nosotros',
    bookingText:'WhatsApp abre un mensaje preparado. Solo tienes que indicar personas, fecha y hora.',
    visit:'Visítanos',monday:'Lunes',closed:'Cerrado',tueSun:'Martes → domingo',
    route:'Ruta en Google Maps',socialTitle:'Síguenos',coming:'Próximamente',loyalty:'Fidelidad Black Horn',
    loyaltyText:'La tarjeta de fidelidad digital se añadirá en una próxima actualización.',
    home:'Inicio',findShort:'Dirección',bookShort:'Reservar'
  },
  en:{
    tagline:'Grill • Burgers • Events',book:'Book on WhatsApp',install:'Install app',
    installed:'App installed on this device',menu:'Menu',events:'Events',photos:'Photos',
    find:'Find us',featured:'Featured',
    ribsText:'Unlimited pork ribs. First plate with side dish, then rib refills. Drinks not included.',
    ask:'Book / ask about availability →',belgianNight:'Belgian Night',
    belgianDesc:'Main + dessert + one glass of wine • €24.90 • maximum 30 guests.',
    poolNight:'Pool tournament',poolDesc:'American 8-Ball • next date will be announced in the app and on our social channels.',
    steakDesc:'An affordable Steak Night is in preparation.',photoTitle:'A few Black Horn plates',
    photoSkewer:'Surf & Turf skewer',photoSteak:'Grilled beef',ourMenu:'Our menu',menuTitle:'The Black Horn menu',
    menuIntro:'Prices shown below are the ones already confirmed. Items without a displayed price remain available on the restaurant menu.',
    starters:'Starters & finger food',burgers:'Burgers',grill:'Grilled meats & mains',flame:'Flame grilled',
    sides:'Sides',sidesText:'French fries • baked potato • wedges',sauces:'Sauces',
    desserts:'Desserts & milkshakes',kids:'Kids menu',kidsNuggets:'Nuggets • fries • drink',
    kidsFish:'Fish fingers • fries • drink',drinks:'Drinks',wineGlass:'Glass',wineBottle:'Bottle',
    bookingTitle:'Booking',bookingHeadline:'Book directly with us',
    bookingText:'WhatsApp opens a pre-filled message. Just add the number of guests, date and time.',
    visit:'Visit us',monday:'Monday',closed:'Closed',tueSun:'Tuesday → Sunday',
    route:'Google Maps directions',socialTitle:'Follow us',coming:'Coming soon',loyalty:'Black Horn Loyalty',
    loyaltyText:'The digital loyalty card will be added in a future update.',
    home:'Home',findShort:'Address',bookShort:'Book'
  }
};

const messages = {
  fr:'Bonjour Black Horn, je voudrais réserver une table. Nombre de personnes : ___ / Date : ___ / Heure : ___.',
  es:'Hola Black Horn, quisiera reservar una mesa. Número de personas: ___ / Fecha: ___ / Hora: ___.',
  en:'Hello Black Horn, I would like to book a table. Number of guests: ___ / Date: ___ / Time: ___.'
};
const ribsMessages = {
  fr:'Bonjour Black Horn, je voudrais réserver pour la Ribs Night à 22,90 €. Nombre de personnes : ___.',
  es:'Hola Black Horn, quisiera reservar para la Ribs Night de 22,90 €. Número de personas: ___.',
  en:'Hello Black Horn, I would like to book the €22.90 Ribs Night. Number of guests: ___.'
};

function waLink(text){ return 'https://wa.me/34747463333?text=' + encodeURIComponent(text); }

function setLang(lang){
  if(!translations[lang]) lang='fr';
  document.documentElement.lang=lang;
  localStorage.setItem('bh-lang',lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n;
    if(translations[lang][k]) el.textContent=translations[lang][k];
  });
  document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  document.querySelectorAll('.js-book').forEach(a=>a.href=waLink(messages[lang]));
  document.querySelectorAll('.js-ribs').forEach(a=>a.href=waLink(ribsMessages[lang]));
}

document.querySelectorAll('.lang').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem('bh-lang') || 'fr');
document.getElementById('year').textContent=new Date().getFullYear();

let deferredPrompt=null;
const installBtn=document.getElementById('installBtn');
const installedHint=document.getElementById('installedHint');

function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function updateInstallUI(){
  const installed=isStandalone();
  installBtn.hidden=installed;
  installedHint.hidden=!installed;
}
updateInstallUI();
window.matchMedia('(display-mode: standalone)').addEventListener?.('change',updateInstallUI);

window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
  if(!isStandalone()) installBtn.hidden=false;
});

installBtn.addEventListener('click',async()=>{
  if(isStandalone()){ updateInstallUI(); return; }
  if(deferredPrompt){
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt=null;
    return;
  }
  const lang=document.documentElement.lang || 'fr';
  const msg={
    fr:'Sur iPhone/iPad : ouvrez cette page dans Safari → Partager → Ajouter à l’écran d’accueil.',
    es:'En iPhone/iPad: abre esta página en Safari → Compartir → Añadir a pantalla de inicio.',
    en:'On iPhone/iPad: open this page in Safari → Share → Add to Home Screen.'
  };
  alert(msg[lang] || msg.fr);
});

window.addEventListener('appinstalled',updateInstallUI);

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}
