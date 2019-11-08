const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": " ",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Arrays
const navArray = [siteContent['nav']['nav-item-1'], siteContent['nav']['nav-item-2'], siteContent['nav']['nav-item-3'], siteContent['nav']['nav-item-4'], siteContent['nav']['nav-item-5'], siteContent['nav']['nav-item-6']];

const h4Arrays = [siteContent['main-content']['features-h4'], siteContent['main-content']['about-h4'], siteContent['main-content']['services-h4'], siteContent['main-content']['product-h4'], siteContent['main-content']['vision-h4'], siteContent['contact']['contact-h4'] ];

const mainContentArray =  [siteContent['main-content']['features-content'], siteContent['main-content']['about-content'], siteContent['main-content']['services-content'],siteContent['main-content']['product-content'], siteContent['main-content']['vision-content']];

const contactContentArray = [siteContent['contact']['address'], siteContent['contact']['phone'], siteContent['contact']['email']];

//Navigation
const navigationLinks = document.querySelectorAll('a');
const nav =  document.querySelector('nav');

navigationLinks.forEach((link, idx) => {
  link.style.color =  'green';
  link.textContent = navArray[idx];
});

///PREPEND NAV Link
const homeLink =  document.createElement('a');
nav.prepend(homeLink);
homeLink.setAttribute('href', '#');
homeLink.style.color =  'green';
homeLink.textContent='Home';

//APPEND NAV Link
const otherLink =  document.createElement('a');
nav.appendChild(otherLink);
otherLink.style.color =  'green';
otherLink.textContent = "Other";

///CTA
const ctaHeading = document.querySelector('h1');
ctaHeading.innerHTML = "Dom <br /> is <br /> Awesome";

const ctaBtn = document.querySelector('button');
ctaBtn.style.color= "black";
ctaBtn.innerHTML = siteContent['cta']['button'];

const ctaImg =  document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main-Content
const middleImg =  document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


// const test =  document.querySelectorAll('.text-content');
// test[0].childNodes[3].textContent
// console.log(test[0].childNodes[3]);

const mainContentTxt =  document.querySelectorAll('.text-content p');

mainContentTxt.forEach((element, idx) => {
  element.textContent = mainContentArray[idx];
});


//Content and Contact Headings
const h4Headings = document.querySelectorAll('h4');

h4Headings.forEach((heading, idx) => {
  heading.style.textAlign = 'left';
  heading.textContent = h4Arrays[idx];
});


//Contact 

const contactTxt =  document.querySelectorAll('.contact p');
contactTxt.forEach((element, idx) => {
  element.textContent = contactContentArray[idx];
});

//Footer
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];


