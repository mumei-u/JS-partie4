/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    // donner la taille d'une chaine de caractère
    return texte.length;
}
var remplaceECar = function (texte) {
    // remplacer une lettre par un space ou autres..
    return texte.replace('e', ' ');
}
var concatString = function (texte1, texte2) {
    // rassembler les deux textes
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    // affcicher un caractère précis
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    // aficher certaines lettres seulement avec 'slice' mais aussi 'substring'
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    // chaine en majuscule
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    // chaine en minuscule
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    // La méthode trim() permet de retirer les blancs en début et fin de chaîne.
    return texte.trim();
}
var IsString = function (texte) {
  // envoie true si le para-texte est du type(typeof) string
  return typeof texte == 'string';
}
var AfficherExtensionString = function (texte) {
    // extraire une extension du nom de fichier
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
  // compter le nombre d'espace dans une chaine de
    return texte.split(' ').length - 1;
;
}
var InverseString = function (texte) {
  // ceci inverse une chaine de caractère
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    // La fonction Math.pow() renvoie un nombre à une certaine puissance
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    // La fonction Math.abs() retourne la valeur absolue d'un nombre, c'est-à-dire
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  // boucle permettant d'Afficher les valeurs absolues de plusieurs nombres
  /*for (var i = 0; i < array.length; i++) {
      array[i] = Math.abs(array[i])
    };*/
    // version simplifié
    return array.map(Math.abs)
}
var sufaceCercle = function (rayon) {
    // Calcule de la surface d'un cercle en fonction de son rayon. arrondi à l'entier le plus proche
    return Math.ceil(Math.PI * Math.pow(rayon,2));
}
var hypothenuse = function (ab, ac) {
    // ceci calcule l'hypoténuse d'un triangle rectangle
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
  return Number((poids / (taille * taille)).toFixed(2));
}
