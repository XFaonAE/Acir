const { Lexer } = require("./compiler/Lexer");

export class Assembler {
    lexer: typeof Lexer;
    acir: any;

    constructor(acir: any) {
        this.acir = acir;
        this.lexer = new Lexer();
    }

    assemble(sourceCode: string) {
        this.acir.loader(false);
        this.lexer.buildFullTree(sourceCode);
    }
}