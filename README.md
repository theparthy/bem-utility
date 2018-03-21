# bem-utility [![Build Status](https://travis-ci.org/theparthy/bem-utility.svg?branch=master)](https://travis-ci.org/theparthy/bem-utility) [![Coverage Status](https://coveralls.io/repos/github/theparthy/bem-utility/badge.svg?branch=master)](https://coveralls.io/github/theparthy/bem-utility?branch=master)
A little class to easily create classnames in BEM Syntax

## Motivation
When developing react components i found it sort of annoying to write something like this:
```
const Avatar = ({title, imageUrl, size, styleOverride}) => (
  <div className={classNames('avatar', {[`avatar--${size}`]: !!size})}>
    <img alt={title} src={imageUrl} className="avatar__image" />
  </div>
);

Avatar.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

```
In some other components this way of adding classes got very unreadable. 
So i sat down an started hacking this library together.


## Install

```
npm i bem-utility 
```
```
yarn bem-utility 
```


## Usage
CommonJS environment
```js
const bemUtility = require('bem-utility').default
```

ES6 Modules

```js
import bemUtility from 'bem-utility'
```

UMD build

```js
var bemUtility = window.bemUtility.default
```

You can now start using the tool.


### Api
```js
// const modifier =  {modifier: true, modifierWithType: 'type'};

// const extraClasses = 'extra' || ['extra', 'anotherExtra']  || {conditionalExtra: true, conditionalExtraWithType: 'type'}; 

// const BEM = bemUtility('block-name'); // will return a instance if the BEM CLass

// BEM.block(modifier, extraClasses);
// BEM.element('element', modifier, extraClasses);

const BEM = bemUtility('your-block');

BEM.block(); // 'your-block'

BEM.block({'modifier': true, color: 'green'}); // 'your-block your-block--modifier your-block--color-green'

BEM.element('element'); // 'your-block__element'

BEM.element('element', {'modifier': true, color: 'green'}); // 'your-block__element your-block__element--modifier your-block__element--color-green'

```
## Config
If you want to change the different seperators you can pass in a config object 
```js
// const defaultConfig = {
//   el: '__',
//   mod: '--',
//   modValue: '-'
// };
const config = {
   el: '&&'
}

const BEM = bemUtility('your-block', config);

```


TODO: 
 - Fine tune Documentation

