---
layout: page
title: Learn
permalink: /learn/
toc: true
---

# Getting Started

## What is a CTF?
<iframe width="560" height="315" src="https://www.youtube.com/embed/8ev9ZX9J45A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## What tools do I need?

Tools can vary widly from depending on the type. However, for most challenges, this is what we recommend:

## [Python](https://www.python.org/)

Python is convient for programmatically solving challenges or automating the boring stuff. It's recommended to get familiar with the fundamentals of the language.

As with everything here, the best way to learn is to practice.

If you're already familiar with python, here are some useful libraries we recommend:

### [pwntools](https://docs.pwntools.com/en/latest/)
Pwntools automates a lot of boilerplate code one would need for binary exploitation challenges:

```python
>>> from pwn import *
>>> conn = remote('ftp.ubuntu.com',21)
>>> conn.recvline()
b'Please dont pwn me'
>>> conn.send(malicious_payload)
>>> conn.interactive()
b'eeek, ive been hacked'
$ echo 'gotcha' # <--- interactive shell!
```

### [Z3Py](https://pypi.org/project/z3-solver/)

Z3 is a constratins solver, which can be useful for a variety of challenges. Essentially, you give Z3 a list of constraints and it will spit out a solution:

```python
>>> x = Int('x')
>>> y = Int('y')
>>> solve(x > 2, y < 10, x + 2*y == 7)
[y = 0, x = 7]

>>> p = Bool('p')
>>> q = Bool('q')
>>> r = Bool('r')
>>> solve(Implies(p, q), r == Not(q), Or(Not(p), r))
[q = True, p = False, r = False]
```

## Linux Machine
You need a Linux machine because reasons. Here are some 

### WSL

If you're using Windows, Window's Subsystem for Linux (or WSL) is a great way to use Linux. (expand)

### Virtual Box / VMWare

This is probably the best way, but it take some fiddling (expand)

# 🌐 Web Challenges

