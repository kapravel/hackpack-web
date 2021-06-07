---
title: XOR Crypto - Medium
name: xor_crupto3
file_path: /challenge_files/xor_crypto/ciphertext3.txt
flag_MD5: e8ef8ea4ddecbf90e7fd049832db0220 # HACKPACK{MAYBE_NOW_YOULL_READ_THE_TOS_;)}
flag_format: HACKPACK{...}
---
This ciphertext has been XOR encrypted with key of unknown length. <br> <br>
For instance, if the key was `wot`, the first byte of the plaintext would be XORed with `w`, the second with `o`, the third with `t`, and then it would loop around to XOR the fourth character with `w` <br> <br>
The cipher text is also in Base64, which you'll need to decode before XORing