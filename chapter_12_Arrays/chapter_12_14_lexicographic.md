What lexicographic means

Lexicographic (also called "dictionary order") is comparing two values as sequences of characters, left to right, instead of as whole numbers. It's the same rule your brain uses to alphabetise words.

The algorithm is: compare the first character of each. If they differ, whichever character comes earlier in the character set wins and we stop. If they're equal, move to the next pair. If one string ends while the other still has characters, the shorter one comes first.

What sort() actually does

fruits.sort() and nums.sort() are the same function. With no argument, sort() does two things:

Converts each element to a string (numbers get String(10) → "10")
Compares those strings lexicographically
It never looks at the values as numbers.

Applied to your fruits

⧉
["banana", "apple", "cherry"]  →  ["apple", "banana", "cherry"]
"banana" vs "apple": 'b' vs 'a' → 'a' wins → apple goes first
"banana" vs "cherry": 'b' vs 'c' → banana first
This is correct because the strings already read the way you'd expect.

Applied to your nums = [10, 1, 21, 2]

Here it breaks, because the numbers become strings "10", "1", "21", "2", and the comparison is done character by character:

"1" vs "10": the '1's match, then "1" runs out → shorter string wins → "1" < "10"
"10" vs "2": first characters are '1' vs '2'. '1' is earlier → "10" < "2"
"2" vs "21": match on '2', then "2" runs out → "2" < "21"
Result:

⧉
nums default sort : [ 1, 10, 2, 21 ]   ← lexicographic (string order)
nums numeric sort : [ 1, 2, 10, 21 ]   ← what you'd expect as numbers
10 ends up before 2 even though 10 is bigger — because only the first digit, '1' vs '2', was ever compared.

How to fix it

Pass a comparison function that decides the order yourself:

⧉
nums.sort((a, b) => a - b);   // ascending: [1, 2, 10, 21]
nums.sort((a, b) => b - a);   // descending: [21, 10, 2, 1]
Negative return means "a goes first", positive means "b goes first", zero means "leave as is".

Two gotchas worth remembering

Case matters. UTF-16 orders all uppercase letters before lowercase, so ["banana","Apple"] sorts to ["Apple","banana"] — 'A' (65) < 'b' (98). Normalise first if you don't want that: sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).
sort() mutates the original array and returns a reference to the same array — it isn't a copy. That's why line 3 changes what line 4 prints. If you need to keep the original, [...nums].sort(...) first.