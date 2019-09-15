type Hour = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 // size(Hour) = 12
type Period = 'AM' | 'PM' // size(Period) = 2
type Prod = [Hour, Period] // size(Prod) = size(Hour) * size(Period) = 24


type A = true | false; // size(A) = 2

type B = 'AM' | 'PM'  // size(B) = 2

type Sum = A | B // size(A) + size(B) = 4