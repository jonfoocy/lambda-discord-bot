import axios from "axios";

export const handler = async (event) => {
  const discordWebook = process.env.DISCORD_URL;

  const data = JSON.parse(event.body)[0];

  const signature = data.signature;
  const type = data.type;
  const description = data.description;

  const discordMessage = {
    embeds: [
      {
        title: type,
        url: `https://explorer.solana.com/tx/${signature}?cluster=devnet`,
        description: description,
      },
    ],
  };

  const res = await axios.post(discordWebook, discordMessage);
  return res;
};
