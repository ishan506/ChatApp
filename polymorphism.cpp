 #include <iostream>
using namespace std;
class A {
    public :
int sum (int a , int b){
 return  a+b;
}
int sum (int a , float b){
    cout<<"j";
return a+b;
}
};
int main(){
A obj ;
cout<< obj . sum (2, 5.12F);
}