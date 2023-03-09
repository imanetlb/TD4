function elementPlusFrequent(tab) {
  if (tab.length == 0) return null;

  var occurrences = {};

  for (var i = 0; i < tab.length; i++) {
    var element = tab[i];
    if (occurrences[element]) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  }
  var elementPlusFreq = null;
  var maxOccurrences = 0;
  for (var element in occurrences) {
    if (occurrences[element] > maxOccurrences) {
      maxOccurrences = occurrences[element];
      elementPlusFreq = element;
    }
  }

  return elementPlusFreq + " (" + maxOccurrences + " fois)";
}


function dernier(tab, n) {
  if (n == null) {
    return tab[tab.length - 1];
  } else if (n >= tab.length) {
    return tab;
  } else {
    return tab.slice(tab.length - n);
  }
}