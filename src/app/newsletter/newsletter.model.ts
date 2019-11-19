export class Newsletter {
    id: number;
    constructor(private email: string) {
        this.id = Math.floor(Math.random() * 100)
    }
}