const isNodeChanged = (node1, node2) => {
    const node1Attributes = node1.attributes;
    const node2Attributes = node2.attributes;
    if (node1Attributes.length !== node2Attributes.length) {
        // attribute 개수가 다르면 무조건 changed
        return true;
    }

    const differenetAttribute = Array
        .from(node1Attributes)
        .find(attribute => {
            const {name} = attribute;
            const attribute1 = node1.getAttribute(name);
            const attribute2 = node2.getAttribute(name);

            return attribute1 !== attribute2;
        });

    if (differenetAttribute) {
        // 어트리뷰트의 순서가 다르거나, 그냥 아예 다르면 changed
        return true;
    }

    if (node1.children.length === 0 &&
        node2.children.length === 0 &&
        node1.textContent !== node2.textContent) {
        // 두 노드가 자식이 없는데, 텍스트 내용물이 다르면 changed
        return true;
    }

    return false;
};

const applyDiff = (parentNode, realNode, virtualNode) => {
    if (realNode && !virtualNode) {
        // 새로 바뀔 가상 노드가 없어졌다면, 실제 노드도 없애자
        realNode.remove();
        return;
    }
    if (!realNode && virtualNode) {
        // 원래 없는 노드인데, 이번에 추가되었다면 부모 노드에 추가
        parentNode.appendChild(virtualNode);
        return;
    }
    if (isNodeChanged(virtualNode, realNode)) {
        // 노드의 내용이 변경되었을 때만 변경
        realNode.replaceWith(virtualNode);
        return;
    }

    const realChildren = Array.from(realNode.children);
    const virtualChildren = Array.from(virtualNode.children);

    const max = Math.max(realChildren.length, virtualChildren.length);

    for (let i = 0; i < max; i++) {
        applyDiff(realNode, realChildren[i], virtualChildren[i]);
    }
};

export default applyDiff;