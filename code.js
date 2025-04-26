function augmentingPath(graph, start, end) {
    AdjList = []
    for(x in graph){
        edges = []
        for(gr in graph[x]){
            edges.push(gr)
        }
        AdjList[x] =edges
    }

    return depthFirstSearch(AdjList, start, end);

}
function depthFirstSearch(graph, startNode, targetNode) {
    visited = [startNode]
    node = startNode
    path = []


    path = nodeChecker(graph, startNode, targetNode, visited, node, path)
    if (path.includes(targetNode)){return path}
    return [];
}
function nodeChecker(graph, startNode, targetNode, visited, node, path){
    let check = node
    visited.push(check)
    path.push(check)
    if (check == targetNode){return path}

    for(let edge of graph[check])
    {
        let next = edge


        if (!visited.includes(next)){
            node=next
            nodeChecker(graph, startNode, targetNode,visited,node,path)
        }
        if (path.includes(targetNode)){return path}
    }
    if (path.length > 1) {path.pop()}
    return path
}
