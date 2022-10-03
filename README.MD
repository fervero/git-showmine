# What is it for

Logs/shows all changes (*) in git branch made by you.

# Installation

1. Create a directory, let's say, `~/git-scripts`, and add it to path (put `export PATH="$HOME/git-scripts:$PATH") in
your .zshrc or/and .bashrc.
2. Copy files `git-logmine` and `git-showmine` there. Make them executable: `chmod 755 git-logmine git-showmine`.

# Usage

Examples:
Log all your commits made last month: `git logmine --lastmonth`
Log all your commits from this month, and be brief about it: `git logmine --thismonth --pretty=oneline`
Show changes made by you last month: `git showmine --lastmonth`
Same as above, but on the specified branch (main): `git showmine main --lastmonth`

# Fine print

`git-showmine` script excludes files `package-lock.json` and `yarn.lock` from the diff. The rationale: they aren't
created/modified manually, so they don't fit the purpose of this tool (which is: "please remind me, what have I done
recently with the repo?"). Plus, they're just noise.
