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
> Stolen shamelessly from  https://www.kapravelos.com/teaching/csc405-s21/readings/linux-setup/ 

>*posted by Alex Nahapetyan*

There have been a few questions about what environment to use for assembling code/future 1337 things this semester! So in this post, I will try to cover all grounds based on what you have available to you. (Last option is my personal recommendation)

![XKCD comic 456](https://imgs.xkcd.com/comics/cautionary.png)

__Note: You do NOT need to have this setup! You can install popOS on an old laptop or build Gentoo Linux from the source. You should choose a setup for this semester (especially for the CTF) you are comfortable with, and your computer can support it! (and a setup that can get the job done)__

## _I have a toaster, can't run anything past chrome?_

I would go with VLC! All you need to do is reserve an Ubuntu VM (`Ubuntu 18.04` image) and run these commands.
```
sudo dpkg --add-architecture i386 # Add MultiArch support
sudo apt update # update everything
sudo apt install -y gcc gcc-multilib gdb nasm vim # install gcc and nasm to compile code, gdb because it will come in handy later hint-hint, and vim if you want to edit code using it
```

I personally would <a href="https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh"> scp </a> your code over to VLC and then <a href="https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh"> scp </a> it back when you are done.

And you can look at this <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" >VSCode plugin</a> if you don't want to use Vim!

Based on past posts, you can see that you won't be able to use the EOS system, but feel free to use the AFS lockers to back up your work (`/afs/unity.ncsu.edu/users/<first letter from UnityID>/<UnityID>`).

## _I have a decent computer with at least 6GB of ram and 4 cores_

You have the same option as above, but you can set up your own VM to test things on. Perks include the fact that you can drag and drop things, you can interact with the GUI, and no need to make sure all your stuff is backed up.

You can get Vmware Workstation (Fusion if you are on a mac) [from here](https://www.csc.ncsu.edu/vmap/)

[VirtualBox](https://www.virtualbox.org/) is a free alternative if you're an NCSU student: 

There are a few options for Linux Distros. Kali and Parrot both come pre-equipted with some security tools out of the gate, but it's up to you what you want to use. Most distros provide OVA files that you can plug in directly into Virtualbox/VMWare

- [Kali](https://www.kali.org/get-kali/#kali-virtual-machines)
- [Parrot](https://www.parrotsec.org/)
- [Ubuntu](https://ubuntu.com/)

<a href="https://help.okta.com/en/prod/Content/Topics/Access-Gateway/deploy-vmwareworkstation.htm"> How to import an OVA file VMware</a>


<a href="https://github.com/pwndbg/pwndbg">pwngdb</a> an awesome gdb plugin for reverse engineering (super helpful later on) is installed on this VM but disabled by default. To enable remove the `"` at the beginning of the _~/.gdbinit_.


## The Virtual Machine is really slow/laggy; any other options? (Personal recommendation!)

We are going to use <a href="https://www.vagrantup.com/"> Vagrant </a> to configure a Linux server to run-on <a href="https://www.virtualbox.org/" >Virtualbox</a>.

So you will SSH into this VM when you need a Linux shell, and we will share a folder with it, so you can edit your code/modify binaries on your host machine, and you just run them over ssh.

This one will be the easiest to use once you set it up!

1. Download and install <a href="https://www.virtualbox.org/" > Virtualbox </a>.
2. Install and verify installation for vagrant by following <a href="https://learn.hashicorp.com/tutorials/vagrant/getting-started-install?in=vagrant/getting-started">this guide</a>.
3. Download <a href="https://drive.google.com/file/d/1OG8pqip5zRKR_E1EjOkiIf2dMD8kekAZ/view?usp=sharing">this</a> vagrant file
4. Put that file in the same folder you want to be shared with your VM.
5. Open up a command prompt (terminal or cmd), `cd` to that folder, and type `vagrant up`.
6. Type `vagrant ssh` to ssh into the Linux box, and there you go! Now you have a working Linux VM you are SSHed in. The shared folder is in `/data`

Any time you need a Linux shell, you can just `cd` to that folder and then type `vagrant ssh`.

<a href="https://github.com/pwndbg/pwndbg">pwngdb</a> an awesome gdb plugin for reverse engineering (super helpful later on) is installed on this VM if you would like to disable it, add a `"` at the beginning of the _~/.gdbinit_.

# 🌐 Web Challenges

Web challenges are generally are vulnerable websites or internet-agencent systems. Attacks that appear often are [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) and [SQL Injection](https://portswigger.net/web-security/sql-injection) attacks, to name a few. Often, the goal in a web challenge is login as admin or stealing an admin's session cookie.

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

# 🔬 Reverse Engineering (rev)

Reverse Engineering (Rev) challenges are generally logic puzzles (reversing crypto alto’s without the math), game hacking, crack me programs, flag checkers, homemade languages, and reversing obscure architectures. 

Reverse engineering is generally the category with the least amount of people participating in it, this is partly due to difficulty and partly due to most people who are good at reverse engineering going to pwn. 

## How to Learn:

### Practice, Practice, Practice. 
- Reverse engineering is extremely time consuming, especially when you start, but as you practice you will start recognizing pattern and get faster each time.
- Almost all good Reverse engineering challenges will be unique and will require that you will need to learn about something new, this skill improves as you practice.
- You can practice lots of challenges [here](https://github.com/Kasimir123/CTFWriteUps). All the challenges are rated for difficulty and each challenge has the original files and a writeup.

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


### If you're interested in the Game GuidedHacking is an amazing forum with a lot of information about game hacking.
- Always remember to only hack things you have permission to hack/ try to stay on single player games to stay safe.
- Following their tutorials and hacking various games you get exposure to multiple architectures, learn reverse engineering tricks, and you will learn about how to get around anti debug code.

# 💀 Binary Exploitation (Pwn)

Binary Exploitation (pwn) challenges involve finding and exploiting vulnerabilities in executable programs, typically to gain a remote shell. Pwn challenges tend to have a higher learning curve than the other categories. A familiar understanding of Linux, C, assembly, are recommended before doing pwn challenges.

## Learning Resources
- Learn Assembly and C
  - [Comparing C to Machine Language](https://www.youtube.com/watch?v=yOyaJXpAYZQ)
- Learn about the stack and calling conventions
- [LiveOverflow's Binary Exploitation Playlist](https://www.youtube.com/watch?v=iyAyN3GFM7A&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN) - This playlist is an incredible resource for learning binary exploitation, and will walk you through nearly all techniques used in entry-mid level pwn challenges

## Practice
- [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/) - For getting familiar with Linux commands
- [OverTheWire - Narnia](https://overthewire.org/wargames/narnia/) - For practicing basic binary exploitation
- [Exploit Eductation - Phoenix](https://exploit.education/phoenix/) - Introduces exploits of increasing difficulty
- [Pico Gym](https://play.picoctf.org/practice?category=6&page=1) - Archives challenges from past PicoCTF competitions and has great beginner binary exploitation challenges

## Must-Have Tools
- [Ghidra](https://ghidra-sre.org/) - for light reverse engineering to find vulnerability
- [GDB](http://www.unknownroad.com/rtfm/gdbtut/gdbtoc.html) - for tracing how the program handles your input
- [Pwntools](https://github.com/Gallopsled/pwntools) - A Python library for Pwn solution scripts. Useful for sending/receiving input, reading memory, and more.



# 🔒 Cryptography (crypto)

## What is this category?

Most of modern cryptography deals with the **encoding**, **encryption**, and **authentication** of data traffic. Think of browsing the web, bank transfers, communication applications, etc. Our first goal is to have our data encrypted such that only those with the appropriate keys can decrypt it. Secondly, we need to find a way for us to be sure an encrypted message indeed came from whom we think it came from and vice versa. As you can imagine, this proves to be easier said than done. During CTFs, you will be confronted with insecure algorithms proving exactly this. You will have to investigate and make sense of any provided source code, look for potential vulnerabilities, and finally exploit the algorithm to work your way to the flag.

## What knowledge do I need _right now_ to get started?

Do not be put off by the maths behind cryptography. Aside from highschool maths, a quick introduction into modular arithmetic should be enough to get you started. When you are ready to dive further in, some number- and group theory, linear algebra, and elliptic curve arithmetic will do wonders for you.

What about cryptographic knowledge? There are many exotic cryptosystems and even the most common ones have plenty of variants. Therefore it is probably best to learn about these along the way. However, almost all CTFs will include at least some challenges based on, but not limited to, the following cryptographic primitives:

- [XOR](https://ctf101.org/cryptography/what-is-xor/) ciphers, which use only bitwise and/or integer operations,
- [RSA](https://blog.sigmaprime.io/introduction-to-rsa.html), a public key cryptosystem with many potential [vulnerabilities](https://crypto.stanford.edu/~dabo/papers/RSA-survey.pdf),
- [AES](https://www.youtube.com/watch?v=O4xNJsjtN6E), a symmetric block cipher with various [modes of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation),
- [ECC](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/), based on elliptic curve arithmetic with its commonly used signature scheme [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm).

The best way to hone your cryptography skills is through practice! Try your luck in beginner-focused CTFs, look for archived challenges on [CTFtime](https://ctftime.org), or check out [CryptoHack](https://cryptohack.org).

## What tools do I need to be successful?

Pen, paper, and Python is really all you need, although some experience with [Sage](https://doc.sagemath.org/html/en/tutorial/introduction.html) (a more math-focused extension of Python) might prove useful. Usually all attacks and exploits can be written from scratch well within the duration of the CTF. No external tools are required, although the use of existing third-party scripts is generally allowed.