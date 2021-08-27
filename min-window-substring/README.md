<img src="https://coderbytestaticimages.s3.amazonaws.com/consumer-v2/nav/coderbyte_logo_digital_multi_light.png" width="300" />

# Min Window Substring
Have the function `MinWindowSubstring(strArr)` take the array of strings stored in `strArr`, which will contain only two strings, the first parameter being the string `N` and 
the second parameter being a string `K` of some characters, and your goal is to determine the smallest substring of `N` that contains all the characters in `K`. 
For example: if `strArr` is `["aaabaaddae", "aed"]` then the smallest substring of `N` that contains the characters `a`, `e`, and `d` is `"dae"` located at the end of the string. 
So for this example your program should return the string `dae`.

Another example: if `strArr` is `["aabdccdbcacd", "aad"]` then the smallest substring of `N` that contains all of the characters in `K` is `"aabd"` which is located at 
the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of `K`'s characters will exist somewhere in the string `N`. 
Both strings will only contains lowercase alphabetic characters.

## Examples
```
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
```

```
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
```
## Tags
`string manipulation` `searching` `hash table` `Google` `Facebook` `Amazon`

## Solution
View [solution.js](https://github.com/udede/coderbyte/blob/main/min-window-substring/solution.js)
