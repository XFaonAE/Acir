export class Lexer {
    source: any;

    constructor() {
        this.source = {
            lines: null,
            row: null,
            rowSplit: null
        }
    }

    buildFullTree(sourceCode: string) {
        this.source.lines = sourceCode.split(/\r?\n/);

        var lineIndex = 0;
        while(lineIndex < this.source.lines.length) {
            this.source.lines[lineIndex] = this.source.lines[lineIndex].split("");
            lineIndex++;
        }

        lineIndex = 0;
        var row = [];

        while(lineIndex < this.source.lines.length) {
            row = this.
            lineIndex++;
        }
    }
}