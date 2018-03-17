import { extraClasses, validateName, buildApplicableModifiers } from './utils';

const defaultConfig = {
  el: '__',
  mod: '--',
  modValue: '-'
};

class BEM {
  blockName = '';
  config;

  constructor(block, config) {
    this.blockName = validateName(block);
    this.config = { ...defaultConfig, ...config };
  }

  element(el, modifiers = {}, extra = []) {
    const { el: elSep, mod: modSep, modValue: modValueSep } = this.config;

    const element = `${this.blockName}${elSep}${el}`;
    return [
      element,
      ...buildApplicableModifiers(element, modifiers, modSep, modValueSep),
      ...extraClasses(extra)
    ].join(' ');
  }
  block(modifiers = {}, extra = []) {
    const { mod: modSep, modValue: modValueSep } = this.config;
    return [
      this.blockName,
      ...buildApplicableModifiers(
        this.blockName,
        modifiers,
        modSep,
        modValueSep
      ),
      ...extraClasses(extra)
    ].join(' ');
  }

  b(modifiers, extra) {
    return this.block(modifiers, extra);
  }

  el(el, modifiers, extra) {
    return this.element(el, modifiers, extra);
  }
}

export function classNames(extra) {
  return extraClasses(extra).join(' ');
}

export default function(block, config) {
  return new BEM(block, config);
}
