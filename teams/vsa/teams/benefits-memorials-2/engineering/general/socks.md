# Runnings SOCKS

## If SOCKS can't connect or request local forwarding

This is usually due to background SOCKS processes that need to be stopped.

- Run `ps aux | grep socks` to see any other processes
- For each result where the descriptive command doesn’t begin with `grep`, copy the string of numbers that appears after your username
- Run `kill -9 <NUMBERS_SEPARATED_BY_SPACES>`
- Attempt to reconnect
