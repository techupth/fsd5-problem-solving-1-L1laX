//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let check = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(check);
  let reveser = check.split("").toReversed().join("");
  console.log(reveser);

  return check === reveser;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
