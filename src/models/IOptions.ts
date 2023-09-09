export enum CategoryType {
    all = 'all',
    art = 'art',
    biography = 'biography',
    computers = 'computers',
    medical = 'medical',
    history = 'history',
    poetry = 'poetry',
}

export type Category =
    CategoryType.all
    |
    CategoryType.art
    |
    CategoryType.biography
    |
    CategoryType.computers
    |
    CategoryType.history
    |
    CategoryType.medical
    |
    CategoryType.poetry

export enum SortOptions {
    relevance = 'relevance',
    newest = 'newest',
}

export type SelectedSortOption = SortOptions.newest | SortOptions.relevance
