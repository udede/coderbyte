<img src="https://coderbytestaticimages.s3.amazonaws.com/consumer-v2/nav/coderbyte_logo_digital_multi_light.png" width="300" />

# Word Split
Have the function `WordSplit(strArr)` read the array of strings stored in `strArr`, which will contain 2 elements: the first element will be a sequence of characters, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: `strArr` can be: `["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]`. Your goal is to determine if the first element in the input can be split into two words, where both words exist in the dictionary that is provided in the second input. In this example, the first element can be split into two words: `hello` and `cat` because both of those words are in the dictionary.

Your program should return the two words that exist in the dictionary separated by a comma. So for the example above, your program should return `hello,cat`. There will only be one correct way to split the first element of characters into two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. The first element itself will never exist in the dictionary as a real word.

## Solution
View [solution.js](https://github.com/udede/coderbyte/blob/main/word-split/solution.js)
