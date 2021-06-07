---
title: "picoGym RE, Part IV: Assembly #4"
name: intro_to_re_04
file_path: /challenge_files/intro_to_re/asm4.S
flag_MD5: 8eaed559146b3f2a013abadf6eca7b68 # 0x20c
flag_format: 0x...
---
<h4>Original Description</h4>
<p>What will <code>asm4("picoCTF_724a2")</code> return?
Submit the flag as a hexadecimal value (starting with '0x').
NOTE: Your submission for this question will NOT be in the normal [picoCtf] flag format.</p>

<h4>Advice</h4>
<p>You are given a disassembly dump of a function taking a C string and returning an integer;
you need to figure out the integer returned for the string given above.</p>
<p>No cheating with Ghidra this time!  (<i>Not strictly true; but if you
get it into a form where Ghidra can help, you have it in a form where you don't really need Ghidra anymore...</i>)</p>
<p>The obvious solution is to manually decompile this assembly into C code that you can compile and run.
Of course, this approach requires some understanding of 
<ul>
  <li>32-bit x86 (a.k.a. i386 or i686) assembly language syntax and machine instruction semantics
  <li>the C calling convention (a.k.a. ABI) for GCC/Linux (i.e., how the compiler and system libraries use registers, the stack, etc.)
</ul>
A great resource for exploring these (in the C -> assembly direction) is <a href="https://godbolt.org/">Godbolt's Compiler Explorer</a>.
</p>

<p>There's also the "cheating" way, which get's us back to my first comment about getting it into a form usable with Ghidra.
Question to ponder: can you just "assemble" this source code back into an ELF binary module that could be loaded by Ghidra?
If not, why not?  What then?</p>