import { createContext, ReactNode, useContext, useState } from "react";
import { apiLocalSpotify } from "../../../services/api";
import { tracksType } from "../../../services/types";

interface childrenType{
    children : ReactNode
}

interface tracksContextType {
    tracks: tracksType[];
    sheareTracks: (query: string, token: string) => Promise<void>;
  }

const tracksContext = createContext <tracksContextType> ({} as tracksContextType);
export function TranksProvider({ children} : childrenType): JSX.Element {
    const [tracks, setTracks] = useState<tracksType[]>([])


    const sheareTracks = async function (query : string, token : string) {
        // console.log(query, token);
        
        const getTracks : tracksType[] = await (await apiLocalSpotify.post(`/search/${encodeURIComponent(query)}/${encodeURIComponent(token)}`)).data.data;        
        setTracks(getTracks)
    }
    return (
        <tracksContext.Provider
          value={{ sheareTracks, tracks }}
        >
          {children}
        </tracksContext.Provider>
      );
}

export function useTracks(): tracksContextType {
    const context = useContext(tracksContext);
  
    return context;
  }
  
  