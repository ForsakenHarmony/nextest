window.SIDEBAR_ITEMS = {"fn":[["cmd","Create a command given a program name and a collection of arguments. See also the `cmd!` macro, which doesn’t require a collection."]],"macro":[["cmd","Create a command with any number of of positional arguments, which may be different types (anything that implements `Into<OsString>`). See also the `cmd` function, which takes a collection of arguments."]],"mod":[["unix","Unix-specific extensions to duct, for sending signals."]],"struct":[["Expression","The central objects in Duct, Expressions are created with `cmd` or `cmd!`, combined with `pipe`, and finally executed with `run`, `read`, `start`, or `reader`. They also support several methods to control their execution, like `stdin_bytes`, `stdout_capture`, `env`, and `unchecked`."],["Handle","A handle to a running expression, returned by the `start` method."],["ReaderHandle","An incremental reader created with the `Expression::reader` method."]],"trait":[["IntoExecutablePath","An implementation detail of `cmd`, to distinguish paths from other string types."]]};