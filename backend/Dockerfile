FROM python:3.10

WORKDIR /app

EXPOSE 8000

RUN pip3 install pipenv

COPY Pipfile* /app/
RUN pipenv sync


COPY * ./
CMD [ "./docker-entrypoint.sh" ]
