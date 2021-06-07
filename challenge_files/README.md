# Challenges
## Adding a Challenge
1. Add any files that solvers will need to solve the challenge (binaries, source code, ect) in this folder.
1. Add your challenge info to `/_challenges/challenge_name_here.md` in the following format:
```
---
  name: # Must be unique
  title: My l33t Challenge
  active: true # False if the challenge is retired. 
  connect: nc somehost 8080
  file_path: /challenge_files/you_need_this_to_solve.zip
  flag_format: picoCTF{...} # Update if the flag anything other than hackpack{...}, otherwise the field can be omitted
  flag_MD5: 18c11cef1dc29a707b38db4bfc1ca5a5 # Used to make the flag checker work. Make sure this is accurate!
---
# Challange cards can have markdown
## You put the decription here!
```

Any fields not needed can (and should) be safely ommitted

## Updating Current Challenges
1. To display new challeges on the Learn page, update `current_chal` in learn.md to include the ID(s) of the new challenges
