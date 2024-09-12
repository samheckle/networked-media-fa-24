# Frequently Asked Questions / Debugging Tips

Please refer to this document if your project is not working. You should be getting into the habit of checking all avenues of errors before asking for help! This will make you a more resourceful developer.

You should *always* be reading error messages in the terminal or the console, this will give you more information as to what is going on.

## My project site isn't loading!

- Check your url for `http`. Sometimes the browser defaults to `https`, but our website isn't secure so the request will fail. Your url should look something like `http://{your-ip-address}/{project-folder}`
- Check if the server is running with `pm2`. 
    1. Connect to your server by logging in to your server in terminal using `ssh root@{your-ip-address}`. Type in your password when prompted (remember the keystrokes aren't recorded so it does not look like you are typing)
    2. Navigate to where you are running your server. This will be where your `server.js` file is located. 
    3. List all of the servers that are running using `pm2 ls`. It should spit out something like this:
    4. If you see `errored`, it means you need to restart the server. You can do this by running
        ``` 
            pm2 kill
            pm2 start server.js
        ```

## My project didn't update!
- Make sure you saved your file in VSCode.
- Make sure you uploaded the correct file to the server in the correct location.