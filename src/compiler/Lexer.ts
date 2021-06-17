export class Lexer {
    source: any;

    constructor() {
        this.source = {
            lines: null,
            row: [],
            rowSplit: null
        }
    }

    buildFullRow(sourceCode: string) {
        this.source.lines = sourceCode.split(/\r?\n/);

        var lineIndex = 0;
        while(lineIndex < this.source.lines.length) {
            this.source.lines[lineIndex] = this.source.lines[lineIndex].split("");
            lineIndex++;
        }

        lineIndex = 0;
        while(lineIndex < this.source.lines.length) {
            this.source.row = this.source.row.concat(this.source.lines[lineIndex]);
            lineIndex++;
        }

        return this.source.row;
    }
}