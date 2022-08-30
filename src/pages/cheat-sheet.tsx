import type { NextPage } from 'next';
import Command from '@/components/pages/cheat-sheet/Command';
import CommandBox from '@/components/pages/cheat-sheet/CommandBox';

/**
 * CheatSheet component
 * @return {JSX.Element} - The JSX code for CheatSheet component
 */
const CheatSheet: NextPage = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="primary-heading">Cheat Sheet</div>
      <CommandBox title="Git basics">
        <Command
          command="git init <directory>"
          description="Create empty Git repo in specified directory. Run with no arguments to initialize the current directory as a git repository."
        />
        <Command
          command="git clone <repo>"
          description="Clone repo located at <repo> onto local machine. Original repo can be located on the local filesystem or on a remote machine via HTTP or SSH."
        />
        <Command
          command="git config user.name <name>"
          description="Define author name to be used for all commits in current repo. Devs commonly use --global flag to set config options for current user."
        />
        <Command
          command="git add <directory>"
          description="Stage all changes in <directory> for the next commit. Replace <directory> with a <file> to change a specific file."
        />
        <Command
          command='git commit -m "<message>"'
          description="Commit the staged snapshot, but instead of launching a text editor, use <message> as the commit message."
        />
        <Command
          command="git status"
          description="List which files are staged, unstaged, and untracked."
        />
        <Command
          command="git log "
          description="Display the entire commit history using the default format. For customization see additional options."
        />
        <Command
          command="git diff"
          description="Show unstaged changes between your index and working directory."
        />
      </CommandBox>
      <CommandBox title="Undoing changes">
        <Command
          command="git revert <commit>"
          description="Create new commit that undoes all of the changes made in <commit>, then apply it to the current branch."
        />
        <Command
          command="git reset <file>"
          description="Remove <file> from the staging area, but leave the working directory unchanged. This unstages a file without overwriting any changes."
        />
        <Command
          command="git clean -n"
          description="Shows which files would be removed from working directory. Use the -f flag in place of the -n flag to execute the clean."
        />
      </CommandBox>
      <CommandBox title="Rewriting git history">
        <Command
          command="git commit --amend"
          description="Replace the last commit with the staged changes and last commit combined. Use with nothing staged to edit the last commit's message."
        />
        <Command
          command="git rebase <base>"
          description="Replace the last commit with the staged changes and last commit combined. Use with nothing staged to edit the last commit's message."
        />
        <Command
          command="git reflog"
          description="Rebase the current branch onto <base>. <base> can be a commit ID, branch name, a tag, or a relative reference to HEAD."
        />
        <Command
          command="git reflog"
          description="Show a log of changes to the local repository's HEAD. Add --relative-date flag to show date info or --all to show all refs."
        />
        <Command command="" description="" />
      </CommandBox>
      <CommandBox title="Git branches">
        <Command
          command="git branch"
          description="List all of the branches in your repo. Add a <branch> argument to create a new branch with the name <branch>."
        />
        <Command
          command="git checkout -b <branch>"
          description="Create and check out a new branch named <branch>. Drop the -b flag to checkout an existing branch."
        />
        <Command
          command="git merge <branch>"
          description="Merge <branch> into the current branch."
        />
      </CommandBox>
      <CommandBox title="Remote repositories">
        <Command
          command="git remote add <name> <url>"
          description="Create a new connection to a remote repo. After adding a remote, you can use <name> as a shortcut for <url> in other commands."
        />
        <Command
          command="git fetch <remote> <branch>"
          description="Fetches a specific <branch>, from the repo. Leave off <branch> to fetch all remote refs."
        />
        <Command
          command="git pull <remote>"
          description="Fetch the specified remote's copy of current branch and immediately merge it into the local copy."
        />
        <Command
          command="git push <remote> <branch>"
          description="Push the branch to <remote>, along with necessary commits and objects. Creates named branch in the remote repo if it doesn't exist."
        />
      </CommandBox>
      <CommandBox title="Git config">
        <Command
          command="git config --global user.name <name>"
          description="Define the author name to be used for all commits by the current user."
        />
        <Command
          command="git config --global user.email <email>"
          description="Define the author email to be used for all commits by the current user."
        />
        <Command
          command="git config --global alias. <alias-name> <git-command>"
          description="Create shortcut for a Git command. E.g. alias.glog “log --graph --oneline” will set ”git glog”equivalent to ”git log --graph --oneline."
        />
        <Command
          command="git config --system core.editor <editor>"
          description="Set text editor used by commands for all users on the machine. <editor> arg should be the command that launches the desired editor (e.g., vi)."
        />
        <Command
          command="git config --global --edit"
          description="Open the global configuration file in a text editor for manual editing."
        />
      </CommandBox>
      <CommandBox title="Git log">
        <Command
          command="git log -<limit>"
          description="Limit number of commits by <limit>. E.g. ”git log -5” will limit to 5 commits."
        />
        <Command
          command="git log --oneline"
          description="Condense each commit to a single line."
        />
        <Command
          command="git log -p"
          description="Display the full diff of each commit."
        />
        <Command
          command="git log --stat"
          description="Include which files were altered and the relative number of lines that were added or deleted from each of them."
        />
        <Command
          command="git log --author= ”<pattern>”"
          description="Search for commits by a particular author."
        />
        <Command
          command="git log --grep=”<pattern>”"
          description="Search for commits with a commit message that matches <pattern>."
        />
        <Command
          command="git log <since>..<until>"
          description="Show commits that occur between <since> and <until>. Args can be a commit ID, branch name, HEAD, or any other kind of revision reference."
        />
        <Command
          command="git log -- <file>"
          description="Only display commits that have the specified file."
        />
        <Command
          command="git log --graph --decorate"
          description="--graph flag draws a text based graph of commits on left side of commit msgs. --decorate adds names of branches or tags of commits shown."
        />
      </CommandBox>
      <CommandBox title="Git diff">
        <Command
          command="git diff HEAD"
          description="Show difference between working directory and last commit."
        />
        <Command
          command="git diff --cached"
          description="Show difference between staged changes and last commit"
        />
      </CommandBox>
      <CommandBox title="Git reset">
        <Command
          command="git reset"
          description="Reset staging area to match most recent commit, but leave the working directory unchanged."
        />
        <Command
          command="git reset --hard"
          description="Reset staging area and working directory to match most recent commit and overwrites all changes in the working directory."
        />
        <Command
          command="git reset <commit>"
          description="Move the current branch tip backward to <commit>, reset the staging area to match, but leave the working directory alone."
        />
        <Command
          command="git reset --hard <commit>"
          description="Same as previous, but resets both the staging area & working directory to match. Deletes uncommitted changes, and all commits after <commit>."
        />
      </CommandBox>
      <CommandBox title="Git rebase">
        <Command
          command="git rebase -i <base>"
          description="Interactively rebase current branch onto <base>. Launches editor to enter commands for how each commit will be transferred to the new base."
        />
      </CommandBox>
      <CommandBox title="Git pull">
        <Command
          command="git pull --rebase <remote>"
          description="Fetch the remote’s copy of current branch and rebases it into the local copy. Uses git rebase instead of merge to integrate the branches."
        />
      </CommandBox>
      <CommandBox title="Git push">
        <Command
          command="git push <remote> --force"
          description="Forces the git push even if it results in a non-fast-forward merge. Do not use the --force flag unless you're absolutely sure you know what you're doing."
        />
        <Command
          command="git push <remote> --all"
          description="Push all of your local branches to the specified remote."
        />
        <Command
          command="git push <remote> --tags"
          description="Tags aren't automatically pushed when you push a branch or use the --all flag. The --tags flag sends all of your local tags to the remote repo."
        />
      </CommandBox>
    </div>
  );
};

export default CheatSheet;
