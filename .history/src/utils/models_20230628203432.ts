export type KeywordSearchItem = {
  id: number;
  name: string;
};

export interface IKeywordSearchResponse {
  page: number;
  results: KeywordSearchItem[];
  total_pages: number;
  total_results: number;
}

export interface IGenresResponse {
  genres: {
    id: number;
    name: string;
  };
}
