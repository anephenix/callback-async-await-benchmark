# Node.js callbacks and async/await benchmark

A benchmark of Node.js callbacks and async/await.

### Introduction

This is an attempt to understand how the new async/await feature of Node.js performs compared to callbacks.

The idea was to try and write some simple functions that were as identical as possible, and to then use Node's new performance hooks API to measure the time it takes to execute those functions.

There are currently 2 files that contain the functions:

- asyncAwait.js
- callback.js

These are tested indivdually by these files:

- testAsyncAwait.js
- testCallback.js

The test by running these commands:

```
node testAsyncAwait.js >> test_async_await_results.csv
```
and
```
node testCallback.js >> test_callback_results.csv
```

Only a single execution of the function occurs in the script, and we call the script many times in order to collect a number of results for statistical analysis.

What currently remains is to automate executing multiple runs of the scripts and to provide a nice way to compare the results. My plan is to do some statistical analysis of the data (i.e. variance and standard deviation), and to graph the results in a way that allows us to compare callbacks to async/await. 
