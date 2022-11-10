let str1 = "Lorem ipsum dolor spAm amet consectetur.";
let str2 = "Lorem ipsum dolor sit amet consectetur.";

function check(str) {
  let s = str.toLowerCase();
  let spam = "spam".toLowerCase();
  return s.includes(spam);
}

alert(check(str1));
alert(check(str2));
