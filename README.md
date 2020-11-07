[![Logo](https://github.com/srichakradhar/ALITA/master/server/static/img/logo.png)](#)
=====

The ALITA server collects submissions and displays analysis of student progress
based on logging sent from client scripts.


The ALITA software was developed for at UMKC Kansas City.


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

Command Line Manager
------------------------
* To view available commands run `./manage.py` once the virtualenv is activated.

Customizing seed content
-------------------
`server/generate.py` initializes the local server with sample content (Users, Assignments, a Course etc). You can customize it by changing the file and running `./manage.py resetdb`.

Server Development
------------------
The server is developed in Python 3.5+ using Flask.

Core Features
-------------

Backup Maintenance
- Best-effort maintenance of student backups that occur when ok is run.

Composition Grading
- Allow staff to comment on student composition of projects and assign grades.

Autograding
- Automatic grading of student submissions

Developer Guidelines
--------------------
See `documentation/CONTRIBUTING.md`

Recent activity:

Deploying
---------
Docker + Kubernetes on Google Container Engine. See `kubernetes/kubernetes.md` for more info.

The ALITA-server also supports deployments to Heroku or servers on any major hosting service.

There also exists a [one-click setup](./azure/paas/README.md) for ALITA-server on Azure.

Python Style Guide
-------------------
Refer to [The Elements of Python Style](https://github.com/amontalenti/elements-of-python-style)

Some useful things for developers to know:

1. Testing with ALITA-client
   - To test with ALITA-client, please follow the instructions for the ALITA-client repo [here](https://github.com/okpy/ALITA-client).
   - Once you are inside the virtual environment for ALITA-client, you can make a new binary by using the command `ALITA-publish`.
   - Start the local ok server.
   - When running the ok binary, add the flags `--insecure --server localhost:<port>` to point it to the running ALITA-server
   - To find demo assignments that you can use the binary with, look in [ALITA-client/demo](https://github.com/okpy/ALITA-client/tree/master/demo)
