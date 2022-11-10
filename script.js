let str1 = "Lorem ipsum dolor spAm amet consectetur.";
let str2 = "Lorem ipsum dolor sit amet consectetur.";

function replaceSpam(str) {
  let s = str.toLowerCase();
  let spam = "spam".toLowerCase();
  return s;
}

alert(replaceSpam(str1));
alert(replaceSpam(str2));
