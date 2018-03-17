# bem-utility - wip [![Build Status](https://travis-ci.org/theparthy/bem-utility.svg?branch=master)](https://travis-ci.org/theparthy/bem-utility)
A little class to easily create classnames in BEM Syntax

## Usage
```
const BEM = bemUtility('your-block');

const block = Bem.block();
console.log(block);
// will return 'your-block'

const block_with_modifier = Bem.block({'modifier': true, color: 'green'})
console.log(block_with_modifier)
// will return 'your-block your-block--modifier your-block--color-green'

const element = Bem.el();
console.log(element);
// will return:
// 'your-block__element'

const element_with_modifier = Bem.el('element', {'modifier': true, color: 'green'})
console.log(element_with_modifier)
// will return:
// 'your-block__element your-block__element--modifier your-block__element--color-green'

```


TODO: 
 - Complete Documentation
 - write additional tests

