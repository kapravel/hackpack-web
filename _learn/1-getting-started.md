---
  name: Getting Started
  tags: new
  description: Need help getting started with your setup, look no further!
  image: "/assets/learn/getting_started.jpg"
  permalink: /learn/getting_started
  layout: workshop
---
## What is a CTF?
<iframe width="560" height="315" src="https://www.youtube.com/embed/8ev9ZX9J45A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## What tools do I need?

Tools can vary widly from depending on the type. However, for most challenges, you will need:

- A way to run Python
- A text editor of your choice
- A way to run Linux in some capacity

**Q**: _Can I use Git Bash on Windows instead of installing Linux_

**A**: When you're using Git Bash, you're not _really_ running Linux. For some things, it doesn't really matter. However, if you work on binary challenges, Git Bash will not be sufficient

## Linux Virtual Machine

There have been a few questions about what environment to use for assembling code/future 1337 things this semester! So in this post, we try to cover all grounds based on what you have available to you.

![XKCD comic 456](https://imgs.xkcd.com/comics/cautionary.png)

__Note: You do NOT need to have this setup! Use what you have already, install popOS on an old laptop or build Gentoo Linux from the source. You should choose a setup for CTFs/classes you are comfortable with, and your computer can support it! (and a setup that can get the job done)__

### Use NCSU's Virtual Computing Lab (VCL)

If you don't have a laptop that can run VMs, go with [VCL](https://vcl.ncsu.edu/)! All you need to do is reserve a ParrotOS VM (`ParrotOS` image) and run these commands.

You can use `rsync` and `scp` to transfer files to and from the VCL. 

### Use your own VM

You can set up your own VM to test things on. Perks include the fact that you can drag and drop things, you can interact with the GUI, and no need to make sure all your stuff is backed up.

[VirtualBox](https://www.virtualbox.org/) is a free alternative if you're an NCSU student. If you have a macos, use [Orbstack](https://orbstack.dev/) to get a Linux x86-64 bit VM up and running in seconds.

There are a few options for Linux Distros. Kali and Parrot both come pre-equipted with some security tools out of the gate, but it's up to you what you want to use.

- [Parrot](https://www.parrotsec.org/download)
- [Kali](https://www.kali.org/get-kali/#kali-virtual-machines)
- [Ubuntu](https://ubuntu.com/)

## [pwndbg](https://github.com/pwndbg/pwndbg)
`pwngdb` an awesome gdb plugin for reverse engineering (super helpful later on) is installed on this VM if you would like to disable it, add a `"` at the beginning of the _~/.gdbinit_.


## [pwntools](https://docs.pwntools.com/en/latest/)
`pwntools` automates a lot of boilerplate code one would need for binary exploitation challenges:

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

## [Z3Py](https://pypi.org/project/z3-solver/)

Z3 is a constrain solver, which can be useful for a variety of challenges. Essentially, you give Z3 a list of constraints and it will spit out a solution:

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
