import {createSelector} from "reselect";

export const loadersReducer = state => state.loadersReducer;
export const jokesReducer = state => state.jokesReducer;
export const dogsReducer = state => state.dogsReducer;
export const postsReducer = state => state.postsReducer;
export const countriesReducer = state => state.countriesReducer;

export const sortedPostsSelector = createSelector(
    [postsReducer],
    (postsReducer) => {
        if (postsReducer.posts) {
            const posts = [...postsReducer.posts];

            if (postsReducer.sort === 'b-a') {
                return posts.sort((a, b) => b.id - a.id);
            }

            return postsReducer.posts;
        } else {
            return postsReducer;
        }
    }
);