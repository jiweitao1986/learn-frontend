import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
const person = { name: '张三' };
const hasName = Reflect.has(person, 'name');

