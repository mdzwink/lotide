# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mdzwink/lotide`

**Require it:**

`const _ = require('@mdzwink/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`:  Returns the head of an array (value at index 0)
* `tail(...)`: Returns the tail of an array (every value excluding the head value)  
* `middle(...)`:  Returns the middle most value(s) in a given array.
* `assertArraysEqual(...)`:  Tests if the values and order of two given arrays are equal and logs confirmation of whether or not they are.
* `assertEqual(...)`:  Tests if two given values are equal and logs confirmation of whether or not they are.
* `countOnly(...)`:  Given an array and an object returns a new array. New array includes values present in both the array and object and a count of how many times the values in the object apear in the array
* `eqArrays(...)`:  Tests if the values of two arrays are identical. Returns true if yes and false if not.
* `map(...)`:  Takes an array and a callback function. Loops through array and runs each value through callback function. Returns new array with return value of callback function. 
* `without(...)`:  Takes in two array. Returns a new array containing only the values not present in the second array.
* `assertObjectsEqual(...)`:  Tests if two given objects are identical and logs confirmation of whether or not they are.
* `countLetters(...)`:  Returns an object with each letter in a given string as a key with a value showing the number of time that letter appears in the string.
* `eqObjects(...)`: Tests if two given objects are identical and true if they are and false if they are not. 
* `findKey(...)`:  Takes an object and a callback function. Returns the first key that evaluates to true when passed through given callback function.
* `findKeyByValue(...)`:  Takes an object and a value. Returns the first key that stores a value equal to given value.
* `letterPositions(...)`:  Takes a string and returns an object with each letter as a key and an array containing each index at which that letter appears in the given string.
* `takeUntil(...)`: Takes an array and a callback function. Inputs each value from array into callback function and pushes same value into new array until callback evaluates to true.  Returns new array.
