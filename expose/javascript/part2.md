1. After the for loop is done running, line 12 will print out the length of the prices array which is three.
2. Line 13 will print out, 150 as that is the discounted price of the final value and the array (which is 300) before rounding occurs.
3. Line 14 will still be 150 as it is the rounded version of discountedPrice which is still 150
4. It should return an array of each of the prices, but at a discounted rate and rounded off([ 50, 100, 150 ])
5. We have an error, because i is local to (only exists within) the for loop. 
6. We have an error, because discountedPrice is local to (only exists within) the for loop. 
7. It will print out 150 because it is the last final price calculated in the for loop. 300 divided by 2.
8. It should return an array of each of the prices after discount = ([ 50, 100, 150 ]).
9. Since let is being used to declare “i” and “i” is considered part of the block it no longer exists outside of the block and will result in an error on line 11.
10. It prints out three as that is the length of the prices array. This variable can be seen within the function block as that is where it is defined and printed from.
11. The function returns the array of the discounted prices [ 50, 100, 150 ].
12. Given the above Object, write the notation for: 
    1. student.name;
    2. student['Grad Year’];
    3. student.greeting();
    4. student['Favorite Teacher'].name;
    5. student.courseLoad[0];

13. Arithmetic
    A. Output: ’32’ because the 2 is converted to a string and then it is concatenated with the number 3.
    B. Output: 1 Because with subtraction, the string is converted to a number, and then the calculation is finalized, which would equal the number one.
    C. Output: 3 because null is treated as a 0 when added to another number.
    D. Output: ‘3null’ because the null is converted to a string and concatenated to the 3
    E. Output: 4 because True in number form is 1 so it results in the number four.
    F. Output: 0 Because false will convert to zero and null will convert to zero resulting in the number total of zero.
    G. Output: ‘3undefined’ because using the + operator with a string will convert undefined to a string and concatenate it to the string 3.
    H. Output: NaN because both the 3 and undefined will be converted to numbers but 3 - undefined is NaN.
14. Comparison
    A. Output: true because the string 2 is converted to a number and is indeed bigger than 1.
    B. Output: true because the strings will be converted to numbers, and 2 is indeed smaller than 12.
    C. Output: true because the string 2 will be converted to a number and 2 is indeed equal to 2.
    D. Output: False because both type and value equality are taken into account with the strict equal operator.
    E. Output: False because when true is converted to a number, it is 1 and 1 is not equal to 2.
    F. Output: True because Boolean(2) converts the true since it is a non-zero number.
15. The == operator performs a type conversion and then compares the values and === compared the type and value without conversion.


17. The modify array is defined so that you pass an array into it and you also pass another function into it. The function being passed into it is called doSomething while the array contains three elements, [1,2,3]. what ModifyArray does with these parameters is that it takes the array and it passes each element from the array into the function passed through in the second parameter of ModifyArray and each value is pushed onto a new array. The function passed through the second parameter is called doSomething which takes a number and doubles it/multiplies it by two. This means that our array of 1, 2, 3 will result in an array of 2, 4, 6.

 
19. 1
    4 
    3 
    2