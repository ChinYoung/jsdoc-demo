# JsDoc

## js的类型检查
<!-- ts-vs-jsdoc -->
- "编写时"
  - typescript
  - js Doc
- 编译时
  - typescript
- 运行时
  - joi(nodejs)

## Outline

### 介绍
<!-- demo.js -->
#### 什么是jsDoc

      - jsDoc是一种用来给JavaScript代码添加注释的工具，通过使用一些特定的语法和标签，程序员可以在代码中添加说明文档，这些文档可以被jsDoc解析并生成API文档。这对于团队合作以及后期代码维护非常有用，因为它可以清楚描述函数的用途，参数类型，返回值等信息

#### jsDoc的作用和优点

      - jsDoc的主要作用是自动从源码中提取注释，然后生成API文档。它具有以下主要优点：
         1. 方便阅读和理解代码：通过jsDoc，开发人员可以在代码中添加功能说明、参数类型、返回类型和其他重要信息。这个特性使得代码更具有可读性和可理解性，对于团队合作和后期维护都十分重要。
         2. 提升开发效率：jsDoc自动生成的文档可以避免手动编写API文档的麻烦，从而提高开发效率。
         3. 强化代码规范：规范化的文档注释可以作为团队内部的编程规范，有助于保持代码的整洁和一致。
         4. 有助于代码复用：详细的函数注释可以让其他开发人员更加方便地了解和使用已有代码，从而有助于代码的复用。
         5. 方便进行单元测试编写：由于jsDoc注释中清晰地定义了函数的预期输入和输出，便于编写单元测试用例。

### jsDoc的安装和使用
<!-- demo.js -->

#### 安装方法

### jsDoc的基本语法和标签
<!-- demo.js -->
<!-- type.d.js -->

#### 常见jsDoc标签及其使用方法

[Use JSDoc: Index](https://jsdoc.app/)

- @typedef
- @property
- @type
- @param
- @returns
- @module

#### demo

      - description    -  `demos.name`
      - variables   -  `demos.age, friends, identity`
      - function    -  `Assistant.prototype.say`
      - module    - `common-index.js and commonjs-doc.js`
         - commonJs
         - Es module
      - with ts - `index.js+jsGroup+anotherJsGroup`
      - type checks. `index.js`

#### 使用.d.ts编写类型
<!-- type.d.ts -->
<!-- index.js -->

### jsDoc在实际项目中的应用

#### 如何在项目中设置和使用jsDoc

#### jsDoc在项目中的运用实例

      1. 给现有代码注释, 梳理业务逻辑, 便于后续维护
      2. 为网络请求类的function编写注释
      3. 重构/编写 复杂逻辑时添加注释, 方便后续阅读和理解
      4. 为全局函数/变量注释
      5. (尤其是js项目)中分工合作时, 提前约定页面/模块/组件协议
      6. 快速生成文档

### 相关工具推荐

#### vscode插件

- Paste JSON as JSDoc
  <!-- paste-json-as-jsdoc.json -->
- JSDoc Generator
  <!-- jsdoc-generator.js -->

#### 自定义标签的创建和应用

#### 如何通过扩展jsDoc来满足特定的项目需求

### JsDoc vs TS

- JSDoc和TypeScript都解决了编写和维护纯JavaScript代码的问题。然而，它们采用了不同的方法，各有利弊。

#### JSDoc的优势

- 灵活性和兼容性：JSDoc只是JavaScript注释，这意味着它可以添加到任何JavaScript代码库中，而不受语言版本的限制，并且不像TypeScript那样与编译器绑定。
- 无需编译步骤：这是从TypeScript转换到JSDoc最具动力的原因之一。TypeScript需要编译将TypeScript代码转换为JavaScript，以便浏览器能够理解，而JSDoc不需要任何其他步骤，因为它们只是“注释”，这是JavaScript本身支持的特性。与每次进行更改时都需要使用必要的TypeScript构建流程相比，这可以简化并加快开发工作流程。
- 代码注释：JSDoc不仅可以用于类型检查，还可以用于添加更多的文档，描述函数的工作原理，并生成文档网站，从而提供价值以增强代码的可维护性和理解性。

#### JSDoc的劣势

虽然JSDoc相对于TypeScript有很多优势，但是随着时间的推移，TypeScript的使用越来越普遍。以下是TypeScript相对于JSDoc的一些优势：

- 更强大的静态类型：TypeScript提供了一种强大的类型模型，并在编译时捕获这些错误。与JSDoc不同，这些类型在代码本身中结束，并且不受强制执行。
- 类型推断：TypeScript 可以从其值推断类型。这有助于减少显式类型注解，使代码库更简洁。
- 转译：TypeScript 可以通过其 polyfill 功能采用 JavaScript 语言的最新和未来特性。它可以将这些代码有效地转译成可理解的版本，以适应尚未支持这些特性的浏览器。

### 小结

#### jsDoc的重要性和必要性

#### 对jsDoc的应用和理解进行总结
