data Tree = Empty
          | Leaf Int
          | Node Tree Tree

depth :: Tree -> Int
depth Empty = 0
depth (Leaf n) = 1
depth (Node l r) = 1 + max (depth l) (depth r)


data List  = E | Cons Int List deriving(Eq,Show)


list_length :: List -> Int

list_length E = 0
list_length (Cons _ l) = 1 + (list_length l)

a = (list_length $ Cons 1 (Cons 2 E))