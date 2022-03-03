const englishCode = "en-US";
const spanishCode = "es-ES";
const estonianCode = "et";
const czechcode = "cs";

// some comment
function getAboutUsLink(language) {
  switch (language.toLowerCase()) {
    case englishCode.toLowerCase():
      return '/about-us';
    case spanishCode.toLowerCase():
      return '/acerca-de';
    case estonianCode.toLowerCase():
      return '/meist';
    case czechcode.toLowerCase():
      return '/o nás';
  }
  return '';
}

module.exports = getAboutUsLink;
