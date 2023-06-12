def printMaxMinDiff(S):
    X = 0
    Y = len(S)
    indexA = 0
    indexB = 0
    for i in range(Y):
        if S[i] == 'a':
            X = max(X, abs(indexA-i))
            indexA = min(i, indexA)
        if S[i] == 'b':
            Y = min(Y, abs(indexB-1))
            indexB = max(indexB, i)
    print(X, Y)
    return abs(X-Y)


S = 'aaabaaaabab'
printMaxMinDiff(S)
