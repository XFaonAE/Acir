const { Lexer } = require("./compiler/Lexer");

export class Assembler {
    lexer: typeof Lexer;

    constructor() {
        this.lexer = new Lexer();
    }

    assemble(sourceCode: string) {
        this.lexer.buildFullTree(sourceCode);
    }
}