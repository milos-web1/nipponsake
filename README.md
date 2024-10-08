
## Local Data Structure
https://github.com/ej595wiz/nipponsake/tree/master/src/data


### `Category`[category.json](https://github.com/ej595wiz/nipponsake/tree/master/src/data/category.json)

Category JSON Structure.<br>

Category is defined as an Array of JSON Object.

### `Product`[products.json](https://github.com/ej595wiz/nipponsake/tree/master/src/data/products.json)
Product JSON Structure.<br>
Product is a JSON object. Each Key/Value defines one product. key is a "product id"  and value as the Product attributes.<br>

### `Brewery` [breweries.json](https://github.com/ej595wiz/nipponsake/tree/master/src/data/breweries.json)

Brewery JSON Structure.<br>
Brewery is a Array of JSON object. 

### `Build steps`
1. You need to have Node.js installed
2. Site is developed on ReactJS
3. npm install => to install all dependencies  
4. npm start => to start the node.js locally. default port is 3000
5. npm run-script build => to build the project. Build folder is created with the compiled content to deploy

### `Content changes`
1. Update content file locale folder /src/locales/en and   /src/locales/ja
2. To add any new category/product/brewery. Add details in the respective file in the data folder. Localized values must be defined in respective localized file.
4. On any image change. Please refer public/images folder. Each folder has a page name.

## run this for nvm
source $(brew --prefix nvm)/nvm.sh
export NVM_DIR=~/.nvm

nvm use 10.16.3

**Note: Self-explanatory
