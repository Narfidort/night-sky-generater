print("Hello World")

def approx_napier(n):
    return (1+1/n)**n


def iter_napier(r):
    for n in r:
        print(approx_napier(n))


iter_napier([2**x for x in range(30)])
