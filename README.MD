# ZipAware

ZipAware is a Chrome extension that helps protect users from accessing some websites with a .zip TLD. \
It blocks access to such websites and provides a warning to the user.

## Description

This idea came after reading [Bobbyr's medium article](https://medium.com/@bobbyrsec/the-dangers-of-googles-zip-tld-5e1e675e59a5) about the dangers of the zip tld.\
When a user tries to access a website with a .zip TLD and a @ operator, ZipAware intervenes to prevent access to the website. \
Instead, a notification is displayed to alert the user that the website has been blocked. \
 \
For example, this is the type of links that ZipAware blocks :

- [https://github.com∕kubernetes∕kubernetes∕archive∕refs∕tags∕@procrastination.zip](https://github.com∕kubernetes∕kubernetes∕archive∕refs∕tags∕@procrastination.zip)

By clicking you will not be going to github.com but to [procrastination.zip](https://procrastination.zip) and that website could easily deliver an infected file (fortunately I own it as a joke :) ).

## Features

- Uses Chrome's declarativeNetRequest API (so manifest V3)
- Simple and lightweight Chrome extension

## More ideas/todo/roadmap

- Maybe add a button on the notification to redirect elsewhere for more information
- Replace the blocked page by a custom page, this could allow:
  - to allow the user to bypass the block if that's needed (but no idea on how to do that with declarativeNetRequest)
  - to display some explanation on the exact url that was blocked
- Why not add an opt-in mechanism to report those urls somewhere

## Usage

There is no usage, that's automatic, just install it! \
Although if the extension blocks something you still want to access then there's no bypass mechanism for now so you'll need to disable it if you want to navigate.

## Contribution

I have very low to no knowledge about chrome extensions, contributions are welcome! \
If you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request.

## License

Check the [license](LICENSE.MD).
