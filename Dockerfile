FROM quay.io/ukhomeofficedigital/nodejs-base:v6.11.1

ENV USER pttg
ENV GROUP pttg
ENV NAME pttg-tools

ARG VERSION

WORKDIR /app

RUN groupadd -r ${GROUP} && \
    useradd -g ${GROUP} ${USER} -d /app && \
    mkdir -p /app && \
    chown -R ${USER}:${GROUP} /app

COPY . /app
RUN npm --loglevel warn install --only=prod
RUN npm --loglevel warn run postinstall

RUN chmod a+x /app/run.sh

USER pttg

EXPOSE 8000

ENTRYPOINT /app/run.sh