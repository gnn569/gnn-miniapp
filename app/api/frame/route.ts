import { getFrameHtmlResponse } from "@coinbase/onchainkit/frame";

export async function GET() {
  return new Response(
    getFrameHtmlResponse({
      buttons: [
        {
          label: "Mint Now",
        },
      ],
      image: "https://gnn-miniapp.vercel.app/Alien_Neobase_Punk.png",
      post_url: "https://gnn-miniapp.vercel.app/api/frame",
    }),
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}
