---
  title: "picoGym RE, Part III: Forky"
  name: intro_to_re_03
  file_path: /challenge_files/intro_to_re/forky
  flag_MD5: 94369eee02c2a4c20f191c7c593d6600 # picoCTF{-721750240}
  flag_format: picoCTF{INTEGER_YOU_FOUND}
  trending: false
---
<h4>Original Description</h4>
<p>In this program, identify the last integer value that is passed as parameter to the function <code>doNothing()</code>.</p>

<h4>Advice</h4>
<p>Treat this as a pure-static RE problem.
You need to understand the semantics of the Unix system call <code>fork</code>
(and that processes can share memory, as they do in this case to have one single
copy of the key veriable stored between all of them).</p>

<p>The flag is in the format <code>picoCTF{INTEGER_YOU_FOUND}</code>.
Be aware that <code>INTEGER_YOU_FOUND</code> can be negative.
You will have to consider:
<ul>
  <li>machine word sizes (e.g., 32-bit vs. 64-bit integers) 
  <li>2's complement binary encoding of signed numbers
  <li>multi-byte integer Endianness
</ul></p>
