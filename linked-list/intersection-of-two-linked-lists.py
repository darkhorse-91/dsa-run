from typing import Optional

# Definition for singly-linked list.


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def getSizeOFListNode(self, head):
        length = 0
        cur = head
        while cur:
            cur = cur.next
            length += 1
        return length

    def equalizer(self, head, steps):
        cur = head
        for i in range(steps):
            cur = cur.next
        return cur

    def findIntersect(self, node1, node2):

        while (node1):
            if (node1 == node2):
                return node1
            node1 = node1.next
            node2 = node2.next
        return None

    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        sizeListA = self.getSizeOFListNode(headA)
        sizeListB = self.getSizeOFListNode(headB)
        if sizeListA > sizeListB:
            stepNode = self.equalizer(headA, sizeListA-sizeListB)
            return self.findIntersect(stepNode, headB)

        elif sizeListA < sizeListB:
            stepNode = self.equalizer(headB, sizeListB-sizeListA)
            return self.findIntersect(stepNode, headA)

        return self.findIntersect(headB, headA)
