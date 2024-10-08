// import * as BreweryData from "../data/breweries.json";

import * as LocalizedStrings from "../locales/en/content.json";

import i18n from "../i18n";

export function changeLanguage(lng) {
  i18n.changeLanguage(lng);
}
export function getCurrentLanguage() {
  return i18n.languages[0];
}
// export function getBreweries()
// {
//   return BreweryData.breweries;
// }

export function getBreweryLocaleString(resourceId) {
  //console.log('Localized String for: ', resourceId,' is ',  LocalizedStrings.brewery[resourceId]) ;
  return LocalizedStrings.brewery[resourceId];
}

// export function getBreweryById(id) {
//   let brewery = BreweryData.breweries.filter(brewery => {
//     if (brewery.id === id) return true;
//   });
//   return brewery.length > 0 ? brewery[0] : null;
// }

export function isMobile() {
  var mobile = false;
  var x = window.matchMedia("(max-width: 767px)");
  var y = window.matchMedia("(max-width: 719px)");
  var z = window.matchMedia("(max-width: 479px)");
  var w = window.matchMedia("(max-width: 419px)");
  if (x.matches || y.matches || z.matches || w.matches) {
    mobile = true;
  }
  return mobile;
}

export function validateEmailAddress(email) {
  let lastAtPos = email.lastIndexOf("@");
  let lastDotPos = email.lastIndexOf(".");

  if (
    !(
      lastAtPos < lastDotPos &&
      lastAtPos > 0 &&
      email.indexOf("@@") === -1 &&
      lastDotPos > 2 &&
      email.length - lastDotPos > 2
    )
  ) {
    return false;
  }
  return true;
}
