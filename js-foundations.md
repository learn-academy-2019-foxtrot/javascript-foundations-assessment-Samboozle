# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

-> expect to see "outside" on first function call because it prints the existing variable before reassigning it. upon a subsequent calls, should return "inside," since that's what's now stored in the text variable.

1b. Test the function. Explain why the function returned what it did.

  Your answer:
    missed the interfering "var" keyword inside the function call - not simple reassignment as would be the case with 'text = 'inside''. Appears to cause scoping issues.

  Researched answer: Scoping issues!

2. What is JSON?

  Your answer: a notation system for declaring objects and properties.

  Researched answer: Stands for JavaScript Object Notation. While written using javascript notation, it is apparently used as a standard object notation for projects of many types in many languages.


3. What does CRUD stand for?

  Your answer: Can't run; under development (/s forgot!)

  Researched answer: Create, read, update, delete - elements of 'persistence' in computer science field. Above my pay grade!



4. What are the 5 HTTP verbs?

  Your answer: I do not know!

  Researched answer: Found more than 5, so I'm not sure which 5 are the most important!
    request methods:
    GET; HEAD; POST; PUT; DELETE; TRACE; OPTIONS; CONNECT; PATCH


5. What is a higher-order function?

  Your answer: pre-conceived methods for certain prototypical data structures (e.g., map/filter/reduce for arrays) that can perform multifaceted tasks on those structures.

  Researched answer: from wikipedia:

  In mathematics and computer science, a higher-order function is a function that does at least one of the following:

    -takes one or more functions as arguments (i.e. procedural parameters),
    -returns a function as its result.

  Neato!


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: Not sure -- sounds like lingo from the 'functional programming' world. Perhaps it's the principal or technique Clojure was named for?

  Researched answer: from wikipedia:

  In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. Operationally, a closure is a record storing a function[a] together with an environment.

  I'll have to chew on that for a while!


7. STRETCH: What is an API?

  Your answer: Again, I'm not sure!

  Researched answer: from wikipedia:

  An application programming interface is an interface or communication protocol between a client and a server intended to simplify the building of client-side software.

  Is an API a type of library or framework? Or is it something else altogether?


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

If you could have one exotic pet, what would it be?


2. What was your favorite topic this week?

Patience!


3. What was your "A-ha!" moment this week?
None quite yet!
