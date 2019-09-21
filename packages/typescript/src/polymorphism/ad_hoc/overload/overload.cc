#include <iostream>
using namespace std;

int add(int x, int y){
  return x+y;
}
string add(string x, string y){
  return x + "," + y;
}

int main(){
  cout<< add(1,2) << add("hello", "world") <<endl;
}