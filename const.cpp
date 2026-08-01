#include<iostream>
using namespace std;
class Animal {
    public :
int a=7;
void p ()const{
int a=15;
cout<<a;
}
};
int main(){
  Animal obj;
obj.p();
cout<<obj.a;
}