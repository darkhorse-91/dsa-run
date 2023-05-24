# Problem Description
# You have given a string A having Uppercase English letters.
# You have to find how many times subsequence "AG" is there in the given string.
# NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

# Input 1: ABCGAG
# Output 1 : 3
# Input 2: GAB
# Output 2: 0



def special_subsequence(seq):
    ptr_a = 0
    multiplier = 0
    subseq_count = 0
    len_seq = len(seq)
    for i in range(len_seq):
        if seq[i] == 'A':
            multiplier += 1
        if seq[i] == 'G':
            subseq_count += multiplier
    print(subseq_count)
    return subseq_count


test1 = "ABCGAG"
test2 = "GAB"

special_subsequence(test1)
special_subsequence(test2)