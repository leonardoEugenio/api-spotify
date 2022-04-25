import { apiSpotify } from "../../../../services/api";
import { getSession, useSession } from 'next-auth/react';
import { NextRequest } from "next/server";

export async function search(query : string) {
    
    const Session : any =  await getSession()
    if (Session.token.accessToken && query != "") {
        const accessToken = Session.token.accessToken
        const traks = await (await apiSpotify.get(`./search?q=${query}&type=track&include_external=audio&access_token=${accessToken}`)).data.tracks

        if( traks.items.length == 0 ){
            return traks.items = undefined
        }
        
        return traks.items
    }
}