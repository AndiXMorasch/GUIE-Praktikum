function checkForm() {
  var vorname = (document.Formular.vorname.value);
  var name = (document.Formular.name.value);
  var straße = (document.Formular.straße.value);
  var plz = (document.Formular.plz.value);
  var ort = (document.Formular.ort.value);
  var geschlecht = (document.Formular.gender.value);
  var noten = (document.Formular.noten.value);
  var abschluss = (document.Formular.abschluss.value);
  var abschlussanzeige = abschlussanzeige;
  if (abschluss == "") {
  abschlussanzeige = "-"; }
  else {abschlussanzeige = document.Formular.abschluss.value}

  var email = (document.Formular.email.value);
  var emailanzeige = emailanzeige;
  if (email == "") {
  emailanzeige = "-"; }
  else {emailanzeige = document.Formular.email.value}

  var handy = (document.Formular.handy.value);
  var handyanzeige = handyanzeige;
  if (handy == "") {
  handyanzeige = "-"; }
  else {handyanzeige = document.Formular.handy.value}

  var bemerkungen = (document.Formular.bemerkungen.value);
  var bemerkungenanzeige = bemerkungenanzeige;
  if (bemerkungen == "") {
  bemerkungenanzeige = "-"; }
  else {bemerkungenanzeige = document.Formular.bemerkungen.value}


  alert("Formular Inhalt\n" + "Vorname: " + vorname
  + "\nNachname: " + name
  + "\nStraße: " + straße
  + "\nPLZ: " + plz
  + "\nOrt: " + ort
  + "\nGeschlecht: " + geschlecht
  + "\nNote: " + noten
  + "\nAbschluss: " + abschlussanzeige
  + "\nE-Mail: " + emailanzeige
  + "\nHandy: " + handyanzeige
  + "\nBemerkungen: " + bemerkungenanzeige);
}

//Quellen: https://www.w3schools.com/jsref/met_win_alert.asp
// https://www.w3schools.com/howto/howto_js_alert.asp
// https://wiki.selfhtml.org/wiki/JavaScript/Window/alert
