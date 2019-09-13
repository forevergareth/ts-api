compileOnSave — Enable Compile-on-Save for this project.

compilerOptions — Instructs the TypeScript compiler how to compile .ts files.

lib—Specify library file to be included in the compilation. Requires TypeScript version 2.0 or later

rootDir— Specifies the root directory of input files. Use to control the output directory structure with — outDir.

outDir— Redirect output structure to the directory.

module— Specify module code generation: none, commonjs, amd, system, umd, es2015 or esnext.

target — Specify ECMAScript target version. Permitted values are es3, es5, es6, es2015, es2016, es2017, es2018 or esnext.

sourceMap— Generates corresponding ‘.map’ file.

allowJs— Allow javascript files to be compiled.

Routing controllers has two requirements: experimentalDecorators and emitDecoratorMetadata should be equal to true. What means each of these configurations:
experimentalDecorators — Enables experimental support for ES7 decorators.

emitDecoratorMetadata — Emit design-type metadata for decorated declarations in source.

skipLibCheck — Skip type checking of declaration files. Requires TypeScript version 2.0 or later.

include — Specifies a list of type declarations to be included in auto type acquisition. Ex. [\”jquery\”, \”lodash\”]
exclude — Specifies a list of type declarations to be excluded from auto type acquisition. Ex. [\”jquery\”, \”lodash\”]