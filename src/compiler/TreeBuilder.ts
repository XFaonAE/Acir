export class TreeBuilder {
    currentTick: number;
    row: any;

    constructor() {
        this.currentTick = 0;
    }

    nextTick() {
        this.currentTick++;
    }

    runHeartBeat() {
        while(this.currentTick + 1 <= this.row.length) {
            this.nextTick();
        }
    }

    buildSourceTree(row: any) {
        this.row = row;
        this.runHeartBeat();
    }
}