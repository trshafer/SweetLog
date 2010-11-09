Readme
Enabling:
SweetLog.enable();
Basic Setup (see rest for descriptions):
SweetLog.enable();
SweetLog.setLevel('info');
SweetLog.setTags('all');

Usage:
SweetLog.info('here I am')
 => here I am
Available Functions: SweetLog.debug, SweetLog.info, SweetLog.warn, SweetLog.error, SweetLog.inspect

Log Levels:
Setting Log Level:
SweetLog.setLevel('info')
Available Levels: 'debug', 'info', 'warn', 'error'

Example:
SweetLog.info('here I am')
 => here I am
SweetLog.setLevel('warn')
SweetLog.info('here I am')
  =>
SweetLog.error('here I am')
 => here I am

Tagging:
Setting Tags:
SweetLog.setTags('users', 'people')
setting tags to 'all' will show all tags
tags must be a splatted array
If one of the logging tags match the SweetLog set tags then it will show

Example:
SweetLog.setTags('all')
SweetLog.info('here I am')
 => here I am
SweetLog.info('here I am', 'users')
 => here I am
SweetLog.setTags('users')
SweetLog.info('here I am')
 => 
SweetLog.info('here I am', 'users')
 => here I am
SweetLog.setTags('users', 'people', 'friends')
SweetLog.info('here I am', 'people')
 => here I am
SweetLog.info('here I am', 'rivals', 'people')
 => here I am
SweetLog.info('here I am', 'rivals')
 =>

To see the settings:
SweetLog.settings()