Web challenges are generally are vulnerable websites or internet-agencent systems. Vulnerabilities that appear often are [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) and [SQL Injection](https://portswigger.net/web-security/sql-injection), to name a few. Often, the goal in a web challenge is login as admin or stealing an admin's session cookie.

Web challenges are a good place to start if you've never done a CTF, as they require less setup and most people know some of the basics of the web and websites work.

## Must-Have Tools
### [Browser Devtools](https://developer.chrome.com/docs/devtools/overview/#discover)
You already have this installed! Press `F12` in your browser, and you're half-way to becoming a `l33t h4x0r`. 

The most important tabs are:
- [Elements](https://developer.chrome.com/docs/devtools/overview/#elements) - View and change the DOM and CSS.
- [Console](https://developer.chrome.com/docs/devtools/overview/#console) - View messages and run JavaScript from the Console.
- [Network](https://developer.chrome.com/docs/devtools/overview/#network) - View and debug network activity.
- [Application](https://developer.chrome.com/docs/devtools/overview/#application) - Primarily useful for viewing the current page's cookies

The rest are generally not relevent to solving web challenges.

### [Burp Suite](https://portswigger.net/burp/communitydownload)
Burp allows you to intercept and edit requests coming from and going to your browser. 

Burp has a rich suite of tools and extentions, but the tool with the most immediate relevency is the **Proxy** tab. Using Burp's internal browser (or your browser, although this requires  a bit of setup)

When you open the browswer with the `Intercept is on` button enabled, you'll notice that your browswer pauses while loading and an HTTP request shows up in the Burp window:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close
```

This is the request the browser is trying to make. Hit the `Forward` button or turn the Intercept off and the browser will continue as normal.

This functionality allows you to bypass interacting with the UI of a website and send data directly to the server. For example, if you were testing a login page that doesn't allow certain characters. Using Burp you could make a dummy request, intercept it, and add the illegal characters to the request

```http
POST /login HTTP/1.1
Host: www.example.com
Connection: close
Content-Length: 73
Accept: application/json, text/javascript, */*; q=0.01
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Origin: www.example.com
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

email=admin@example.com &password=%27AND 1=1;-- SQL injection, anyone?
```

For more information about using Burp, [check out PortSwigger's tutorial](https://portswigger.net/burp/documentation/desktop/getting-started) 

# Reverse Engineering

Reverse Engineering (Rev) challenges are generally logic puzzles (reversing crypto alto’s without the math), game hacking, crack me programs, flag checkers, homemade languages, and reversing obscure architectures. 

Reverse engineering is generally the category with the least amount of people participating in it, this is partly due to difficulty and partly due to most people who are good at reverse engineering going to pwn. 

## Tools:

### Required Tools to start for free today

- [Ghidra](https://ghidra-sre.org/)
  - Use this to decompile binaries and executables
- [GDB](gnu.org/software/gdb/)
  - Useful for dynamic analysis
- [Hex Editor](https://hexed.it/)
  - Useful for editing binaries
- [**GOOGLE**](https://www.google.com/)
  - You will most likely know nothing about the challenge. That's one of the main componennts of reverse engineering. **Learn how to google or this category won't be fun for you.**

### More advanced tool classifications and usages

#### Static Analysis Tool
- Ghidra
- Radare2
- Binary Ninja
- Ida
#### Dynamic Analysis Tool
- GDB
- Binary Ninja
- Ida
#### Advanced Automatic solving tools
- [Angr](https://angr.io/)
  - Does everything you will try to do but better
  - Make a virtual environment in python or you will break your python
#### Must have python libraries
- [Pwntools](https://pypi.org/project/pwntools/)
  - Gives better access to the binaries when running scripts
- [Z3py Solver](https://pypi.org/project/z3-solver/)
  - Used to check satisfiability of equations
  - Useful for flag checker challenges
#### C# specific challenges
- [dnSpy](https://github.com/dnSpy/dnSpy)
  - Decompiles C#
  - Lets you edit the C# and when you save it will recompile for you
#### APK specific challenges
- [MobSF](https://mobsf.github.io/docs/#/)
  - All in one APK tool 
  - Extracts all APK data
  - Decompiles all java
  - Sets up emulation for dynamic analysis
#### Compiled python challenges
- [Uncompyle](https://pypi.org/project/uncompyle6/)
    - Decompiles compiled python bytecode
- [Pyinstxtractor](https://github.com/extremecoders-re/pyinstxtractor)
  - Used for extracting compiled python from executables and binaries made with pyinstaller

## How to Learn:

### Practice, Practice, Practice. 
- Reverse engineering is extremely time consuming, especially when you start, but as you practice you will start recognizing pattern and get faster each time.
- Almost all good Reverse engineering challenges will be unique and will require that you will need to learn about something new, this skill improves as you practice.
- You can practice lots of challenges [here](https://github.com/Kasimir123/CTFWriteUps). All the challenges are rated for difficulty and each challenge has the original files and a writeup.


### GuidedHacking is an amazing forum with a lot of information about game hacking.
- Always remember to only hack things you have permission to hack/ try to stay on single player games to stay safe.
- Following their tutorials and hacking various games you get exposure to multiple architectures, learn reverse engineering tricks, and you will learn about how to get around anti debug code.

# Binary Exploitation (Pwn)

Binary Exploitation (pwn) challenges involve finding and exploiting vulnerabilities in executable programs, typically to gain a remote shell. Pwn challenges tend to have a higher learning curve than the other categories. A familiar understanding of Linux, C, assembly, are recommended before doing pwn challenges.

## Learning Resources
- Learn Assembly and C
  - [Comparing C to Machine Language](https://www.youtube.com/watch?v=yOyaJXpAYZQ)
- Learn about the stack and calling conventions
- [LiveOverflow's Binary Exploitation Playlist](https://www.youtube.com/watch?v=iyAyN3GFM7A&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN) - This playlist is an incredible resource for learning binary exploitation, and will walk you through nearly all techniques used in entry-mid level pwn challenges

## Must-Have Tools
- [Ghidra](https://ghidra-sre.org/) - for light reverse engineering to find vulnerability
- [GDB](http://www.unknownroad.com/rtfm/gdbtut/gdbtoc.html) - for tracing how the program handles your input
- [Pwntools](https://github.com/Gallopsled/pwntools) - A Python library for Pwn solution scripts. Useful for sending/receiving input, reading memory, and more.



# Crypto

## Basic Ciphers

### Cesear Cipher

_What?_

[Ceaser Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is a simple substitution cipher where a specific number (the key) shifts the alphabet. For example, if the key were 3, A would turn into C, B into D (and so on). If the key was 26 (or 0) A would simply map to A.

_Why?_

It is straightforward to implement (implementation in your language of choice is left as an exercise to the reader). But it's also very easy to crack. 

_Weaknesses?_

### XOR

### Vigenere Cipher

### OTP

### Tools

## Advance Ciphers

### Hashes

### Block Ciphers

### Stream Siphers

### Public Key Crypo

### Tools

## Hashes

### MD5

### SHA256

### Tools