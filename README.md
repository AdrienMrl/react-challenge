## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To be improved

There are many things that I would have liked to do better, but I was running out of time for the challenge.

- Better styling (I did almost none).
- Better typing. I skipped typing in a few places. I'd like to have better typing for the actions and reducers.
- Better loading, loaded, error states management.
- Better caching of the posts data instead of re-downloading data at every click. Wrap my components by a loading indicator HOC.
- Optimistic UI for the comments.
