import StateApi from 'state-api';
import {data} from '../testData';

const state = new StateApi(data).getState();

describe('DataApi', () => {
  it('exposes articles as an object' , ()=> {
    const articles = state.articles;
    const articleId = state.articles[0].id;
    const articleTitle = state.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object' , ()=> {
    const authors = state.authors;
    const authorId = state.authors[0].id;
    const authorName = state.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorName);
  });
});
