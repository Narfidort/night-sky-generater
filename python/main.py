print("Hello World")

<<<<<<< HEAD

=======
>>>>>>> 66c46ea7b3c99bded5e1ec50968acdad9a57fc4c
def approx_napier(n):
    return (1+1/n)**n


def iter_napier(r):
    for n in r:
        print(approx_napier(n))


iter_napier([2**x for x in range(30)])
