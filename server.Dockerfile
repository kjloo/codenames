FROM python:3.11-slim-buster

WORKDIR /app

COPY app /app
RUN pip3 install Flask pymongo pymodm

# Expose the port on which the app will be running
EXPOSE 5000

CMD [ "flask", "--app", "main", "run", "-h", "0.0.0.0", "-p", "5000" ]

