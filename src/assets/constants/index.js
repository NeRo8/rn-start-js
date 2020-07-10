function createConstFile(name) {
  return `const ${name} = {};
  export default ${name}`;
}

function createConstIndex() {
  return `import images from './images';
  import fonts from './fonts';
  import colors from './colors';
  import svg from './svg';

  export {images, fonts, colors, svg};`;
}

export { createConstFile, createConstIndex };
