# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
    
        midNode = self.findMiddle(head)
        endNode = self.reverseList(midNode)
        cur = head
        while(endNode):
            if cur.val != endNode.val:
                return False
            cur = cur.next
            endNode = endNode.next
        return True


    def findMiddle(self, ptr):
        slow = ptr
        fast = ptr
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def reverseList(self, ptr):
        prev = None
        cur = ptr
        while cur:
            nextz = cur.next
            cur.next = prev
            prev = cur
            cur = nextz 
        return prev