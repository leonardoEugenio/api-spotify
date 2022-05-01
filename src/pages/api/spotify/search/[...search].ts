import { apiSpotify } from "../../../../services/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { search } = req.query;
        const query = search[0];
        const token = search[1];

        if (token && query != " ") {
            // console.log(`./search?q=${query}&type=track&include_external=audio&access_token=${token}&limit=12`);
            
            const tracks = await (await apiSpotify.get(`./search?q=${query}&type=track&include_external=audio&access_token=${token}&limit=12`)).data.tracks;

            if (tracks.items.length == 0) {
                return res.status(200).json([]);
            }
            const data = tracks.items
            return res.status(200).json({ data });
        } else {
            res.setHeader("Allow", "POST");
            res.status(405).end("Method not allowed");
        }
    }
};
