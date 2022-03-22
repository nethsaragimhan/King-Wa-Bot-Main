FROM nethsaragimhan/King-Wa-Bot-Main:fullcontrol

RUN git clone https://github.com/nethsaragimhan/King-Wa-Bot-Main/ /root/King-Wa-Bot-Main
WORKDIR /root/King-Wa-Bot-Main/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "king.js"]
