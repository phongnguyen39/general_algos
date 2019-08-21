class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if(!this.adjList[v]) {
            this.adjList[v] = [];
        }
    }

    addEdge(v1,v2){
        if(!this.adjList[v1] || !this.adjList[v2]){
            this.addVertex(v1);
            this.addVertex(v2);
        }

        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    removeEdge(v1,v2) {
        if(!this.adjList[v1] || !this.adjList[v2]) {
            return false;
        }

        this.adjList[v1] = this.adjList[v1].filter(v=>v!==v2);
        this.adjList[v2] = this.adjList[v2].filter(v=>v!==v1);
    }
}

let graph = new Graph();
graph.addVertex('John');
console.log(graph)