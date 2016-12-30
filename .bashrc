# Colors
R="\[$(tput setaf 1)\]"
G="\[$(tput setaf 2)\]"
Y="\[$(tput setaf 3)\]"
M="\[$(tput setaf 5)\]"
C="\[$(tput setaf 6)\]"
W="\[$(tput setaf 7)\]"
B="\[$(tput setaf 8)\]"
N="\[$(tput sgr0)\]"

# bash completion
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# support 256 colors
if [ -e /usr/share/terminfo/x/xterm-256color ]; then
        export TERM='xterm-256color'
else
        export TERM='xterm-color'
fi

# Alias
. $HOME/.bash_aliases

# Prompt
#PS1="[\u@\h][\W]\\$ ${N}"
#PS1="\w \n─────${N} "
PS1="${G}─${N}───${G}─${N} "
#PS1="\W »${N} "
#PS1="${G}\W ${N}"

# history length
HISTSIZE=1000
HISTFILESIZE=2000