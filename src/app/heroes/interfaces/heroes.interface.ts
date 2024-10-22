export interface Heroes {
    id:              string;
    superhero:       string;
    publisher:       Publisher;
    alterEgo:        string;
    firstAppearance: string;
    characters:      string;
    imageUrl:        string;
    isActive:        boolean;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}