if status is-interactive
    # Commands to run in interactive sessions can go here
end
# neofetch --backend kitty --source ~/Downloads/arch.png
zoxide init fish | source
eval (starship init fish)
set -Ux TERM xterm-kitty
# List Directory
alias ls="lsd"
alias l="ls -l"
alias la="ls -a"
alias lla="ls -la"
alias lt="ls --tree"

# Handy change dir shortcuts
abbr .. 'cd ..'
abbr ... 'cd ../..'
abbr .3 'cd ../../..'
abbr .4 'cd ../../../..'
abbr .5 'cd ../../../../..'

# Always mkdir a path (this doesn't inhibit functionality to make a single dir)
abbr mkdir 'mkdir -p'

# Fixes "Error opening terminal: xterm-kitty" when using the default kitty term to open some programs through ssh
# alias ssh='kitten ssh'
set -gx VOLTA_HOME "$HOME/.volta"
set -gx PATH "$VOLTA_HOME/bin" $PATH

# opam configuration
source /home/chooka/.opam/opam-init/init.fish > /dev/null 2> /dev/null; or true
