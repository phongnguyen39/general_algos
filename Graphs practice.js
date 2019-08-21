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
graph.addVertex('Mary');
graph.addVertex('Peter');
graph.addVertex('Jasper');
graph.addVertex('Elton');
graph.addVertex('Judge');
graph.addEdge('John', 'Mary');
graph.addEdge('Peter', 'Jasper');
graph.addEdge('Jasper', 'Elton');
graph.addEdge('John','Judge');
graph.addEdge('Mary','Judge')
graph.addEdge('Peter','Judge')
graph.addEdge('Jasper','Judge')
graph.addEdge('Elton','Judge')
console.log(graph)