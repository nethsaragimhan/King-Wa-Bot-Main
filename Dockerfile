FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nethsaragimhan/King-Wa-Bot-Main /root/WhatsAsena
WORKDIR /root/WhatsAsena/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN apk --no-cache
RUN npm install

CMD ["node", "bot.js"]
