const compilerConfig = require("./compiler.config");
const { Assembler } = require("./Assembler");

export class Acir {
    loaderRunning: boolean = false;
    loaderStateImage: string;
    loaderStateNumber: number;
    assembler: typeof Assembler;

    constructor() {
        this.loader(true);
        this.loaderProcess();
        this.loaderStateNumber = 0;
        this.assembler = new Assembler();
        this.loaderStateImage = "";
    }

    loader(start: boolean) {
        this.loaderRunning = start;
    }

    loaderNextState() {
        var states = [
            "[ | ]",
            "[ / ]",
            "[ - ]",
            "[ \\ ]",
        ];

        if (this.loaderStateNumber > states.length - 1) {
            this.loaderStateNumber = 0;
        }

        this.loaderStateNumber++;
        this.loaderStateImage = states[this.loaderStateNumber - 1];
    }

    loaderProcess() {
        setInterval(() => {
            if (this.loaderRunning == true) {
                this.loaderNextState();
                process.stdout.write(this.loaderStateImage + "\r");
            }
        }, 100);
    }

    printError(message: string) {
        process.stdout.write("[ Error ] " + message);
    }

    run() {
        this.assembler.assemble();
    }
}