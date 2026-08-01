 #include <iostream>
using namespace std;
class Animal {
public :
int n;
Animal() {
this->n=12;
}
};
class dog : public Animal {
    public :
    void print (){
        cout<<this->n;
    }
};

int main(){
dog d1;
cout<<d1.n;
d1.print ();
return 0;
}