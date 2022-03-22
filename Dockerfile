FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nethsaragimhan/King-Wa-Bot-Main /root/WhatsAsena
WORKDIR /root/WhatsAsena/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
