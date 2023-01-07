const useTraverseTree = () => {
    const insertNode = (tree, folderId, itemName, isFolder) => {
        // BASE CASE - inserting at the root of tree
        if (isFolder) {
            if (tree.id === folderId) {
                tree.children.unshift({
                    id: Date.now(),
                    name: itemName,
                    isFolder: true,
                    children: []
                })

                return tree
            }
        } else {
            if (tree.id === folderId) {
                tree.children.unshift({
                    id: Date.now(),
                    name: itemName,
                    isFolder: false
                })

                return tree
            }
        }

        // RECURSIVE CASE - updating the tree
        let latestNode = []
        latestNode = tree.children?.map(item => {
            return insertNode(item, folderId, itemName, isFolder)
        })
        return {
            ...tree,
            children: latestNode
        }
    }

    return { insertNode }
}

export default useTraverseTree
