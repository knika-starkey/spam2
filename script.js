let str1 = "Lorem ipsum dolor spAm amet consectetur.";
let str2 = "Lorem ipsum dolor sit amet consectetur.";

function check(...str) {
  let sOrig = [];
  let spam = "spam".toLowerCase();
  // /gi
  for (let i = 0; i < str.length; i++) {
    sOrig[i] = str[i].split(" ");

    for (let j = 0; j < sOrig[i].length; j++) {
      if (sOrig[i][j].toLowerCase() == spam) {
        sOrig[i][j] = "***";
      }
    }
    sOrig[i] = sOrig[i].join(" ");
  }

  return sOrig;
}

alert(check(str1, str2));
//alert(str1.split(" "));
