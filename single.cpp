 #include <iostream>
using namespace std;
class Animal {
    public:
int a;
 Animal (){
    a=5;
 }
};
class A  {
     public:
int a;
 A (){
    a=5;
 }
};
class b :public A , public Animal{
};
int main(){
b obj;
cout<<obj.Animal :: a;
}