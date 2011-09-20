text.
=====

Introduction
------------

text. is a collaborative online wordprocessor which is based on XMPP,
also known as Jabber. It's based on [JSJaC][0].

Setup instructions
------------------

The first step is copying the files to your webserver. You don't need
PHP or any other server-side thing at the moment.  

Please open now the text.html file and edit the two configuration
options between the comments <SETTINGS> and </SETTINGS> for your needs.
Some examples for a BOSH-Bridge are [here][1].

Now text. is ready.

To-Do
-----
* Text formatting
* Intelligent text processing for less data transfer
* User logins over XMPP (instead of anonymous logins)
* More security (checking incoming HTML etc…)

Credits
-------
* [famfamfam icon set][2]
* [JSJaC][0]
* [etherpad-lite][3] (Just the random key generator from the index file)

[0]: https://github.com/sstrigler/JSJaC
[1]: http://prosody.im/doc/setting_up_bosh

[2]: http://www.famfamfam.com/lab/icons/silk/
[3]: https://github.com/Pita/etherpad-lite
