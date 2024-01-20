import { ArtistModel } from "./artis.model";

export interface TrackModel{
    name: string;
    album: string;
    cover: string;
    duration: number;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}