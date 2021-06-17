const compilerConfig = require("./compiler.config");
const { Assembler } = require("./Assembler");
const fs = require("fs");
const path = require("path");

export class Acir {
    loaderRunning: boolean = false;
    loaderStateImage: string;
    loaderStateNumber: number;
    assembler: typeof Assembler;
    loaderTick: any;

    constructor(ready: any) {
        this.loaderTick = 0;
        console.log("[ Acir ] Starting...");
        this.loaderStateNumber = 0;
        this.assembler = new Assembler(this);
        this.loaderStateImage = "";
    }

    loader(start: boolean) {
        this.loaderRunning = start;
        if (start == false) {
            clearInterval(this.loaderTick);
        }
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
        (async() => {
            this.loaderTick = setInterval(() => {
                if (this.loaderRunning == true) {
                    this.loaderNextState();
                    process.stdout.write(this.loaderStateImage + "\r");
                }
            }, 100);
        })();
    }

    printError(message: string) {
        process.stdout.write("[ Error ] " + message);
    }

    run(scriptLocation: string) {
        fs.readFile(path.join(__dirname, "../", scriptLocation), "utf8", (error: any, data: string) => {
            this.assembler.assemble(data);
        });
    }
}