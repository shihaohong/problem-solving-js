# Problem-Solving Workshop

Author: Shi-Hao Hong (@shihaohong)

This repository is created with the hopes of improving the problem-solving process, particularly with programming problems. The repo works solely with JavaScript problems, but can be applied to any other situation/language in terms of the process.

# How to use repo:

First, read the README file and then attempt the problems provided in the src file using most, if not all, of the strategies on the README.md. 

# Technique

There are many ways to go about coming up with a solution to a problem. Of course, each person has their methods that work for them, and the goal of this exercise is to get some practice with some really good problem-solving strategies.

One might argue that these processes/steps take too long and are unnecessary. I would agree with you if I've: 

a) come across the problem before, or 
b) that the problem seems rudimentary. 

However, the goal is to instill these problem-solving strategies into you so that when you do face a harder problem, you will have the tools necessary to dissect and disarm your predicament! The reason the problems in this repo are going to be on the easier side is so that you focus on the problem solving strategies rather than the problem themselves.

## 1) I.O.C.E

Before starting the problem, listing out the input, output, constraints and edge cases (IOCE) of your problem will help frame the solution to your problem. 

## 2) Using example cases (Simulation)

It can help you to imagine inserting certain inputs into your function and knowing the outputs to those inputs. This can help you visualize what work needs to happen within your function and help you come up with edge cases and constraints should you run into them. This step can help you refine your IOCE, and prevent you from coding up non-ideal solutions to your problem.

example for the add function: 
add(1, 3) // 4; 
add(-4, -10) // -14

## 3) Brute Force

Some problems may want you to solve your problem with constraints (e.g. Please use constant time to...). When the solution seems obvious to you, this step is unnecessary. However, if you're stuck, doing it the brute force method could help you unearth some inspiration in getting the ideal method for your problem! 

## 4) Pseudocode

Pseudocoding is EXTREMELY helpful with figuring out if your thought process is necessary. Given that you're familiar with your programming language's methods, pseudocoding can create a roadmap of sorts to see if your approach can bring you to the right solution. This part of the process should take a long time, since this is where all your thinking is happening. If done correctly, actually coding up your solution should take a matter of seconds!

## 5) Whiteboarding

Whiteboarding is another great tool when problem solving. Putting out your thoughts onto a physical medium can help you flush out your thoughts, especially when you frame it in multiple different ways. Whiteboarding can be used for drawing out visualizations of your problem, pseudocoding, and even simulating your problem. 

For example, you can simulate a recursion solution on the whiteboard by out the call stacks for each recursive call and then tracing it back to see how your function would behave (try it with factorial!).

## 6) Logging your progress

When you're struggling with your solution despite feeling strongly that your logic is sound, well-placed console.logs can make or break your day. It takes one well-placed console.log to fix a very silly bug in your algorithm. Chrome Dev Tools.... watch statements, conditional breakpoints... 
