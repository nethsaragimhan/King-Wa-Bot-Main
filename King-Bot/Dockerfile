FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nethsaragimhan/King-Wa-Bot-Main.git /root/King-Wa-BotMain

WORKDIR /root/King-Wa-Bot-Main/

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
