export default async function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json({
      image: "https://gnn-miniapp.vercel.app/Alien_Neobase_Punk.png",
      buttons: [
        {
          label: "Mint Now",
          action: "link",
          target: "https://zora.co/collect/base:0x6E08e084BA6BafFaE8467faF3DF158C59304e88F"
        }
      ]
    });
  }

  res.status(405).send("Method Not Allowed");
}
