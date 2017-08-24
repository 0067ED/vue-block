
import Block from './components/Block';

Block.install = function (Vue) {
    Vue.component(Block.name, Block);
};
Block.version = VERSION;

 module.exports = Block;
