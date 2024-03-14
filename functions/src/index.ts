// updates here https://api.telegram.org/bot7192634033:AAGQ1B5CV0gS8nQUjPtraELuesi6nLM4Np8/getUpdates

import * as functions from "firebase-functions";
import express from "express";
import TelegramBot from "node-telegram-bot-api";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const botToken = "7192634033:AAGQ1B5CV0gS8nQUjPtraELuesi6nLM4Np8";
const chatId = "-4137663767";

const bot = new TelegramBot(botToken, {polling: false});

app.post("/sendToTelegram", (req: express.Request, res: express.Response) => {
  const body = req.body || {};
  const date = new Date().toLocaleDateString();

  const parsedBody = JSON.parse(body);
  let msg = `date: ${date}\n`;

  for (const [key, value] of Object.entries(parsedBody)) {
    msg += `${key}: ${value}\n`;
  }

  res.status(200).send("OK");

  bot.sendMessage(chatId, msg)
    .then(() => {
      console.log("Message sent successfully");
      res.status(200).json({success: true, message: "Повідомлення успішно відправлено."});
    })
    .catch((error: any) => {
      console.error(error);
      console.log("An error occurred while trying to send the message");
      res.status(500).json({success: false, message: "Сталася помилка при відправленні повідомлення."});
    });

});

export const api = functions.region("europe-west6").https.onRequest(app);
