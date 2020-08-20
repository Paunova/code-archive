### PORTS

Stopped process may keep the PORT busy in the background and on rerun to get an error:
*Port/address already in use*

`fuser -n tcp -k PORT` - kill process running on PORT (PID)

Run the command above and rerun the process.
