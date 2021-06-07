---
  title: "picoGym RE, Part V: B1ll_Gat35"
  name: intro_to_re_05
  file_path: /challenge_files/intro_to_re/win-exec-1.zip
  flag_MD5: 6a869501b88d73d529490849e9bbbeae # PICOCTF{These are the access codes to the vault: 1063340}
---
<h4>Original Description</h4>
<p>Can you reverse this Windows Binary?</p>

<h4>Advice</h4>
<p>This is not quite a <i>classic</i> RE challenge that simply validates a flag you have to enter, but it's close.</p>
<p>The flag format is <code>PICOCTF{xxxxx}</code></p>
<p>This binary does not make for a pleasant experience in Ghidra if you aren't used to the quirks of Microsoft's C/C++ toolchain.
The original picoCtf hints recommending using a Windows VM and Windows debugging tools like OllyDbg are worth considering.</p>
<p>But it can be run and even debugged on a Linux system using Wine's <code>winedbg</code> toolchain.
Given a little persistence and cleverness in Ghidra finding critical points inside the program,
the Wine debugger is sufficient for you to side-step the obstacles and get a flag printed out.</p>