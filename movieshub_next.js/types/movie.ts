export interface Movie {
    id: number;
    url: string;
    description: string;
    name: string;
    genres?: Genre[];
    score?: Score[];
}

export type Genre = {
    name: string;
};

export type Score = {
    id: number;
    score: number;
}