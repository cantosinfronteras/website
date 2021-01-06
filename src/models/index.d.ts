import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Article {
  readonly id: string;
  readonly title?: string;
  readonly slug?: string;
  readonly content?: string;
  readonly creation_date?: string;
  readonly featured_image?: string;
  constructor(init: ModelInit<Article>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}