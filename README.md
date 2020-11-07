[![Logo](https://github.com/srichakradhar/ALITA/blob/master/server/static/img/logo.png)](#)
=====

ALITA - ArtificiaL Intelligence Teaching Assistant
Due to the increasing demand of TAs and budget cuts, it is becoming increasingly hard to manage grading and instruction. ALITA helps with content curation, scheduling, grading and question answering.

Demo
-------------
https://youtu.be/fwCECsGVD_w

Installation
-------------

To install:
* Clone this repo
* Install `virtualenv`. You can do `brew install virtualenv` on a mac or `pip install virtualenv` or `apt-get install python-virtualenv`
  - If brew cannot find `virtualenv`, use `brew install pyenv-virtualenv`.
* Create a virtualenv with `virtualenv -p python3 env`
* Activate the virtualenv with `source env/bin/activate`
* (Optional, but recommended) Install `redis-server`. You can do `brew install redis` on a mac or `apt-get install redis-server`

Local Server
------------
To run the server locally:

```bash
$ source env/bin/activate # for virtualenv
$ pip install -r requirements.txt  # to install libraries
$ ./manage.py createdb
$ ./manage.py seed
$ ./manage.py server
```

The server will listen on http://localhost:5000.

If you are running into issues - see `documentation/SETUP.md` or file an issue

Running Workers
---------------
To run workers locally:

```bash
$ ./manage.py worker
```

To be able to run the workers you should have a `redis` server installed and running.

If `redis` is not installed you can install it using your distribution's package
manager or follow [Redis Quick Start](https://redis.io/topics/quickstart).

Server Development
------------------
The server is developed in Python 3.5+ using Flask.

Core Features
-------------

Backup Maintenance
- Best-effort maintenance of student backups that occur when ALITA is run.

Composition Grading
- Allow staff to comment on student composition of projects and assign grades.

Autograding
- Automatic grading of student submissions