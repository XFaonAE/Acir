const { Lexer } = require("./compiler/Lexer");
const { TreeBuilder } = require("./compiler/TreeBuilder");

export class Assembler {
    lexer: typeof Lexer;
    acir: any;
    treeBuilder: typeof TreeBuilder;

    constructor(acir: any) {
        this.acir = acir;
        this.lexer = new Lexer();
        this.treeBuilder = new TreeBuilder();
    }

    assemble(sourceCode: string) {
        this.acir.loader(false);
        var row = this.lexer.buildFullRow(sourceCode);
        this.treeBuilder.buildSourceTree(row);
    }
}