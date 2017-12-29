class Events {
    constructor() {
        this.listeners = [];
    }

    subscribe(name, fn) {
        const alreadyAdded = this.listeners.some(l => l.name === name && l.fn === fn);

        if (!alreadyAdded) {
            this.listeners.push({ name, fn });
        }
    }

    unsubscribe(name, fn) {
        const index = this.listeners.findIndex(l => l.name === name && l.fn === fn);

        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }

    publish(name, ...args) {
        this.listeners
            .filter(l => l.name === name)
            .forEach(l => l.fn(...args))
    }
}

export default new Events();