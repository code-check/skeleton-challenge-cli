## About this repo

- This is a codecheck challenge repo.
- codecheck's "Challenges" are 1-2 hour problems that evaluate a specific ability in applicants.
- Each challenge is managed as a github repo.
- Challenges can be imported directly from github into codecheck.

## Get Started
- Clone this repo.
- Get familiarized with the repo structure.
- To run the challenge tests,  
  run `npm install codecheck -g ` and `codecheck` in the repo directory.
- For your convenience, there are many sections marked `TODO` and `{{}}` in this repo.
  - Complete all the TODO tasks.
  - Fill out all the `{{}}`s.
  - Remove all `TODO`s and `{{}}`s when complete.


## Repo Structure
The below five files/directories are required for a challenge:
- `challenge.json`
  - Contains the primary configurations necessary for a challenge.  
  - It is hidden from applicants.
- `README.md` and `README_en.md`
  - Contains the challenge's explanation for applicants.  
  - It will be displayed on the right pane of the codecheck web editor.
- `answer.md`
  - Template file for applicants to remark on their code using markdown.
  - Applicant comments in `answer.md` will be viewable in codecheck's applicant results menu by organization users.
- `test/`
  - contains the unit tests.
- `codecheck.yml`
  - Defines the test, build and run commands.  
  - Applicants can view and modify it.

---

Other files in this repo:
- `solution.js`
  - sample solution for this challenge.
- `package.json`
  - included for dependency management of NodeJS,  
  which is what the sample solution and tests run on.  
  - It is hidden from applicants.
