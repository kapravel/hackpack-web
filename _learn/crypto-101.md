---
  name: "Basics: Crypto"
  tags: new
  description: Get familiar with the tools and techniques needed to solve basic crypto challenges
  image: "/assets/learn/crypto-101.jpg"
  permalink: /learn/crypto-101
  layout: workshop
  pages: 
    - What is Crypto?
    - What do I need to know?
    - What tools do I need?
---

<section id="page-1" markdown="1">

# 🔒 Cryptography (crypto)
<br>
## What is this category?

Most of modern cryptography deals with the **encoding**, **encryption**, and **authentication** of data traffic. Think of browsing the web, bank transfers, communication applications, etc. Our first goal is to have our data encrypted such that only those with the appropriate keys can decrypt it. Secondly, we need to find a way for us to be sure an encrypted message indeed came from whom we think it came from and vice versa. As you can imagine, this proves to be easier said than done. During CTFs, you will be confronted with insecure algorithms proving exactly this. You will have to investigate and make sense of any provided source code, look for potential vulnerabilities, and finally exploit the algorithm to work your way to the flag.

</section>

<section id="page-2" markdown="1">

## What knowledge do I need _right now_ to get started?

Do not be put off by the maths behind cryptography. Aside from highschool maths, a quick introduction into modular arithmetic should be enough to get you started. When you are ready to dive further in, some number- and group theory, linear algebra, and elliptic curve arithmetic will do wonders for you.

What about cryptographic knowledge? There are many exotic cryptosystems and even the most common ones have plenty of variants. Therefore it is probably best to learn about these along the way. However, almost all CTFs will include at least some challenges based on, but not limited to, the following cryptographic primitives:

- [XOR](https://ctf101.org/cryptography/what-is-xor/) ciphers, which use only bitwise and/or integer operations,
- [RSA](https://blog.sigmaprime.io/introduction-to-rsa.html), a public key cryptosystem with many potential [vulnerabilities](https://crypto.stanford.edu/~dabo/papers/RSA-survey.pdf),
- [AES](https://www.youtube.com/watch?v=O4xNJsjtN6E), a symmetric block cipher with various [modes of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation),
- [ECC](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/), based on elliptic curve arithmetic with its commonly used signature scheme [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm).

The best way to hone your cryptography skills is through practice! Try your luck in beginner-focused CTFs, look for archived challenges on [CTFtime](https://ctftime.org), or check out [CryptoHack](https://cryptohack.org).
</section>
<section id="page-3" markdown="1">
## What tools do I need to be successful?

Pen, paper, and Python is really all you need, although some experience with [Sage](https://doc.sagemath.org/html/en/tutorial/introduction.html) (a more math-focused extension of Python) might prove useful. Usually all attacks and exploits can be written from scratch well within the duration of the CTF. No external tools are required, although the use of existing third-party scripts is generally allowed.

</section>