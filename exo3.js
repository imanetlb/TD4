function estPalindrome(chaine) {
  chaine = chaine.toLowerCase().replace(/[^a-z]/g, '');
  
  for (var i = 0, j = chaine.length - 1; i < j; i++, j--) {
    if (chaine[i] !== chaine[j]) {
      return false;
    }
  }
  
  return true;
}

function trierCaracteres(chaine) {
  return chaine.split('').sort().join('');
}

function motLePlusCourt(chaine) {
  const mots = chaine.split(' ');
  
  let motPlusCourt = mots[0];
  let position = 1;
  
  for (let i = 1; i < mots.length; i++) {
    if (mots[i].length < motPlusCourt.length) {
      motPlusCourt = mots[i];
      position = i+1;
    }
  }
  
  return {mot: motPlusCourt, position: position};
}

function inverseCase(chaine) {
  let result = "";
  for (let i = 0; i < chaine.length; i++) {
    const lettre = chaine[i];
    if (lettre === lettre.toUpperCase()) {
      result += lettre.toLowerCase();
    } else {
      result += lettre.toUpperCase();
    }
  }
  return result;
}