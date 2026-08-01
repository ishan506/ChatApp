 #include <iostream>
using namespace std;
class Animal{
    public :
 
static int count;
 
static void hello (){
    cout<<count;
}
};
int Animal ::count=5303;
int main(){
    Animal::hello();
}