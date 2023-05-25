# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head.next == None:
            return None
        ptr1 = head
        ptr2 = head
        for _ in range(n):
            ptr2 = ptr2.next
        if not ptr2:        #In case when n == length and we have to delete the head
            return head.next
        while ptr2.next:
            ptr1 = ptr1.next
            ptr2 = ptr2.next
        ptr1.next = ptr1.next.next
        return head