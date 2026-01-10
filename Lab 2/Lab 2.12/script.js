
function checkPalindrome(form) {
    var originalString = form.userString.value;
    var isCaseSensitive = form.caseSensitive.checked;

    var modifiedString = isCaseSensitive ? originalString : originalString.toLowerCase();

    var reversedString = modifiedString.split('').reverse().join('');

    if (modifiedString === reversedString) {
        alert("Success! '" + originalString + "' is a palindrome.");
    } else {
        alert("Sorry! '" + originalString + "' is NOT a palindrome.");
    }
    return false;
}