const compilerConfig = require("./compiler.config");

export class Acir {
    loaderRunning: boolean = false;
    loaderStateImage: string;
    loaderStateNumber: number;

    constructor() {
        this.loader(true);
        this.loaderProcess();
        this.loaderStateNumber = 0;
        this.loaderStateImage = "";
    }

    loader(start: boolean) {
        this.loaderRunning = start;
    }

    loaderNextState() {
        var states = [
            "[ ============= ] |       1        ",
            "[ #============ ] /       2        ",
            "[ ==#========== ] -       3        ",
            "[ ====#======== ] \\      4        ",
            "[ ======#====== ] |       5        ",
            "[ ========#==== ] /       6        ",
            "[ ==========#== ] -       7        ",
            "[ ============# ] \\      8        ",
            "[ ============= ] |       10        ",
            "[ ============# ] /       11        ",
            "[ ==========#== ] -       12        ",
            "[ ========#==== ] \\      13        ",
            "[ ======#====== ] |       14        ",
            "[ ====#======== ] /       15        ", 
            "[ ==#========== ] -       16        ",
            "[ #============ ] \\      17        "
        ];

        if (this.loaderStateNumber > states.length - 1) {
            this.loaderStateNumber = 0;
        }

        this.loaderStateNumber++;

        this.loaderStateImage = states[this.loaderStateNumber - 1];
    }

    loaderProcess() {
        setInterval(() => {
            this.loaderNextState();
            process.stdout.write(this.loaderStateImage + "\r");
        }, 50);
    }

    printError(message: string) {
        process.stdout.write("[ Error ] " + message);
    }

    run() {

    }
}

const acir = new Acir();
acir.run();