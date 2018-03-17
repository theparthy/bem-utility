import { TYPES } from './constants';

export function validateName(element, type = TYPES.BLOCK) {
  if (typeof element !== 'string') {
    throw new Error(`${type} name should be a string`);
  }
  const name = element.trim();

  if (!name) {
    throw new Error(`${type} name should be non-empty`);
  }
  return name;
}

export function extraClasses(extra) {
  switch (true) {
    case extra instanceof Array:
      return extra;
    case extra instanceof String:
    case extra instanceof Number:
      return [extra];
    case extra instanceof Object: {
      const keys = Object.keys(extra);
      if (keys.length === 0) return [];
      return keys.filter(key => !!extra[key]).map(cn => {
        const value = extra[cn];
        return `${cn}${typeof value === 'string' ? `-${value}` : ''}`;
      });
    }
  }
}

export function buildApplicableModifiers(
  node,
  modifiers,
  sep = '--',
  vSep = '-'
) {
  const keys = Object.keys(modifiers);
  if (keys.length === 0) return [];
  return keys.filter(key => !!modifiers[key]).map(mod => {
    const value = modifiers[mod];
    return `${node}${sep}${mod}${
      typeof value === 'string' ? `${vSep}${value}` : ''
    }`;
  });
}
