var app = angular.module('repuestosleiton',['pascalprecht.translate', 'ngMessages']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {    
    CHANGELANG: 'Cambiar a idioma Español',
    BUTTON_LANG_EN: 'ES',
    HOME: 'Home',
    TITLE: 'Leiton',
    GREETINGS: "Here's the solution!",
    WELCOME2: "Repuestos Leitón",
    TELLMEMORE: 'Know us',    
    ABOUT: 'About',
    ABOUT2: 'Who are we?',
    ABOUT3: 'A Family Company',
    ABOUT4: 'Open to the public since 1992 in San José, Costa Rica',
    ABOUT5: 'We are dedicated to sell engine parts for cars and trucks. Our main brands are:',
    PRODUCTS: 'Products',
    PRODUCTS2: 'What do we sell?',
    PRODUCTSDESC: 'Our main products are',
    MOTOR: 'Motor Internal Parts',    
    MOTORDESC: 'Pistons, Piston Rings, Piston Liners, Valves, Oil, Water, Brake & Gasoline Pumps, Axial Shims, Bearings and Gaskets',
    CLUTCH: 'Clutch Kits',
    CLUTCHDESC: "Cluth Cover, Disc and Roll",
    ACCESORIES: 'Accesories',
    ACCESORIESDESC: "Coolant, wax, gauzes, brushes, polishers, bulbs, among others",  
    BRANDS: "We have these brands of parts:",
    LOCATION: "Location",
    LOCATIONSUB: 'Get easily to our point of sale',
    CONTACT: 'Contact',
    CONTACT2: 'Contact us',
    CONTACT3: 'Tell us how we can help you',
    CONTACT4: 'Your Name *',
    CONTACT5: 'Please enter your name',
    CONTACT6: 'Your Email *',
    CONTACT7: 'Please enter your email address',
    CONTACT8: 'Your Phone *',
    CONTACT9: 'Please enter your phone number',
    CONTACT10: 'Your Message *',
    CONTACT11: 'Please enter a message',
    CONTACT12: 'Send Message',
    EXPRESS: 'We have Express Delivery - Packages are sent all over Costa Rica',
    BANK: 'Bank Account: 100 - 01 - 000 - 147585 - 4'
});

  $translateProvider.translations('es', {
    CHANGELANG: 'Switch to English Language',
    BUTTON_LANG_EN: 'EN',
    HOME: 'Inicio',
    TITLE: 'Repuestos Leitón',
    GREETINGS: "¡Es la solución!",
    WELCOME2: "Repuestos Leitón",
    TELLMEMORE: 'Conózcanos',
    ABOUT: '¿Quiénes somos?', 
    ABOUT2: '¿Quiénes somos?',
    ABOUT3: 'UNA EMPRESA FAMILIAR',
    ABOUT4: 'Abierta al público desde 1992 en San José, Costa Rica',
    ABOUT5: 'Nos dedicamos a la venta de piezas internas de motor para automóviles y camiones. Nuestro amplio surtido en repuestos abarca marcas como:',
    PRODUCTS: 'Productos',
    PRODUCTS2: '¿Qué vendemos?',
    PRODUCTSDESC: 'Algunos de nuestros productos son',
    MOTOR: 'Partes Internas del Motor',    
    MOTORDESC: 'Anillos de Pistón, Pistones, Camisas de Motor, Válvulas, Bombas de Aceite, de Agua, Gasolina y de Frenos, Calzas Axiales, Cojinetes de Bancada y Biela, Empaques de Motor y Fajas',
    CLUTCH: 'Conjuntos de Clutch',
    CLUTCHDESC:"Plato, Disco y Rol",
    ACCESORIES:'Accesorios',
    ACCESORIESDESC:"Coolant, ceras, gazas, escobillas, abrillantadores, bombillos, entre otros",  
    BRANDS: "Trabajamos estas marcas de repuestos:",
    LOCATION: "Ubicación",
    LOCATIONSUB: 'Llegue fácilmente a nuestro punto de venta',
    CONTACT: 'Contacto',
    CONTACT2: 'Contáctenos',
    CONTACT3: 'Díganos cómo le podemos ayudar',
    CONTACT4: 'Su nombre *',
    CONTACT5: 'Por favor, ingrese su nombre',
    CONTACT6: 'Su correo electrónico *',
    CONTACT7: 'Por favor, ingrese su correo electrónico',
    CONTACT8: 'Su número de teléfono *',
    CONTACT9: 'Por favor, ingrese su número de teléfono',
    CONTACT10: 'Su mensaje *',
    CONTACT11: 'Por favor, ingrese su mensaje',
    CONTACT12: 'Enviar Mensaje',
    EXPRESS: 'Tenemos Servicio Express y de Encomienda a todo el País',
    BANK: 'Cuenta Cliente: 100 - 01 - 000 - 147585 - 4'
});
var lg = localStorage.getItem('lan') || 'es';
  $translateProvider.preferredLanguage(lg);
});

app.controller('MainCtrl', function ($scope, $translate) {
  angular.element(document).ready(function () {
    setTimeout(function () {
       $('#loading-div').fadeOut('slow');
    },1000);
      
    });
  $scope.language = localStorage.getItem('lan') || 'es';
  $scope.changeLanguage = function (key) {
    $scope.language = key;
    localStorage.setItem('lan',$scope.language);
    $translate.use(key);
  };
});

