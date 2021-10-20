#!/bin/bash
exec pipenv run uvicorn --host 0.0.0.0 app:app
