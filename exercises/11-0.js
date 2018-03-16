/**
 * 图
 */

class Graph {
    constructor (v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.adj[i].push("");
            this.marked[i] = false;
        }
    }
    addEdge (v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph () {
        for (let i = 0; i < this.vertices; i++) {
            let str = i + ' -> ';
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] != undefined) {
                    str += this.adj[i][j] + '  ';
                }
            }
            console.log(str);
        }
    }
    // 深度优先搜索
    dfs (v) {
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log("Visited vertex: " + v);
            this.adj[v].forEach(element => {
                if (!this.marked[element]) {
                    this.dfs(element);
                }
            });
        }
    }
    // 广度优先搜索
    bfs (s) {
        let queue = [];
        this.marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            let v = queue.shift();
            if (this.adj[v] != undefined) {
                console.log('Visited vertex: ' + v);
                this.adj[v].forEach(element => {
                    if (!this.marked[element]) {
                        this.marked[element] = true;
                        queue.push(element);
                    }
                })
            }
        }
    }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.showGraph();

// g.dfs(0);

g.bfs(1);