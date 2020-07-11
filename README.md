# rn-start-js

This package is designed to accelerate the development by creating a default structure of react-native project.

## Installation

After creating the project `npx react-native init YOUR_PROJECT_NAME`
open folder with project and run command.

```bash
npm i @my_name_is_nero/rn-start-js
```

## Usage

Run command

```
npx rn-init
```

In root `index.js` change line

```
import App from './App';
```

to

```
import App from './src';
```

#### IOS

After install you should run command `npx pod-install`

## Folder Structure

    - src/
        - api/
            - index.js
        - assets/
            - fonts.js
            - images.js
        - components/
            - ErrorBoundary/
                - index.js
                - styles.js
        - constants/
            - colors.js
            - fonts.js
            - images.js
            - index.js
            - svg.js
        - i18n/
            - translation/
                - en.json
                - ru.json
            - index.js
        - navigation/
            - AuthStack.js
            - index.js
        - redux/
            - auth/
                - actions.js
                - index.js
                - reducer.js
                - types.js
            - error/
                - actions.js
                - index.js
                - reducer.js
                - types.js
            - themes/
                - mode/
                    - dark.js
                    - light.js
                - action.js
                - index.js
                - reducer.js
                - types.js
            - index.js
            - rootReducer.js
        - screens/
            - Auth/
                - Auth/
                    - index.js
                    - styles.js
        - utils/
        - index.js

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
