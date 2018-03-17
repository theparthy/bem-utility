# bem-utility - wip
A little class to easily create classnames in BEM Syntax

## Usage
```
import bemHelper from './utils/bemHelper';

const BEM = bemHelper('your-block');

const block = Bem.block();
console.log(block);
// will return 'your-block'

const block_with_modifier = Bem.block({'modifier': true, color: 'green'})
console.log(block_with_modifier)
// will return 'your-block your-block--modifier your-block--color-green'

const element = Bem.el();
console.log(element);
// will return:
// 'your-block'

const element_with_modifier = Bem.el('element', {'modifier': true, color: 'green'})
console.log(element_with_modifier)
// will return:
// 'your-block__element your-block__element--modifier your-block__element--color-green'

```


TODO: 
 - Complete Documentation
 - write Tests

