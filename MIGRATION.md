## Install
- install elementary-tweaks
- install kde-connect
 - https://www.linuxuprising.com/2018/08/how-to-re-enable-ayatana-appindicators.html
 - https://www.yourtechshow.com/2020/04/kde-connect-for-elementary-os-hera-fix.html
- install emacs, doom-emacs, vscodium, fd-find, iputils, ripgrep
- install blender, chrome, firefox, deluge, pia, intellij, libreoffice
- Emacs
  - install [chemacs2](https://github.com/plexus/chemacs2) and configure .emacs-profiles.el 
  #+begin_src lisp
  ;;; (("default" . ((user-emacs-directory . "~/.emacs.default"))))
  ;;; ("doom" . ((user-emacs-directory . "~/.emacs.doom.d"))))
  (("old" . ((user-emacs-directory . "~/.emacs.default")))
  ("default" . ((user-emacs-directory . "~/Downloads/doom-emacs"))))
  #+end_src
  - add env var to .bash_profile for emacs to fix any GTK distro
    - https://elementaryos.stackexchange.com/questions/797/how-to-get-gnu-emacs-work-on-elementary-os
    - `echo "export XLIB_SKIP_ARGB_VISUALS=1" >> ~/.bash_profile`
  - add bash alias to allow running emacs in background shell so you can do `e foo.txt`
    - https://unix.stackexchange.com/questions/21307/alias-a-command-to-run-in-the-background
    #+begin_src bash
    ## User added
    alias emacs='XLIB_SKIP_ARGB_VISUALS=1 emacs &'
   #+end_src

