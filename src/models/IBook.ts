import { SelectedSortOption, Category } from "./IOptions"

export interface ImageLinks{
    smallThumbnail: string,
    thumbnail: string
}

export interface VolumeInfo {
    title: string,
    authors: string[]
    imageLinks: ImageLinks
    categories: string[],
    description: string,
}
export interface IBook {
    id: string,
    volumeInfo: VolumeInfo,
}

export interface BookResponseParams {
    totalItems: number,
    items: IBook[]
}

export interface BookRequestParams {
    title: string,
    startIndex: number,
    selectedSortOption: SelectedSortOption,
    category: Category
}


export interface SpecificBookRequestParams {
    id?: string
}