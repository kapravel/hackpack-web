---
  title: "picoGym RE, Part I: Need for Speed"
  name: intro_to_re_01
  file_path: /challenge_files/intro_to_re/need-for-speed
  flag_MD5: 493e3603dc1b1cf9ff71a0ce6c0b03a3 # PICOCTF{Good job keeping bus #24c43740 speeding along!}
  flag_format: PICOCTF{...}
  trending: false
---
#### Original Description
<p>The name of the game is <a href="https://www.youtube.com/watch?v=8piqd2BWeGI">speed</a>.
Are you quick enough to solve this problem and keep it above 50 mph?</p>

#### Advice
<p>Use <a href="https://ghidra-sre.org/">Ghidra</a> to look at the binary's <code>main</code> function and figure out what is happening.
From there, you have options (which is common for RE problems):
<ul>
  <li>Static RE: just read the disassembly/decompiler output until you can work out on paper/etc. what the answer is
  <li>Dynamic RE: use a debugger like GDB (or other options, like LD_PRELOAD) to manipulate the flow of execution in the program and side-step the booby-trap
</ul></p>
