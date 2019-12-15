import { WsArticle } from './article.interface';

export interface WsNews {
  title: string,
  loading: boolean,
  items: WsArticle[]
}
