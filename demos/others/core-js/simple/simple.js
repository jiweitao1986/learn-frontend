"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6/reflect");
require("core-js/es7/reflect");
var person = { name: '张三' };
var hasName = Reflect.has(person, 'name');
