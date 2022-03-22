FROM fusuf/whatsasena:latest

RUN git clone  /root/Dragonx
WORKDIR /root/Dragonx/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
