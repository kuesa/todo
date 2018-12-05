## Design Guidelines

First and foremost, the application should look uniform across all platforms. Since it is not a very complicated app, on desktop it does not need to take up very much space, and as such has had its use of screen real estate limited. To appear fluid and functional, the application shall strictly adhere to [Material design](https://material.io/).

## Programming/Development Guidelines

|       Type       | Naming Convention |
| :--------------: | :---------------: |
| Global Variables |    PascalCase     |
|    Functions     |     camelCase     |
| Classes/Structs  |    PascalCase     |
|    Parameters    |     camelCase     |

There will be _absolutely_ no drop brackets. Try not to use global variables, and instead use accessor functions.

Every function and class should have a commented line above it explaining the purpose of the function, and comment where necessary elsewhere in the code.

For the purposes of collaboration and efficiency, features should be implemented one at a time, and you should always create a branch when doing this. As for GitHub, when you want to merge a completed feature to the master branch, create a pull request and let someone else review your code and merge for you. When reviewing code, check for formatting errors and readability, and make sure that merge conflicts (if any) are resolved.
