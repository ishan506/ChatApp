 #include<iostream>
 using namespace std;
 class Animal {
public :
int n;
void operator+(Animal &b2){
    int value=this->n;
    int value2=b2.n;
   cout<< value-value2;
}
 };
 int main(){
Animal B1;
Animal b2;
B1.n=12;
b2.n=21;
B1+b2;
 }